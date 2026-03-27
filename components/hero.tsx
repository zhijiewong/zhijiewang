import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="avatar-float relative">
            <Image
              src="/avatar.jpg"
              alt={siteConfig.name}
              width={96}
              height={96}
              className="relative z-10 h-24 w-24 rounded-full border-2 border-blue-500/30 object-cover shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_40px_rgba(59,130,246,0.08)]"
              priority
            />
            {/* Orbital ring */}
            <div
              className="pointer-events-none absolute -inset-3 rounded-full border border-blue-500/15"
              style={{ transform: "rotateX(65deg)" }}
              aria-hidden="true"
            />
            {/* Glow dot on ring */}
            <div
              className="pointer-events-none absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400/60 shadow-[0_0_8px_rgba(96,165,250,0.4)]"
              aria-hidden="true"
            />
          </div>

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

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

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
