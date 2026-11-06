import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading, ServicesGrid, WhyUsList } from "@/components/nexora/sections";
import { Reveal } from "@/components/nexora/Reveal";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead(
      "/services",
      "Services — Brand, Marketing, Performance & Production | NeXora",
      "Brand strategy, digital marketing, media buying, business growth and media/AI production — delivered by NeXora as one connected growth system.",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title={<>We&apos;re not a social media agency. <span className="gold-text">We&apos;re a growth system.</span></>}
        intro="Strategy, creative, digital, performance and production — integrated execution under one roof."
      />
      <Section raised>
        <SectionHeading label="What we build" title="Five capabilities. One connected system." />
        <ServicesGrid detailed />
      </Section>
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionHeading
            label="Why it works"
            title="Integrated execution, measured decisions."
            intro="We measure, learn and optimize — so every service supports a real business signal."
          />
          <Reveal delay={120}>
            <WhyUsList />
          </Reveal>
        </div>
      </Section>
      <CtaBand secondary={{ to: "/portfolio", label: "See the results" }} />
    </>
  );
}
