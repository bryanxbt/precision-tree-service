import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the team behind ${site.name} — local tree care built on safety and trust.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            About us
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Quintin &amp; Bryan — building a tree service the right way
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            {site.name} is {site.partners}. We started with a simple idea:
            homeowners deserve skilled tree work without the runaround. We’re a
            small crew focused on safety, communication, and finishing strong.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="tree-pattern min-h-[320px] rounded-3xl p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-light">
              Our promise
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">
              Show up on time. Work safely. Leave it clean. Stand behind the
              work.
            </p>
          </div>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              We’re just getting started, and every job is a chance to earn a
              referral. Quintin is based in Kokomo; Bryan is based in Greenwood.
              Together we cover tree work along that corridor — and we take the
              time to explain options, protect your property, and price jobs
              fairly.
            </p>
            <p>
              The name says who we are: <strong>Q</strong>uintin and{" "}
              <strong>B</strong>ryan — two partners you can call directly, not a
              call center.
            </p>
            <ul className="space-y-2 pt-2 text-sm font-medium text-stone-800">
              <li>• Safety-focused crew practices</li>
              <li>• Free written estimates</li>
              <li>• Residential & light commercial</li>
              <li>• Emergency storm support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            What we stand for
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-stone-100 bg-stone-50 p-6"
              >
                <h3 className="text-lg font-semibold text-stone-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
