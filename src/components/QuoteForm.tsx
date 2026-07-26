"use client";

import { FormEvent, useId, useState } from "react";
import { services, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

type QuoteFormProps = {
  /** Compact hero form (name, phone, message only) */
  variant?: "full" | "compact" | "hero";
  className?: string;
  /** Light text styles for dark hero backgrounds */
  onDark?: boolean;
};

export function QuoteForm({
  variant = "full",
  className = "",
  onDark = false,
}: QuoteFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const uid = useId();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Client-side only for v1 — wire to Formspree / Resend / API later
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "sent") {
    return (
      <div
        className={`rounded-2xl p-6 text-center sm:p-8 ${
          onDark
            ? "border border-white/20 bg-white/10 text-white"
            : "border border-brand-gold/40 bg-amber-50 text-brand-gold-dark"
        } ${className}`}
      >
        <p className="text-lg font-semibold">Thanks — we got your request.</p>
        <p
          className={`mt-2 text-sm ${onDark ? "text-blue-50/85" : "text-brand-gold-dark/80"}`}
        >
          We will follow up soon. For urgent storm work, call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-6 text-sm font-semibold underline-offset-2 hover:underline ${
            onDark ? "text-brand-gold-light" : "text-brand-gold-dark"
          }`}
        >
          Send another message
        </button>
      </div>
    );
  }

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
            placeholder="Full name *"
            className={input}
            aria-label="Full name"
          />
          <input
            name="phone"
            type="tel"
            required
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
            className="mt-0.5 rounded border-stone-300"
          />
          <span>
            I consent to being contacted about my tree service request.
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelCls}>
            Name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            required
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
          placeholder="123 Oak St, Your City"
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
          className="mt-0.5 rounded border-stone-300"
        />
        <span>I consent to being contacted about my tree service request.</span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-gold-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request free quote"}
      </button>
      <p className="text-xs text-stone-500">
        Form is demo-only until we connect email delivery (Formspree, Resend,
        etc.).
      </p>
    </form>
  );
}
