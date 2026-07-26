import Image from "next/image";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { ProcessSteps } from "@/components/ProcessSteps";
import { QuoteForm } from "@/components/QuoteForm";
import { Testimonials } from "@/components/Testimonials";
import {
  galleryItems,
  heroImage,
  serviceAreas,
  services,
  site,
  trustPoints,
  values,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/*
        Above-the-fold hero:
        - Top: copy (left) + wordmark (right) on photo
        - Bottom: free quote form (no need to scroll on typical desktop/laptop)
        Header is sticky (~4.5rem); hero fills remaining viewport height.
      */}
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden text-white">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/88 to-blue-900/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/35 via-transparent to-blue-950/80" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-4 sm:px-6 sm:py-5 lg:py-6">
          {/* Top half — message + word logo */}
          <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-10">
            <div className="min-w-0">
              <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-100 backdrop-blur sm:text-xs">
                {site.serviceArea} · Free estimates
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:mt-4 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.12] xl:text-5xl">
                {site.tagline}
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-blue-50/90 sm:mt-4 sm:text-base lg:text-lg">
                {site.description}
              </p>
              <ul className="mt-3 hidden gap-x-4 gap-y-1.5 sm:mt-4 sm:grid sm:grid-cols-2">
                {trustPoints.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs text-blue-50/95 sm:text-sm"
                  >
                    <span className="font-bold text-red-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-blue-100/85 sm:mt-4 sm:text-sm">
                Prefer to talk? Call{" "}
                <a href={site.phoneHref} className="font-semibold text-white">
                  {site.phone}
                </a>
                <span className="block sm:inline sm:before:content-['·_']">
                  {site.hours}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[220px] rounded-2xl bg-stone-50/95 p-3 shadow-2xl ring-1 ring-white/30 backdrop-blur sm:max-w-[260px] sm:p-4 lg:max-w-[300px] lg:p-5">
                <Image
                  src={site.logo.wordmark}
                  alt={site.logo.wordmarkAlt}
                  width={300}
                  height={300}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom half — free quote (stays in first viewport) */}
          <div id="quote" className="mt-4 shrink-0 sm:mt-5">
            <QuoteForm variant="hero" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-center text-sm font-medium text-stone-600 sm:px-6">
          {trustPoints.map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <span className="text-blue-700">●</span>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
              Tree services
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
              Everything your property needs
            </h2>
            <p className="mt-2 max-w-xl text-stone-600">
              Removal, trimming, stumps, storms, lot clearing — residential and
              commercial.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-800 hover:text-blue-700"
          >
            All services →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}/`}
              className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                <span className="text-lg" aria-hidden>
                  🌲
                </span>
              </div>
              <h3 className="mt-3 text-base font-semibold text-stone-900 group-hover:text-blue-900">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                {service.short}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <ProcessSteps />

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="tree-pattern flex min-h-[280px] items-end rounded-3xl p-8 text-white shadow-lg">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-red-400">
                About us
              </p>
              <p className="mt-2 text-2xl font-bold leading-snug">
                Two friends. One standard: do the job right.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900">
              Reliable local tree service
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              {site.name} is a local crew built by friends who care about
              safety, craftsmanship, and treating every property like it is our
              own. No big-box runaround — professional work, fair pricing, and
              communication you can count on.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {values.slice(0, 4).map((v) => (
                <div key={v.title}>
                  <h3 className="font-semibold text-stone-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{v.description}</p>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-semibold text-blue-800 hover:text-blue-700"
            >
              More about us →
            </Link>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
                Service areas
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
                Proudly serving {site.serviceArea}
              </h2>
              <p className="mt-2 max-w-xl text-stone-600">
                Local tree work nearby. Update the city list in site config for
                your real towns — it helps people (and Google) find you.
              </p>
            </div>
            <Link
              href="/service-areas"
              className="text-sm font-semibold text-blue-800 hover:text-blue-700"
            >
              View all areas →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}/`}
                className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-900"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* See the work — full photo set from gallery */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
              Gallery
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
              See the work
            </h2>
            <p className="mt-2 max-w-xl text-stone-600">
              Removal, trimming, storm cleanup, stump grinding, and lot work —
              real job photos from the field.
            </p>
          </div>
          <Link
            href="/gallery"
            className="text-sm font-semibold text-blue-800 hover:text-blue-700"
          >
            View gallery page →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <Link
              key={item.title}
              href="/gallery"
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={item.src}
                  alt={`${item.title} — ${item.caption}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{item.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Testimonials />

      <FAQ limit={5} />

      <CTABanner
        title="Ready for a free, no-pressure estimate?"
        subtitle="Call us or send a quick quote request — same-day replies when we can."
      />
    </>
  );
}
