import Image from "next/image";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-500/5" />

      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/avatar.jpg"
            alt={siteConfig.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border-2 border-blue-500/30 object-cover"
            priority
          />

          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-xl text-blue-400 font-medium">
              {siteConfig.tagline}
            </p>
          </div>

          <p className="max-w-xl text-muted-foreground leading-relaxed">
            Exploring the frontier of AI-powered tools, from document
            intelligence to knowledge graphs and AIOps. Currently an IT Expert
            at Vector Informatik GmbH.
          </p>

          <div className="flex items-center gap-3 text-sm">
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
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
