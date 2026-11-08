import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ramadanImage from "@/assets/nexora-home-ramadan.png.asset.json";
import productImage from "@/assets/nexora-home-product.jpg.asset.json";
import educationImage from "@/assets/nexora-home-education.jpg.asset.json";
import maternityImage from "@/assets/nexora-home-maternity.jpg.asset.json";
import healthcareImage from "@/assets/nexora-home-healthcare.jpg.asset.json";

const slides = [
  { image: ramadanImage, alt: "Ramadan campaign artwork" },
  { image: productImage, alt: "Product campaign artwork" },
  { image: educationImage, alt: "Education campaign artwork" },
  { image: maternityImage, alt: "Motherhood campaign artwork" },
  { image: healthcareImage, alt: "Healthcare campaign artwork" },
];

export function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div
      aria-label="NeXora campaign images"
      aria-roledescription="carousel"
      className="relative w-full"
    >
      <div className="relative aspect-[0.98] overflow-hidden rounded-lg border border-gold/30 bg-card shadow-xl shadow-background/40 sm:aspect-[1.12] lg:aspect-[0.94]">
        {slides.map((slide, index) => (
          <img
            key={slide.alt}
            src={slide.image.url}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
              index === activeIndex
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-[1.025] opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          />
        ))}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 sm:p-6">
          <span className="font-display text-lg text-foreground sm:text-xl" aria-live="polite">
            <span className="text-gold">0{activeIndex + 1}</span>
            <span className="mx-2 text-foreground/50">/</span>
            <span className="text-foreground/75">0{slides.length}</span>
          </span>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showPrevious}
              aria-label="Show previous campaign image"
              className="size-11 rounded-full border-gold/50 bg-background/70 text-foreground backdrop-blur-sm hover:border-gold hover:bg-gold hover:text-primary-foreground"
            >
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={showNext}
              aria-label="Show next campaign image"
              className="size-11 rounded-full border-gold/50 bg-background/70 text-foreground backdrop-blur-sm hover:border-gold hover:bg-gold hover:text-primary-foreground"
            >
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Choose campaign image">
        {slides.map((slide, index) => (
          <Button
            key={slide.alt}
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show campaign image ${index + 1} of ${slides.length}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-8 min-h-8 w-8 min-w-8 rounded-full p-0 hover:bg-transparent focus-visible:ring-gold ${
              index === activeIndex ? "text-gold" : "text-muted-foreground/60 hover:text-gold"
            }`}
          >
            <span
              aria-hidden="true"
              className={`block h-2 rounded-full transition-[width,background-color] duration-300 ${
                index === activeIndex ? "w-7 bg-gold" : "w-2 bg-current"
              }`}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}