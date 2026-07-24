"use client";

import { FormEvent, useId, useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

type QuoteFormProps = {
  /** Compact hero form (name, phone, message only) */
  variant?: "full" | "compact";
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
            : "border border-emerald-200 bg-emerald-50 text-emerald-900"
        } ${className}`}
      >
        <p className="text-lg font-semibold">Thanks — we got your request.</p>
        <p
          className={`mt-2 text-sm ${onDark ? "text-emerald-50/85" : "text-emerald-800/80"}`}
        >
          We will follow up soon. For urgent storm work, call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className={`mt-6 text-sm font-semibold underline-offset-2 hover:underline ${
            onDark ? "text-amber-300" : "text-emerald-800"
          }`}
        >
          Send another message
        </button>
      </div>
    );
  }

  if (variant === "compact") {
    const input =
      "w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:ring-2";
    return (
      <form
        onSubmit={onSubmit}
        className={`space-y-3 rounded-2xl bg-white p-5 shadow-2xl sm:p-6 ${className}`}
      >
        <div>
          <p className="text-lg font-bold text-stone-900">Get a free quote</p>
          <p className="mt-1 text-sm text-stone-600">
            No pressure. We usually respond the same day.
          </p>
        </div>
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
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Short message about your needs *"
          className={`${input} resize-y`}
          aria-label="Message"
        />
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
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-emerald-950 shadow-sm transition hover:bg-amber-400 disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send free quote request"}
        </button>
      </form>
    );
  }

  const labelCls = "mb-1.5 block text-sm font-medium text-stone-700";
  const fieldCls =
    "w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:ring-2";

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
        className="w-full rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
