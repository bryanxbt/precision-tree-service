"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // Client-side only for v1 — wires up when you add email/API later
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <p className="text-lg font-semibold text-emerald-900">
          Thanks — we got your request.
        </p>
        <p className="mt-2 text-sm text-emerald-800/80">
          We’ll follow up soon. For urgent storm work, call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-emerald-800 underline-offset-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Jane Smith" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 123-4567"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />
      <Field
        label="Property address / city"
        name="location"
        required
        placeholder="123 Oak St, Your City"
      />
      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
          Service needed
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:ring-2"
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
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
          Tell us about the job
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tree type/size if known, location on property, urgency, photos welcome later…"
          className="w-full resize-y rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:ring-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request free quote"}
      </button>
      <p className="text-xs text-stone-500">
        Form is demo-only for now — submissions are not emailed yet. We can
        connect Resend, Formspree, or your inbox next.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-stone-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm text-stone-900 outline-none ring-emerald-700/30 focus:border-emerald-700 focus:ring-2"
      />
    </div>
  );
}
