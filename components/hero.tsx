import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="avatar-float relative">
            <div className="avatar-aura relative h-24 w-24">
              <Image
                src="/avatar.jpg"
                alt={siteConfig.name}
                width={96}
                height={96}
                className="relative h-24 w-24 rounded-full border-2 border-blue-500/30 object-cover shadow-[0_8px_24px_rgba(0,0,0,0.3),0_0_0_1px_rgba(59,130,246,0.1)]"
                priority
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-3 text-xl text-blue-400 font-medium">
              I build AI-powered tools that turn unstructured data into
              actionable intelligence
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <p className="max-w-xl text-muted-foreground leading-relaxed">
            From document intelligence to knowledge graphs and AIOps —
            currently an IT Expert at Vector Informatik GmbH, exploring the
            frontier of developer tools and AI.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border/80 hover:text-foreground"
            >
              Get in Touch
            </a>
          </div>

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
