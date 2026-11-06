import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/nexora/ContactForm";
import { Reveal } from "@/components/nexora/Reveal";
import { Container, PageHero, SectionLabel } from "@/components/nexora/sections";
import { contact, markets } from "@/lib/nexora-content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "/contact",
      "Contact NeXora — Start Your Growth System",
      "Tell NeXora where your business is stuck. Email nexorabu@gmail.com or message @nexora.bu on Instagram to start a project.",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact us"
        title={<>Your business doesn&apos;t need more marketing. <span className="gold-text">It needs a better growth system.</span></>}
        intro="Tell us where the business is stuck and we'll come back with a direction."
      />
      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-6">
            <a href={`mailto:${contact.email}`} className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/60">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-[0.24em] text-gold uppercase">Email</span>
                <span className="mt-1 block break-all text-foreground">{contact.email}</span>
              </span>
            </a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer noopener" className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-gold/60">
              <Instagram className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                <span className="block text-xs tracking-[0.24em] text-gold uppercase">Instagram</span>
                <span className="mt-1 block text-foreground">@{contact.instagram}</span>
              </span>
            </a>
            <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>
                <SectionLabel>Markets</SectionLabel>
                <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">{markets.join(" · ")}</span>
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
