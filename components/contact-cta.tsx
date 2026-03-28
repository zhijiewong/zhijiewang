import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";

export function ContactCTA() {
  const hasForm = siteConfig.formspreeId !== "";

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
      <div className="glass p-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Have a project idea or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </div>

        {hasForm ? (
          <div className="mx-auto mt-8 max-w-md">
            <ContactForm />
          </div>
        ) : (
          <div className="mt-6 text-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-6 py-3 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send me an email
            </a>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-4 text-sm">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub<span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn<span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
