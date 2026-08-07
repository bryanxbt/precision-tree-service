import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects and uses contact information from quote requests.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
          Legal
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-stone-900">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-stone-500">
          Last updated: July 30, 2026
        </p>

        <div className="prose-qb mt-10 space-y-6 text-stone-700 leading-relaxed">
          <p>
            {site.name} (“we,” “us”) respects your privacy. This page explains
            what we collect when you use{" "}
            <a href={site.url} className="text-brand-gold-dark underline">
              our website
            </a>{" "}
            and request a quote.
          </p>

          <h2 className="text-xl font-semibold text-stone-900">
            Information we collect
          </h2>
          <p>When you submit a quote or contact form, we may collect:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name and phone number</li>
            <li>Email address (if provided)</li>
            <li>Property address or city</li>
            <li>Service type and message details you choose to share</li>
            <li>
              Basic technical data (browser type, pages visited) if analytics is
              enabled
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-stone-900">
            How we use it
          </h2>
          <p>We use your information to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Respond to quote requests and schedule estimates</li>
            <li>Provide tree services you request</li>
            <li>Improve our website and marketing (aggregated analytics)</li>
          </ul>
          <p>
            We do not sell your personal information. We may use trusted
            providers (for example, form delivery or email) solely to operate
            the business.
          </p>

          <h2 className="text-xl font-semibold text-stone-900">
            Calls and texts
          </h2>
          <p>
            If you provide a phone number and request a quote, you consent to
            being contacted by phone or text about your request. Message and
            data rates may apply.
          </p>

          <h2 className="text-xl font-semibold text-stone-900">Retention</h2>
          <p>
            We keep lead and job records as long as needed to serve you and meet
            legal or insurance requirements, then delete or archive them
            reasonably.
          </p>

          <h2 className="text-xl font-semibold text-stone-900">Your choices</h2>
          <p>
            To update or delete your contact details, email{" "}
            <a
              href={site.emailHref}
              className="font-medium text-brand-gold-dark hover:underline"
            >
              {site.email}
            </a>{" "}
            or call{" "}
            <a
              href={site.phoneHref}
              className="font-medium text-brand-gold-dark hover:underline"
            >
              {site.phone}
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-stone-900">Contact</h2>
          <p>
            {site.name}
            <br />
            Based in {site.headquarters} · Serving {site.serviceArea}
            <br />
            {site.phone} · {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
