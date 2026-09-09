import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { contact } from "@/lib/nexora-content";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1500),
});

const field =
  "mt-2 w-full rounded-md border border-input bg-navy-deep px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none";
const labelCls = "text-xs tracking-[0.18em] text-muted-foreground uppercase";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    const body = [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      parsed.data.company ? `Company: ${parsed.data.company}` : "",
      parsed.data.budget ? `Budget: ${parsed.data.budget}` : "",
      "",
      parsed.data.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `New project enquiry — ${parsed.data.name}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the enquiry ready to send.");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          maxLength={100}
          className={field}
          placeholder="Your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={255}
          className={field}
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className={labelCls} htmlFor="company">
          Company <span className="normal-case">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          maxLength={120}
          className={field}
          placeholder="Business or brand"
        />
      </div>

      <div>
        <label className={labelCls} htmlFor="budget">
          Monthly budget <span className="normal-case">(optional)</span>
        </label>
        <input
          id="budget"
          name="budget"
          maxLength={60}
          className={field}
          placeholder="e.g. 20,000 EGP"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="message">
          What&apos;s stopping the business from growing?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={1500}
          className={field}
          placeholder="Tell us about the business, the market and the goal."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:w-auto"
        >
          Send enquiry
        </button>
      </div>
    </form>
  );
}
