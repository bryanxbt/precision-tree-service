import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your free quote request.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
          Request received
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Thanks — we got your message
        </h1>
        <p className="mt-4 text-lg text-stone-600">
          {site.partners} will review your request and follow up soon, usually
          the same day during business hours.
        </p>

        <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 text-left sm:p-8">
          <h2 className="text-lg font-semibold text-stone-900">
            Need help right now?
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            For storm damage, blocked driveways, or anything urgent, call or
            text us directly:
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-6 py-3.5 text-base font-bold text-white transition hover:bg-brand-gold-light sm:w-auto"
          >
            Call {site.phone}
          </a>
          <p className="mt-3 text-xs text-stone-500">{site.hours}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-gold"
          >
            Back to home
          </Link>
          <Link
            href="/services/"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-gold"
          >
            Browse services
          </Link>
          <Link
            href="/gallery/"
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-gold"
          >
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
