import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Project } from "@/lib/nexora-content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <Link
      to="/portfolio/$projectId"
      params={{ projectId: p.id }}
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
          <span className="block text-[0.65rem] tracking-[0.22em] text-gold uppercase">{p.category}</span>
          <span className="mt-2 block font-display text-2xl leading-tight text-foreground">{p.title}</span>
          <span className="mt-1 block truncate text-sm text-muted-foreground">{p.client}</span>
        </span>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <Reveal as="li" key={p.id} delay={(i % 3) * 90}>
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </ul>
  );
}

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("All");
  const visible = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
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
      <ProjectList items={visible} />
    </>
  );
}
