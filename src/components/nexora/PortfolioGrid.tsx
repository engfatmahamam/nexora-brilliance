import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories, projects, type Project } from "@/lib/nexora-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap gap-2"
      >
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            type="button"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors",
              filter === c
                ? "border-gold bg-gold text-primary-foreground"
                : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 3) * 90}>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group block h-full w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-colors hover:border-gold/60 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <span className="block aspect-16/9 overflow-hidden bg-navy-raised">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.client}`}
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="flex items-start justify-between gap-3 p-6">
                <span className="min-w-0">
                  <span className="block text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                    {p.category}
                  </span>
                  <span className="mt-2 block font-display text-2xl leading-tight text-foreground">
                    {p.title}
                  </span>
                  <span className="mt-1 block truncate text-sm text-muted-foreground">
                    {p.client}
                  </span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90dvh] max-w-3xl overflow-y-auto border-border bg-card p-0">
          {active && (
            <article>
              <img
                src={active.image}
                alt={`${active.title} — ${active.client}`}
                width={1600}
                height={900}
                className="aspect-16/9 w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <p className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                    {active.category}
                  </p>
                  <DialogTitle className="font-display text-3xl leading-tight">
                    {active.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {active.client} — {active.meta}
                  </DialogDescription>
                </DialogHeader>

                <h3 className="mt-8 text-xs tracking-[0.24em] text-gold uppercase">Challenge</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{active.challenge}</p>

                <h3 className="mt-8 text-xs tracking-[0.24em] text-gold uppercase">What we did</h3>
                <ul className="mt-3 space-y-2">
                  {active.approach.map((a) => (
                    <li key={a} className="flex gap-3 text-muted-foreground">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-gold" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-xs tracking-[0.24em] text-gold uppercase">Results</h3>
                <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {active.results.map((r) => (
                    <div key={r.label} className="rounded-lg border border-border p-4">
                      <dt className="sr-only">{r.label}</dt>
                      <dd>
                        <span className="block font-display text-2xl gold-text">{r.value}</span>
                        <span className="mt-1 block text-xs text-muted-foreground">{r.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
