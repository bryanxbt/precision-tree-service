/**
 * Lead form delivery for static export (GitHub Pages).
 * Configure ONE of these at build time (repo Variables / .env.local):
 *   NEXT_PUBLIC_FORMSPREE_ID          e.g. xyzabcde
 *   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY  from https://web3forms.com
 *   NEXT_PUBLIC_FORMSUBMIT_EMAIL      e.g. hello@qbtreeservices.com
 */

export type QuotePayload = {
  name: string;
  phone: string;
  email?: string;
  location?: string;
  service?: string;
  message: string;
  consent?: string;
  /** Where the form was submitted from */
  source?: string;
};

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string; unconfigured?: boolean };

function getFormspreeId() {
  return process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim() || "";
}

function getWeb3Key() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "";
}

function getFormSubmitEmail() {
  return process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim() || "";
}

/** True when at least one lead endpoint is configured */
export function isLeadCaptureConfigured(): boolean {
  return Boolean(getFormspreeId() || getWeb3Key() || getFormSubmitEmail());
}

export async function submitQuote(payload: QuotePayload): Promise<SubmitResult> {
  const formspreeId = getFormspreeId();
  const web3Key = getWeb3Key();
  const formSubmitEmail = getFormSubmitEmail();

  if (!formspreeId && !web3Key && !formSubmitEmail) {
    return {
      ok: false,
      unconfigured: true,
      error:
        "Lead form is not connected yet. Please call or text us — we will get you scheduled.",
    };
  }

  const subject = `QB Tree Services quote — ${payload.name}${payload.service ? ` (${payload.service})` : ""}`;

  try {
    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: subject,
          _replyto: payload.email || undefined,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        return {
          ok: false,
          error: data.error || "Could not send your request. Please call us.",
        };
      }
      return { ok: true };
    }

    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject,
          from_name: payload.name,
          ...payload,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
      };
      if (!res.ok || data.success === false) {
        return {
          ok: false,
          error: data.message || "Could not send your request. Please call us.",
        };
      }
      return { ok: true };
    }

    // FormSubmit.co — free, confirms the inbox once
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(formSubmitEmail)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: subject,
          _template: "table",
          _captcha: "false",
        }),
      },
    );
    if (!res.ok) {
      return {
        ok: false,
        error: "Could not send your request. Please call us.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Network error. Please call or text us directly.",
    };
  }
}

/** Collect FormData into a QuotePayload */
export function payloadFromForm(
  form: HTMLFormElement,
  source: string,
): QuotePayload {
  const fd = new FormData(form);
  const str = (key: string) => String(fd.get(key) ?? "").trim();
  return {
    name: str("name"),
    phone: str("phone"),
    email: str("email") || undefined,
    location: str("location") || undefined,
    service: str("service") || undefined,
    message: str("message"),
    consent: str("consent") || (fd.get("consent") ? "yes" : undefined),
    source,
  };
}
