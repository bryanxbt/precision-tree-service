import Link from "next/link";
import { site } from "@/lib/site";

export function CTABanner({
  title = "Ready for a free, no-pressure estimate?",
  subtitle = "Tell us about the job and we’ll get back to you quickly — usually the same day.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="border-y border-emerald-900/10 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-emerald-100/85">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-emerald-950 shadow-sm transition hover:bg-amber-400"
          >
            Get a free quote
          </Link>
          <a
            href={site.phoneHref}
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
