import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex gap-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
