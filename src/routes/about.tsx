import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/nexora/Reveal";
import {
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
  SectionLabel,
  StatsBar,
  WhyUsList,
} from "@/components/nexora/sections";
import { markets } from "@/lib/nexora-content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "/about",
      "About NeXora — Growth Systems & Revenue Design Studio",
      "14+ years across business, technology and marketing. Meet NeXora, the studio connecting brand, marketing, performance and production into one growth system.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        label="About us"
        title={<>We are <span className="gold-text">NeXora.</span></>}
        intro="A Growth Systems & Revenue Design Studio helping businesses build stronger brands, smarter marketing systems and measurable growth."
      >
        <div className="mt-16">
          <StatsBar />
        </div>
      </PageHero>

      <Section raised>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Our story</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              We don&apos;t isolate marketing from the business.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              With 14+ years of experience across business, technology and marketing, we combine
              strategic thinking, creative execution and performance analysis to solve business
              challenges through marketing.
            </p>
            <p>
              We connect channels, messages and customer touchpoints into one integrated system instead
              of treating every activity as a separate project.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionHeading label="Why NeXora" title="One strategic partner. Less fragmentation." />
          <Reveal delay={120}>
            <WhyUsList />
          </Reveal>
        </div>
      </Section>

      <Section raised>
        <SectionHeading label="Where we work" title="Working in Arabic, English and French." />
        <ul className="mt-12 flex flex-wrap gap-3">
          {markets.map((m) => (
            <li key={m} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-foreground">
              {m}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand secondary={{ to: "/process", label: "See how we work" }} />
    </>
  );
}
