import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/nexora-logo.jpg.asset.json";
import { contact, markets } from "@/lib/nexora-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="NeXora Marketing Agency logo"
              width={56}
              height={56}
              className="h-14 w-14 rounded-md object-cover"
            />
            <div>
              <p className="font-display text-2xl leading-none font-semibold gold-text">NeXora</p>
              <p className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                Marketing Agency
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A Growth Systems &amp; Revenue Design Studio helping businesses build stronger brands,
            smarter marketing systems and measurable growth.
          </p>
        </div>

        <div>
          <h2 className="text-xs tracking-[0.24em] text-gold uppercase">Markets</h2>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {markets.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs tracking-[0.24em] text-gold uppercase">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
              >
                <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} NeXora Marketing Agency. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Bold strategy · Real growth</p>
        </div>
      </div>
    </footer>
  );
}
