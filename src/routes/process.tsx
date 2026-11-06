import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/nexora/Reveal";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/nexora/sections";
import { process } from "@/lib/nexora-content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    pageHead(
      "/process",
      "Our Process — Understand, Diagnose, Build, Optimize | NeXora",
      "Before we build, we diagnose. NeXora's six-step growth process: understand, diagnose, strategize, build, measure and optimize.",
    ),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        label="Our process"
        title={<>Before we build, <span className="gold-text">we diagnose.</span></>}
        intro={"We don't start with “What should we post?” We start with “What's stopping the business from growing?”"}
      />
      <Section raised>
        <SectionHeading label="Six steps" title="From understanding to scaling what works." />
        <ol className="relative mt-16 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[1.65rem] before:w-px before:bg-gold/30 sm:before:left-[2.15rem]">
          {process.map((p, i) => (
            <Reveal as="li" key={p.no} delay={i * 60} className="relative flex gap-6 sm:gap-10">
              <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/50 bg-background font-display text-xl text-gold sm:h-[4.3rem] sm:w-[4.3rem] sm:text-2xl">
                {p.no}
              </span>
              <div className="flex-1 rounded-xl border border-border bg-card p-6 sm:p-8">
                <h2 className="font-display text-3xl text-foreground">{p.title}</h2>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>
      <Section>
        <SectionHeading
          label="In practice"
          title="Testing → Learning → Building → Optimizing → Scaling"
          intro="For Dr. Joseph Raafat's clinic, that cycle started at 4,000 EGP monthly for testing and grew into a scalable system across 6 branches."
        />
      </Section>
      <CtaBand secondary={{ to: "/portfolio", label: "See case studies" }} />
    </>
  );
}
