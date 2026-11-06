import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { clients, process, services, stats, testimonials, whyUs } from "@/lib/nexora-content";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs tracking-[0.28em] text-gold uppercase">
      <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
      {children}
    </p>
  );
}

export function Section({
  children,
  raised = false,
  id,
}: {
  children: ReactNode;
  raised?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-border py-24 sm:py-32 ${raised ? "bg-navy-raised/40" : ""}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <Reveal>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-6 max-w-2xl text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div aria-hidden="true" className="absolute inset-0 hairline-grid opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <Container className="relative">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.04] font-semibold tracking-tight sm:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          </Reveal>
        )}
        {children && <Reveal delay={230}>{children}</Reveal>}
      </Container>
    </section>
  );
}

type To = "/contact" | "/portfolio" | "/services" | "/about" | "/process" | "/clients";

export function PrimaryCta({ to, children }: { to: To; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function SecondaryCta({ to, children }: { to: To; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-7 py-4 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
    >
      {children}
    </Link>
  );
}

export function CtaBand({
  title = "Your business doesn't need more marketing.",
  text = "It needs a better growth system. Tell us where the business is stuck and we'll come back with a direction.",
  secondary,
}: {
  title?: string;
  text?: string;
  secondary?: { to: To; label: string };
}) {
  return (
    <section className="border-t border-border py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-card px-6 py-14 sm:px-14">
            <div aria-hidden="true" className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-gold/10 blur-[100px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <SectionLabel>Let&apos;s build it</SectionLabel>
                <h2 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-5xl">{title}</h2>
                <p className="mt-5 max-w-xl text-muted-foreground">{text}</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <PrimaryCta to="/contact">Start a project</PrimaryCta>
                {secondary && <SecondaryCta to={secondary.to}>{secondary.label}</SecondaryCta>}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function StatsBar() {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-background px-6 py-8">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-4xl font-semibold gold-text sm:text-5xl">{s.value}</span>
            <span className="mt-2 block text-xs tracking-wide text-muted-foreground">{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal as="li" key={s.title} delay={(i % 3) * 90}>
          <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors duration-300 hover:border-gold/60">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            {detailed && <span className="font-display text-xl text-gold/70">0{i + 1}</span>}
            <h3 className="mt-2 font-display text-3xl leading-none text-foreground transition-colors group-hover:text-gold">
              {s.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            <ul className="mt-6 space-y-2 border-t border-border pt-6">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}

export function ProcessSteps() {
  return (
    <ol className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {process.map((p, i) => (
        <Reveal as="li" key={p.no} delay={(i % 3) * 80} className="bg-background">
          <div className="h-full p-8">
            <span className="font-display text-2xl text-gold/70">{p.no}</span>
            <h3 className="mt-3 text-lg font-medium text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function WhyUsList() {
  return (
    <ol className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
      {whyUs.map((w) => (
        <li key={w.no} className="flex gap-5 bg-background p-6">
          <span className="font-display text-xl text-gold/70">{w.no}</span>
          <span>
            <span className="block font-medium text-foreground">{w.title}</span>
            <span className="mt-1 block text-sm text-muted-foreground">{w.text}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function ClientsGrid() {
  return (
    <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {clients.map((c) => (
        <li
          key={c}
          className="flex min-h-24 items-center bg-background px-6 py-6 font-display text-xl text-foreground transition-colors hover:bg-card hover:text-gold"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export const industries =
  "Healthcare • Real Estate • Education • Manufacturing • Technology • Creative • International Businesses";

export function Testimonials() {
  return (
    <ul className="mt-14 grid gap-6 md:grid-cols-2">
      {testimonials.map((t, i) => (
        <Reveal as="li" key={t.name} delay={(i % 2) * 90}>
          <figure className="h-full rounded-xl border border-border bg-card p-8">
            <Quote className="h-6 w-6 text-gold/70" aria-hidden="true" />
            <blockquote dir="auto" className="mt-5 text-lg leading-relaxed text-foreground">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="text-gold">{t.name}</span> — {t.role}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </ul>
  );
}
