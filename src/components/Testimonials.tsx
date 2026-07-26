import { testimonials } from "@/lib/site";

export function Testimonials() {
  const hasPlaceholders = testimonials.some((t) => t.placeholder);

  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            What customers say
          </h2>
          <p className="mt-3 text-stone-600">
            Real reviews build trust. Replace these sample quotes with your
            Google reviews as you earn them.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={`${t.name}-${i}`}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-red-600" aria-hidden>
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
        {hasPlaceholders && (
          <p className="mt-6 text-center text-xs text-stone-400">
            Sample review wording for layout — swap with real customer feedback
            in{" "}
            <code className="rounded bg-stone-200/80 px-1">src/lib/site.ts</code>
          </p>
        )}
      </div>
    </section>
  );
}
