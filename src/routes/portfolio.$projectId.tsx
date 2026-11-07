import { createFileRoute, Link, notFound, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/nexora/Reveal";
import { ProjectList } from "@/components/nexora/PortfolioGrid";
import { Container, CtaBand, Section, SectionLabel } from "@/components/nexora/sections";
import { projects } from "@/lib/nexora-content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project unavailable — NeXora" }, { name: "robots", content: "noindex" }] };
    return pageHead(`/portfolio/${params.projectId}`, `${loaderData.title} — ${loaderData.client} | NeXora`, loaderData.challenge, "article");
  },
  component: ProjectPage,
  notFoundComponent: () => (
    <Container className="pt-44 pb-32 text-center">
      <h1 className="font-display text-5xl">Project not found</h1>
      <Link to="/portfolio" className="mt-8 inline-block text-gold hover:underline">
        Back to the portfolio
      </Link>
    </Container>
  ),
  errorComponent: ProjectError,
});

function ProjectPage() {
  const p = Route.useLoaderData();
  const currentIndex = projects.findIndex((project) => project.id === p.id);
  const next = projects[(currentIndex + 1) % projects.length];
  if (!next) return null;
  const related = projects.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3);

  return (
    <>
      <section className="relative pt-32 sm:pt-40">
        <Container>
          <Reveal>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
            </Link>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <SectionLabel>{p.category}</SectionLabel>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.04] font-semibold sm:text-7xl">{p.title}</h1>
            <p className="mt-6 text-lg text-gold">{p.client}</p>
            <p className="mt-1 text-sm text-muted-foreground">{p.meta}</p>
          </Reveal>
          <Reveal delay={160} className="mt-14">
            <img
              src={p.image}
              alt={`${p.title} — ${p.client}`}
              width={1600}
              height={900}
              className="aspect-16/9 w-full rounded-2xl border border-border object-cover"
            />
          </Reveal>
        </Container>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionLabel>The challenge</SectionLabel>
            <p className="mt-6 font-display text-3xl leading-snug text-foreground">{p.challenge}</p>
          </Reveal>
          <Reveal delay={120}>
            <SectionLabel>What we did</SectionLabel>
            <ol className="mt-6 space-y-px overflow-hidden rounded-xl border border-border bg-border">
              {p.approach.map((a, i) => (
                <li key={a} className="flex gap-5 bg-background p-5">
                  <span className="font-display text-lg text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{a}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section raised>
        <Reveal>
          <SectionLabel>Results</SectionLabel>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-3">
          {p.results.map((r) => (
            <div key={r.label} className="bg-background p-8">
              <dt className="sr-only">{r.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-semibold gold-text sm:text-5xl">{r.value}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{r.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {related.length > 0 && (
        <Section>
          <Reveal>
            <SectionLabel>More {p.category.toLowerCase()} work</SectionLabel>
          </Reveal>
          <ProjectList items={related} />
        </Section>
      )}

      <section className="border-t border-border">
        <Container>
          <Link
            to="/portfolio/$projectId"
            params={{ projectId: next.id }}
            className="group flex items-center justify-between gap-6 py-14"
          >
            <span>
              <span className="block text-xs tracking-[0.28em] text-gold uppercase">Next project</span>
              <span className="mt-3 block font-display text-3xl transition-colors group-hover:text-gold sm:text-5xl">
                {next.title}
              </span>
            </span>
            <ArrowRight className="h-8 w-8 shrink-0 text-gold transition-transform group-hover:translate-x-2" aria-hidden="true" />
          </Link>
        </Container>
      </section>

      <CtaBand title="Have a similar challenge?" />
    </>
  );
}

function ProjectError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <Container className="pt-44 pb-32 text-center">
      <h1 className="font-display text-4xl">This project didn&apos;t load</h1>
      {error instanceof Error && <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="bg-gold text-primary-foreground hover:bg-gold/90"
        >
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link to="/portfolio">Back to the portfolio</Link>
        </Button>
      </div>
    </Container>
  );
}
