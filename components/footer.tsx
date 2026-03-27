import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub (opens in new tab)"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn (opens in new tab)"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
