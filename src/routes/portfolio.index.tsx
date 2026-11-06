import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/nexora/PortfolioGrid";
import { Container, CtaBand, PageHero } from "@/components/nexora/sections";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portfolio/")({
  head: () =>
    pageHead(
      "/portfolio",
      "Portfolio — Selected Work | NeXora Marketing Agency",
      "Performance, branding, production and experience projects by NeXora — from a two-branch clinic scaling to six branches to full brand identity systems.",
    ),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title={<>Different businesses. <span className="gold-text">One approach.</span></>}
        intro="Understand. Build. Measure. Grow. Filter by discipline and open any project for the challenge, the work and the results."
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
      <CtaBand title="Want results like these?" secondary={{ to: "/services", label: "Our services" }} />
    </>
  );
}
