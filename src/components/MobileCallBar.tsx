import Link from "next/link";
import { site } from "@/lib/site";

/** Sticky bottom bar on mobile — high-converting local service pattern */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center rounded-full bg-blue-800 px-4 py-3 text-sm font-bold text-white shadow-sm"
        >
          Call now
        </a>
        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-blue-950 shadow-sm"
        >
          Free quote
        </Link>
      </div>
    </div>
  );
}
