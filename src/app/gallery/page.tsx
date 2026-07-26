import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/CTABanner";
import { galleryItems, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Recent tree work and project examples from ${site.name}.`,
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
            Gallery
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Work that speaks for itself
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            A look at the kind of tree removal, trimming, storm cleanup, and lot
            work we do. Add your own job photos here as you complete more
            projects.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={item.src}
                  alt={`${item.title} — ${item.caption}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-semibold text-stone-900">{item.title}</h2>
                <p className="mt-1 text-sm text-stone-600">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Want results like these on your property?"
        subtitle="Send a few photos with your quote request and we will give you a clear plan."
      />
    </>
  );
}
