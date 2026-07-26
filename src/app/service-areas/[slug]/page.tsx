import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { QuoteForm } from "@/components/QuoteForm";
import { serviceAreas, services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Tree Services in ${area.name}`,
    description: `Professional tree removal, trimming, stump grinding, and storm cleanup in ${area.name}. ${site.name} — free estimates.`,
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
            <Link href="/service-areas" className="hover:underline">
              Service areas
            </Link>{" "}
            / {area.name}
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Tree service in {area.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">{area.blurb}</p>
          <p className="mt-3 max-w-2xl text-stone-600">
            {site.name} provides tree removal, trimming, stump grinding, lot
            clearing, and storm response for homeowners and businesses in{" "}
            {area.name}. Free estimates. Local crew you can rely on.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">
              Services in {area.name}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="block rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-stone-800 shadow-sm hover:border-blue-300 hover:text-blue-900"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl bg-blue-950 p-6 text-blue-50">
              <p className="font-semibold">Prefer to call?</p>
              <a
                href={site.phoneHref}
                className="mt-2 block text-2xl font-bold text-red-500"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-blue-100/80">{site.hours}</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <CTABanner
        title={`Free tree service estimate in ${area.name}`}
        subtitle="Tell us about the job — we will get back with a clear next step."
      />
    </>
  );
}
