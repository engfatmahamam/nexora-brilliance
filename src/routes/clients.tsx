import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/nexora/Reveal";
import {
  ClientsGrid,
  CtaBand,
  industries,
  PageHero,
  Section,
  SectionHeading,
  Testimonials,
} from "@/components/nexora/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/clients")({
  head: () =>
    pageHead(
      "/clients",
      "Our Clients — Trusted Across Industries | NeXora",
      "500+ businesses across healthcare, real estate, education, manufacturing, technology and creative industries trust NeXora with their growth.",
    ),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <>
      <PageHero
        label="Our clients"
        title={<>Trusted across <span className="gold-text">industries.</span></>}
        intro="500+ businesses worked with — from clinics and dental centres to retail, travel, manufacturing and creative studios."
      />
      <Section raised>
        <SectionHeading label="Selected clients" title="Brands we've built growth with." />
        <ClientsGrid />
        <Reveal>
          <p className="mt-8 text-xs tracking-wider text-muted-foreground/80">{industries}</p>
        </Reveal>
      </Section>
      <Section>
        <SectionHeading label="Client voices" title="Partners, not just clients." />
        <Testimonials />
      </Section>
      <CtaBand title="Become our next success story." secondary={{ to: "/portfolio", label: "See the work" }} />
    </>
  );
}
