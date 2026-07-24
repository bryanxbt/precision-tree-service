import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about tree removal, estimates, insurance, and service areas from ${site.name}.`,
};

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
            FAQ
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Questions homeowners ask
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Straight answers about estimates, insurance, storms, and how we
            work — including that we are not certified arborists.
          </p>
        </div>
      </section>
      <FAQ />
      <CTABanner />
    </>
  );
}
