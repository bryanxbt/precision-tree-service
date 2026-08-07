/**
 * Lead form delivery for static export (GitHub Pages).
 *
 * Default: FormSubmit.co → site.email (qbstrees@gmail.com).
 * Optional overrides at build time (repo Variables / .env.local):
 *   NEXT_PUBLIC_FORMSPREE_ID
 *   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
 *   NEXT_PUBLIC_FORMSUBMIT_EMAIL  (defaults to business email)
 */

import { site } from "@/lib/site";

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
  return (
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL?.trim() || site.email
  );
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

    // FormSubmit.co — free; first submit sends an activation email to confirm the inbox
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(formSubmitEmail)}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: payload.name,
          phone: payload.phone,
          email: payload.email || "",
          location: payload.location || "",
          service: payload.service || "",
          message: payload.message,
          source: payload.source || "",
          consent: payload.consent || "",
          _subject: subject,
          _template: "table",
          _captcha: "false",
          _replyto: payload.email || undefined,
        }),
      },
    );
    const data = (await res.json().catch(() => ({}))) as {
      success?: string | boolean;
      message?: string;
    };
    if (!res.ok) {
      return {
        ok: false,
        error: data.message || "Could not send your request. Please call us.",
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
