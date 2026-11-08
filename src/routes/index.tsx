import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/nexora/Reveal";
import { HomeHeroSlider } from "@/components/nexora/HomeHeroSlider";
import { PortfolioGrid } from "@/components/nexora/PortfolioGrid";
import {
  Container,
  CtaBand,
  PrimaryCta,
  ProcessSteps,
  Section,
  SectionHeading,
  SectionLabel,
  SecondaryCta,
  ServicesGrid,
  StatsBar,
  Testimonials,
  WhyUsList,
} from "@/components/nexora/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "/",
      "NeXora Marketing Agency — Growth Systems & Revenue Design",
      "NeXora is a Growth Systems & Revenue Design Studio: brand, marketing, performance and production built into one measurable growth system. 14+ years, 500+ businesses.",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden="true" className="absolute inset-0 hairline-grid opacity-60" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-transparent" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <Reveal delay={140} className="order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
              <HomeHeroSlider />
            </Reveal>
            <div className="order-2 lg:order-1">
              <Reveal>
                <SectionLabel>Growth Systems &amp; Revenue Design Studio</SectionLabel>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.03] font-semibold tracking-tight sm:text-7xl">
                  NeXora Marketing Agency — a growth systems &amp; revenue design studio.{" "}
                  <span className="gold-text">Bold strategy. Real growth.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  We build bold brands, powerful strategies and real market growth — turning execution into
                  measurable business results.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <PrimaryCta to="/contact">Build your growth system</PrimaryCta>
                  <SecondaryCta to="/portfolio">See our work</SecondaryCta>
                </div>
              </Reveal>
              <Reveal delay={300} className="mt-14">
                <StatsBar />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Section id="work">
        <SectionHeading
          label="Selected work"
          title="Different businesses. Different challenges. One approach."
          intro="Understand. Build. Measure. Grow. Open any project to see the challenge, the work and the numbers behind it."
        />
        <PortfolioGrid limit={6} />
        <div className="mt-12">
          <SecondaryCta to="/portfolio">View the full portfolio</SecondaryCta>
        </div>
      </Section>

      <Section raised>
        <SectionHeading label="What we build" title="We're not a social media agency. We're a growth system." />
        <ServicesGrid />
        <div className="mt-12">
          <SecondaryCta to="/services">Explore services</SecondaryCta>
        </div>
      </Section>

      <Section>
        <SectionHeading
          label="How we think"
          title="Before we build, we diagnose."
          intro={"We don't start with “What should we post?” We start with “What's stopping the business from growing?”"}
        />
        <ProcessSteps />
      </Section>

      <Section raised>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight font-semibold sm:text-6xl">
              We are <span className="gold-text">NeXora.</span>
            </h2>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              NeXora is a Growth Systems &amp; Revenue Design Studio helping businesses build stronger
              brands, smarter marketing systems and measurable growth.
            </p>
            <div className="mt-10">
              <SecondaryCta to="/about">More about us</SecondaryCta>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <WhyUsList />
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading label="Client voices" title="Partners, not just clients." />
        <Testimonials />
      </Section>

      <CtaBand secondary={{ to: "/clients", label: "Our clients" }} />
    </>
  );
}
