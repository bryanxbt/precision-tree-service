import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { QuoteForm } from "@/components/QuoteForm";
import { blogPosts, getPost } from "@/lib/blog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            <Link href="/blog/" className="hover:underline">
              Blog
            </Link>
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-stone-500">
            {post.date} · {post.minutes} min read · {site.name}
          </p>
          <p className="mt-6 text-lg text-stone-600">{post.description}</p>

          <div className="mt-10 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-stone-900">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="mt-3 text-base leading-relaxed text-stone-700"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-gold/30 bg-amber-50/60 p-6">
            <h2 className="text-lg font-semibold text-stone-900">
              Ready for a free estimate?
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-brand-gold-dark hover:underline"
              >
                {site.phone}
              </a>{" "}
              or send a quick request — we serve {site.serviceArea}.
            </p>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">
              More guides
            </h2>
            <ul className="mt-6 space-y-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}/`}
                    className="font-medium text-brand-gold-dark hover:underline"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog/"
                  className="text-sm font-semibold text-stone-600 hover:underline"
                >
                  All articles →
                </Link>
              </li>
            </ul>
          </div>
          <QuoteForm source={`blog:${slug}`} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
