import Image from "next/image";
import Link from "next/link";
import {
  navLinks,
  serviceAreas,
  services,
  site,
} from "@/lib/site";

export function Footer() {
  const socialEntries = (
    [
      ["Facebook", site.social.facebook],
      ["Instagram", site.social.instagram],
      ["Google", site.social.google],
    ] as const
  ).filter(([, href]) => href);

  return (
    <footer className="mt-auto border-t border-emerald-950/10 bg-emerald-950 text-emerald-50 pb-20 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block rounded-xl bg-stone-50 p-2 shadow-sm">
            <Image
              src={site.logo.wordmark}
              alt={site.logo.wordmarkAlt}
              width={160}
              height={160}
              className="h-auto w-36 object-contain sm:w-40"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-emerald-100/80">
            {site.tagline}. Serving {site.serviceArea}.
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-block text-lg font-bold text-amber-400 hover:text-amber-300"
          >
            {site.phone}
          </a>
          <p className="mt-1 text-sm text-emerald-100/80">
            <a href={site.emailHref} className="hover:text-white">
              {site.email}
            </a>
          </p>
          {socialEntries.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {socialEntries.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-100/90 underline-offset-2 hover:text-white hover:underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200/80">
            Services
          </p>
          <ul className="mt-3 space-y-2">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}/`}
                  className="text-sm text-emerald-100/90 transition hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200/80">
            Service areas
          </p>
          <ul className="mt-3 space-y-2">
            {serviceAreas.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}/`}
                  className="text-sm text-emerald-100/90 transition hover:text-white"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200/80">
            Company
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-emerald-100/90 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-emerald-200/80">
            Hours
          </p>
          <ul className="mt-2 space-y-1 text-xs text-emerald-100/75">
            {site.hoursDetailed.map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
          >
            Request a free quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-emerald-200/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Insured · Local crew · Free estimates</p>
        </div>
      </div>
    </footer>
  );
}
