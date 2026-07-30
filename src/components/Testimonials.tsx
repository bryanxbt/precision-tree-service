import Link from "next/link";
import { site, testimonials } from "@/lib/site";

export function Testimonials() {
  const real = testimonials.filter((t) => !t.placeholder);
  const allPlaceholders = real.length === 0;

  // Until Google reviews exist, show a conversion-focused trust block
  // instead of fake 5-star quotes.
  if (allPlaceholders) {
    return (
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
                Built on trust
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
                A small crew earning every referral
              </h2>
              <p className="mt-3 text-stone-600">
                We are early in building {site.name} — which means you get
                owners on the job, clear communication, and a reputation we
                protect one property at a time. As we complete work, real Google
                reviews will live here.
              </p>
              <ul className="mt-6 space-y-2 text-sm font-medium text-stone-800">
                <li className="flex gap-2">
                  <span className="text-brand-gold-dark">✓</span>
                  Free written estimates before we start
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-gold-dark">✓</span>
                  Insured crew — ask for proof anytime
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-gold-dark">✓</span>
                  Cleanup available on nearly every job
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-gold-dark">✓</span>
                  Call {site.partners} directly — not a call center
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-lg font-semibold text-stone-900">
                Be one of our first customers
              </p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Early jobs get our full attention. Request a free quote today,
                and when the work is done we would love an honest Google review
                to help neighbors find a crew they can trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
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
    );
  }

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            What customers say
          </h2>
          <p className="mt-3 text-stone-600">
            Reviews from homeowners we have served in {site.serviceArea}.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {real.map((t, i) => (
            <blockquote
              key={`${t.name}-${i}`}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-brand-gold-dark" aria-hidden>
                {"★★★★★".split("").map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
                “{t.quote}”
              </p>
              <footer className="mt-5 border-t border-stone-100 pt-4">
                <p className="text-sm font-semibold text-stone-900">{t.name}</p>
                <p className="text-xs text-stone-500">{t.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
