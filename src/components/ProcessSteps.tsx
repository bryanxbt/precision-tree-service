import { processSteps } from "@/lib/site";

export function ProcessSteps() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
            The process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900">
            Our simple 3-step process
          </h2>
          <p className="mt-3 text-stone-600">
            From first call to finished job — clear steps and no surprises.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-stone-200 bg-stone-50 p-6"
            >
              <span className="text-sm font-bold tracking-wider text-red-600">
                STEP {step.step}
              </span>
              <h3 className="mt-3 text-xl font-bold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
