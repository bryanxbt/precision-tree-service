"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-950/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <Image
            src={site.logo.full}
            alt={site.logo.markAlt}
            width={200}
            height={200}
            className="h-11 w-auto shrink-0 object-contain sm:h-12"
            priority
          />
          <span className="min-w-0 leading-tight sm:hidden">
            <span className="block truncate text-sm font-bold tracking-tight text-blue-950">
              {site.name}
            </span>
          </span>
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block truncate text-sm font-bold tracking-tight text-blue-950 sm:text-base">
              {site.name}
            </span>
            <span className="text-xs text-blue-800/70">{site.serviceArea}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-2.5 py-2 text-sm font-medium transition-colors xl:px-3 ${
                  active
                    ? "bg-blue-50 text-blue-900"
                    : "text-stone-600 hover:bg-stone-50 hover:text-blue-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold text-blue-900 sm:inline lg:mr-1"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-blue-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Free Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-200 text-stone-700 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <span className="text-lg leading-none">×</span>
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-stone-100 bg-white px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 hover:bg-blue-50 hover:text-blue-900"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-blue-900"
            >
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
