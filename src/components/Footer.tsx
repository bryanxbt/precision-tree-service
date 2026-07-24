import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-950/10 bg-emerald-950 text-emerald-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-emerald-100/80">
            {site.tagline}. Serving {site.serviceArea}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200/80">
            Navigate
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
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200/80">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-emerald-100/90">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li className="pt-1">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-amber-400"
              >
                Request a free quote
              </Link>
            </li>
          </ul>
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
