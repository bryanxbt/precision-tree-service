import { faqs } from "@/lib/site";

export function FAQ({ limit }: { limit?: number }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-10 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-stone-50">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group px-5 py-4 open:bg-white first:rounded-t-2xl last:rounded-b-2xl"
            >
              <summary className="cursor-pointer list-none font-semibold text-stone-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="mt-0.5 shrink-0 text-blue-700 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-stone-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
