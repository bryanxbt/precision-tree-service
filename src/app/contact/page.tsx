import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact / Free Quote",
  description: `Request a free tree service estimate from ${site.name} in Greenwood, Indiana.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            Contact
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Get a free quote
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Tell us about the tree or the problem. For emergencies and storm
            damage, call{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-brand-gold-dark hover:underline"
            >
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <QuoteForm />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-stone-900">
                Reach us directly
              </h2>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-medium text-stone-500">Phone</dt>
                  <dd className="mt-0.5">
                    <a
                      href={site.phoneHref}
                      className="font-semibold text-brand-gold-dark hover:underline"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-stone-500">Email</dt>
                  <dd className="mt-0.5">
                    <a
                      href={site.emailHref}
                      className="font-semibold text-brand-gold-dark hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-stone-500">Hours</dt>
                  <dd className="mt-0.5 text-stone-800">{site.hours}</dd>
                </div>
                <div>
                  <dt className="font-medium text-stone-500">Based in</dt>
                  <dd className="mt-0.5 text-stone-800">{site.headquarters}</dd>
                </div>
                <div>
                  <dt className="font-medium text-stone-500">Service area</dt>
                  <dd className="mt-0.5 text-stone-800">{site.serviceArea}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-blue-950 p-6 text-blue-50">
              <h2 className="text-lg font-semibold">What happens next?</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-blue-100/90">
                <li>We review your request (and any details you send).</li>
                <li>We follow up to confirm timing and scope.</li>
                <li>You get a clear, free estimate — no pressure.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
