import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { services, site, values } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="tree-pattern relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100 backdrop-blur">
              Licensed · Insured · Local
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Precision tree care for homes that deserve better.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-emerald-50/90">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-emerald-950 shadow-lg shadow-black/20 transition hover:bg-amber-400"
              >
                Get a free quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View services
              </Link>
            </div>
            <p className="mt-6 text-sm text-emerald-100/75">
              Call{" "}
              <a href={site.phoneHref} className="font-semibold text-white">
                {site.phone}
              </a>{" "}
              · {site.hours}
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                Why homeowners call us
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  "Safe removals near homes, fences, and power lines",
                  "Thorough cleanup — haul-away included",
                  "Clear, written free estimates",
                  "Storm response when you need it most",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-snug">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-emerald-950">
                      ✓
                    </span>
                    <span className="text-emerald-50/95">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-emerald-950/40 px-4 py-3 text-sm text-emerald-100/85">
                Serving <strong className="text-white">{site.serviceArea}</strong>
                . Update location in{" "}
                <code className="rounded bg-black/20 px-1 text-xs">
                  src/lib/site.ts
                </code>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              What we do
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
              Full-service tree care
            </h2>
            <p className="mt-2 max-w-xl text-stone-600">
              From routine pruning to complex removals and storm work — one
              reliable crew for the whole job.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-700"
          >
            All services →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Link
              key={service.slug}
              href="/services"
              className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900">
                <span className="text-lg" aria-hidden>
                  🌲
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-stone-900 group-hover:text-emerald-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {service.short}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
              How we work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
              Built on trust, not gimmicks
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-stone-50 p-5">
                <h3 className="font-semibold text-stone-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="tree-pattern flex min-h-[280px] items-end rounded-3xl p-8 text-white shadow-lg">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
                Our story
              </p>
              <p className="mt-2 text-2xl font-bold leading-snug">
                Two friends. One standard: do the job right.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">
              About {site.name}
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              We’re a new local tree service built by friends who care about
              safety, craftsmanship, and treating every property like it’s our
              own. No big-box runaround — just professional work, fair pricing,
              and communication you can count on.
            </p>
            <p className="mt-3 leading-relaxed text-stone-600">
              Whether it’s a single limb over the roof or a full lot that needs
              attention, we’ll walk the job with you and give a straight
              estimate.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-semibold text-emerald-800 hover:text-emerald-700"
            >
              More about us →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
