import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { galleryItems, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return galleryItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = galleryItems.find((g) => g.slug === slug);
  if (!item) return { title: "Project" };
  return {
    title: item.title,
    description: `${item.caption} — ${item.category} by ${site.name} in ${site.serviceArea}.`,
  };
}

export default async function GalleryProjectPage({ params }: Props) {
  const { slug } = await params;
  const item = galleryItems.find((g) => g.slug === slug);
  if (!item) notFound();

  const others = galleryItems.filter((g) => g.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <p className="text-sm text-stone-500">
            <Link href="/gallery" className="hover:underline">
              Gallery
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-800">{item.title}</span>
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
              <Image
                src={item.src}
                alt={`${item.title} — ${item.caption}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
                {item.category}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                {item.title}
              </h1>
              <p className="mt-3 text-lg text-stone-600">{item.caption}</p>
              <p className="mt-4 text-stone-700 leading-relaxed">
                {item.summary}
              </p>
              <p className="mt-4 text-sm text-stone-600">
                Need similar work on your property in {site.serviceArea}?{" "}
                {site.partners} will walk the job with you and give a free
                written estimate.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact/"
                  className="rounded-full bg-brand-gold px-5 py-2.5 text-sm font-bold text-white transition hover:bg-brand-gold-light"
                >
                  Get a free quote
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-stone-300 px-5 py-2.5 text-sm font-semibold text-stone-800 transition hover:border-brand-gold"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-stone-900">
            More projects
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {others.map((g) => (
              <Link
                key={g.slug}
                href={`/gallery/${g.slug}/`}
                className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:border-brand-gold hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={g.src}
                    alt={g.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold-dark">
                    {g.category}
                  </p>
                  <h3 className="mt-1 font-semibold text-stone-900">
                    {g.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTABanner
        title="Want results like these on your property?"
        subtitle="Send a few photos with your quote request and we will give you a clear plan."
      />
    </>
  );
}
