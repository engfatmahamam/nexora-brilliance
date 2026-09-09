import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/nexora/SiteHeader";
import { SiteFooter } from "@/components/nexora/SiteFooter";
import { PortfolioGrid } from "@/components/nexora/PortfolioGrid";
import { ContactForm } from "@/components/nexora/ContactForm";
import { Reveal } from "@/components/nexora/Reveal";
import {
  clients,
  contact,
  process,
  services,
  stats,
  testimonials,
  whyUs,
} from "@/lib/nexora-content";

const title = "NeXora Marketing Agency — Growth Systems & Revenue Design";
const description =
  "NeXora is a Growth Systems & Revenue Design Studio: brand, marketing, performance and production built into one measurable growth system. 14+ years, 500+ businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs tracking-[0.28em] text-gold uppercase">
      <span aria-hidden="true" className="h-px w-8 bg-gold/60" />
      {children}
    </p>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-dvh bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
          <div aria-hidden="true" className="absolute inset-0 hairline-grid opacity-60" />
          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
          />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Growth Systems &amp; Revenue Design Studio</SectionLabel>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.03] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
                Bold strategy. <span className="gold-text">Real growth.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We build bold brands, powerful strategies and real market growth — turning execution
                into measurable business results.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Build your growth system
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-background px-6 py-8">
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-display text-4xl font-semibold gold-text sm:text-5xl">
                        {s.value}
                      </span>
                      <span className="mt-2 block text-xs tracking-wide text-muted-foreground">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Selected work</SectionLabel>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-6xl">
                Different businesses. Different challenges. One approach.
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                Understand. Build. Measure. Grow. Open any project to see the challenge, the work and
                the numbers behind it.
              </p>
            </Reveal>
            <PortfolioGrid />
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="scroll-mt-24 border-t border-border bg-navy-raised/40 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>What we build</SectionLabel>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-6xl">
                We&apos;re not a social media agency. We&apos;re a growth system.
              </h2>
            </Reveal>

            <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal as="li" key={s.title} delay={(i % 3) * 90}>
                  <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-8 transition-colors duration-300 hover:border-gold/60">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <p className="font-display text-3xl leading-none text-foreground transition-colors group-hover:text-gold">
                      {s.title}
                    </p>
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
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>How we think</SectionLabel>
              <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-semibold sm:text-6xl">
                Before we build, we diagnose.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground">
                We don&apos;t start with &ldquo;What should we post?&rdquo; We start with
                &ldquo;What&apos;s stopping the business from growing?&rdquo;
              </p>
            </Reveal>

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
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-border bg-navy-raised/40 py-24 sm:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2">
            <Reveal>
              <SectionLabel>Who we are</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-6xl">
                We are <span className="gold-text">NeXora.</span>
              </h2>
              <p className="mt-8 leading-relaxed text-muted-foreground">
                NeXora is a Growth Systems &amp; Revenue Design Studio helping businesses build
                stronger brands, smarter marketing systems and measurable growth.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                With 14+ years of experience across business, technology and marketing, we combine
                strategic thinking, creative execution and performance analysis to solve business
                challenges through marketing. We connect channels, messages and customer touchpoints
                into one integrated system instead of treating every activity as a separate project.
              </p>
            </Reveal>

            <Reveal delay={120}>
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
            </Reveal>
          </div>

          <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h3 className="text-xs tracking-[0.28em] text-gold uppercase">
                Trusted across industries
              </h3>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {clients.map((c) => (
                  <li key={c} className="text-sm text-muted-foreground">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs tracking-wider text-muted-foreground/80">
                Healthcare • Real Estate • Education • Manufacturing • Technology • Creative •
                International Businesses
              </p>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionLabel>Client voices</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-6xl">
                Partners, not just clients.
              </h2>
            </Reveal>
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal as="li" key={t.name} delay={(i % 2) * 90}>
                  <figure className="h-full rounded-xl border border-border bg-card p-8">
                    <Quote className="h-6 w-6 text-gold/70" aria-hidden="true" />
                    <blockquote className="mt-5 text-lg leading-relaxed text-foreground">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground">
                      <span className="text-gold">{t.name}</span> — {t.role}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-border bg-navy-raised/40 py-24 sm:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionLabel>Let&apos;s build it</SectionLabel>
              <h2 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-6xl">
                Your business doesn&apos;t need more marketing.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                It needs a better growth system. Tell us where the business is stuck and we&apos;ll
                come back with a direction.
              </p>
              <ul className="mt-10 space-y-3 text-sm">
                <li>
                  <a href={`mailto:${contact.email}`} className="text-gold hover:underline">
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-gold hover:underline"
                  >
                    Instagram — {contact.instagram}
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
      <Toaster />
    </div>
  );
}
