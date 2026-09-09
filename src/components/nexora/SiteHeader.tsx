import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nexora-logo.jpg.asset.json";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-navy-deep/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="NeXora home">
          <img
            src={logo.url}
            alt="NeXora Marketing Agency logo"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-md object-cover"
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-xl leading-none font-semibold tracking-wide gold-text">
              NeXora
            </span>
            <span className="block truncate text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
              Marketing Agency
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm tracking-wide text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-gold/50 px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-navy-deep/98 backdrop-blur-xl lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-4 text-base text-foreground last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
