import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { blogPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tree Care Tips & Local Guides",
  description: `Practical guides on tree removal cost, permits, storm damage, and seasonal care from ${site.name}.`,
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            Resources
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Tree care tips for Central Indiana
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Straight answers on cost, permits, safety, and timing — written for
            homeowners in {site.serviceArea}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}/`}
                className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-brand-gold/50 hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
                  {post.date} · {post.minutes} min read
                </p>
                <h2 className="mt-2 text-xl font-bold text-stone-900">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {post.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-brand-gold-dark">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTABanner />
    </>
  );
}
