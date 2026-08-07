"use client";

import { FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { payloadFromForm, submitQuote } from "@/lib/forms";
import { trackLeadConversion } from "@/lib/track";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "error";

type QuoteFormProps = {
  /** Compact hero form (name, phone, message only) */
  variant?: "full" | "compact" | "hero";
  className?: string;
  /** Light text styles for dark hero backgrounds */
  onDark?: boolean;
  /** Analytics / CRM source tag */
  source?: string;
};

export function QuoteForm({
  variant = "full",
  className = "",
  onDark = false,
  source,
}: QuoteFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const uid = useId();
  const router = useRouter();
  const formSource =
    source ||
    (variant === "hero"
      ? "hero"
      : variant === "compact"
        ? "compact"
        : "contact");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const payload = payloadFromForm(form, formSource);
    const result = await submitQuote(payload);

    if (!result.ok) {
      setStatus("error");
      setErrorMsg(result.error);
      return;
    }

    trackLeadConversion();
    form.reset();
    router.push("/thank-you/");
  }

  const errorBlock =
    status === "error" ? (
      <div
        className={`rounded-xl border px-3 py-2 text-sm ${
          onDark
            ? "border-red-300/40 bg-red-950/40 text-red-100"
            : "border-red-200 bg-red-50 text-red-800"
        }`}
        role="alert"
      >
        <p>{errorMsg}</p>
        <p className="mt-1 font-semibold">
          Call or text{" "}
          <a href={site.phoneHref} className="underline underline-offset-2">
            {site.phone}
          </a>{" "}
          anytime.
        </p>
      </div>
    ) : null;

  if (variant === "compact" || variant === "hero") {
    const isHero = variant === "hero";
    const input =
      "w-full rounded-xl border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none ring-brand-gold/30 focus:border-brand-gold-dark focus:ring-2 sm:py-2.5";
    return (
      <form
        onSubmit={onSubmit}
        className={`rounded-2xl bg-white shadow-2xl ${
          isHero ? "space-y-2.5 p-4 sm:space-y-3 sm:p-5" : "space-y-3 p-5 sm:p-6"
        } ${className}`}
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="text-base font-bold text-stone-900 sm:text-lg">
              Get a free quote
            </p>
            <p className="mt-0.5 text-xs text-stone-600 sm:text-sm">
              No pressure. Prefer to talk?{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-brand-gold-dark hover:underline"
              >
                Call {site.phone}
              </a>
            </p>
          </div>
        </div>
        {errorBlock}
        <div
          className={
            isHero
              ? "grid gap-2 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3"
              : "space-y-3"
          }
        >
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Full name *"
            className={input}
            aria-label="Full name"
          />
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Phone *"
            className={input}
            aria-label="Phone"
          />
          {isHero ? (
            <input
              name="message"
              required
              placeholder="What do you need help with? *"
              className={`${input} sm:col-span-2 lg:col-span-1`}
              aria-label="Message"
            />
          ) : (
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Short message about your needs *"
              className={`${input} resize-y`}
              aria-label="Message"
            />
          )}
          {isHero && (
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-brand-gold px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-gold-light disabled:opacity-70 lg:col-span-1"
            >
              {status === "sending" ? "Sending…" : "Send request"}
            </button>
          )}
        </div>
        <label className="flex items-start gap-2 text-xs text-stone-500">
          <input
            type="checkbox"
            name="consent"
            required
            value="yes"
            className="mt-0.5 rounded border-stone-300"
          />
          <span>
            I consent to being contacted about my tree service request.{" "}
            <a href="/privacy/" className="underline underline-offset-2">
              Privacy
            </a>
          </span>
        </label>
        {!isHero && (
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-gold-light disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send free quote request"}
          </button>
        )}
      </form>
    );
  }

  const labelCls = "mb-1.5 block text-sm font-medium text-stone-700";
  const fieldCls =
    "w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none ring-brand-gold/30 focus:border-brand-gold-dark focus:ring-2";

  return (
    <form
      onSubmit={onSubmit}
      className={`space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {errorBlock}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelCls}>
            Name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldCls}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-phone`} className={labelCls}>
            Phone
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(555) 123-4567"
            className={fieldCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-email`} className={labelCls}>
          Email
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldCls}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-location`} className={labelCls}>
          Property address / city
        </label>
        <input
          id={`${uid}-location`}
          name="location"
          required
          autoComplete="street-address"
          placeholder="123 Oak St, Greenwood, IN"
          className={fieldCls}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-service`} className={labelCls}>
          Service needed
        </label>
        <select
          id={`${uid}-service`}
          name="service"
          required
          defaultValue=""
          className={`${fieldCls} bg-white`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>
      <div>
        <label htmlFor={`${uid}-message`} className={labelCls}>
          Tell us about the job
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          required
          rows={4}
          placeholder="Tree type/size if known, location on property, urgency…"
          className={`${fieldCls} resize-y`}
        />
      </div>
      <label className="flex items-start gap-2 text-xs text-stone-500">
        <input
          type="checkbox"
          name="consent"
          required
          value="yes"
          className="mt-0.5 rounded border-stone-300"
        />
        <span>
          I consent to being contacted about my tree service request. See our{" "}
          <a href="/privacy/" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request free quote"}
      </button>
      <p className="text-xs text-stone-500">
        Prefer the phone? Call{" "}
        <a
          href={site.phoneHref}
          className="font-semibold text-brand-gold-dark hover:underline"
        >
          {site.phone}
        </a>{" "}
        — we answer local calls.
      </p>
    </form>
  );
}
