import type { Metadata } from "next";
import { CTABanner } from "@/components/CTABanner";
import { galleryItems, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Recent tree work and project examples from ${site.name}.`,
};

const gradients = [
  "from-emerald-900 to-green-700",
  "from-lime-900 to-emerald-700",
  "from-stone-800 to-emerald-900",
  "from-teal-900 to-green-800",
  "from-green-950 to-lime-800",
  "from-emerald-950 to-stone-700",
];

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
            Gallery
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Work that speaks for itself
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Placeholder project cards for now. Swap these for real before/after
            photos as you complete jobs — drop images in{" "}
            <code className="rounded bg-stone-100 px-1.5 py-0.5 text-sm">
              public/gallery
            </code>{" "}
            when you&apos;re ready.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >
              <div
                className={`flex aspect-[4/3] items-end bg-gradient-to-br ${gradients[i % gradients.length]} p-5 text-white`}
              >
                <span className="rounded-full bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
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
        subtitle="Send a few photos with your quote request and we’ll give you a clear plan."
      />
    </>
  );
}
