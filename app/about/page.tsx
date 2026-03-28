import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ContactCTA } from "@/components/contact-cta";
import { skillCategories, education, certifications, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `${siteConfig.name} — Full-stack developer and IT Expert at Vector Informatik, building AI-powered tools. Penn State IST graduate.`,
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12 flex items-center gap-6 animate-fade-in-up">
          <div className="avatar-float relative shrink-0">
            <Image
              src="/avatar.jpg"
              alt={siteConfig.name}
              width={112}
              height={112}
              className="relative z-10 h-28 w-28 rounded-full border-2 border-blue-500/30 object-cover shadow-[0_12px_30px_rgba(0,0,0,0.4),0_0_40px_rgba(59,130,246,0.08)]"
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
            <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
            <p className="mt-1 text-muted-foreground">
              The story behind the code
            </p>
            <a
              href={siteConfig.resume}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Narrative bio */}
        <article className="mb-16 max-w-none space-y-4 text-muted-foreground leading-relaxed animate-fade-in-up stagger-1">
          <p>
            I&apos;m a full-stack developer focused on building AI-powered tools for
            document intelligence, knowledge visualization, and infrastructure
            automation. Currently, I work as an IT Expert at{" "}
            <strong className="text-foreground">Vector Informatik GmbH</strong> in
            Shanghai, where I support enterprise collaboration platforms and extend
            RESTful APIs for automotive tool integrations.
          </p>
          <p>
            I studied Information Science &amp; Technology at{" "}
            <strong className="text-foreground">Penn State University</strong>, and have
            since built software across geospatial systems, financial risk modeling,
            and enterprise platforms.
          </p>
          <p>
            Outside of work, I build tools like{" "}
            <strong className="text-foreground">Pawdig</strong> (an AI document intelligence
            platform), open-source projects like{" "}
            <strong className="text-foreground">ragviz</strong> (a Graph RAG visualization
            platform) and <strong className="text-foreground">viber</strong> (a DOM capture tool
            for AI-assisted coding). Right now, I&apos;m building an open-source{" "}
            <strong className="text-foreground">AIOps platform</strong> that applies AI and
            machine learning to automate IT operations.
          </p>
        </article>

        <Link
          href="/projects"
          className="mb-16 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          See my work
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        {/* Skills */}
        <section className="mb-16 animate-fade-in-up stagger-2">
          <h2 className="mb-6 text-xl font-bold tracking-tight">Skills</h2>
          <div className="glass p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {skillCategories.map((cat) => (
                <div key={cat.category}>
                  <h3 className="mb-2 font-mono text-sm font-medium text-blue-300">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certs */}
        <section className="animate-fade-in-up stagger-3">
          <h2 className="mb-6 text-xl font-bold tracking-tight">
            Education &amp; Certifications
          </h2>
          <div className="glass p-6 space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-lg border border-border/50 bg-muted/30 px-5 py-4"
              >
                <p className="font-medium">{edu.degree}</p>
                <p className="text-sm text-blue-300">{edu.school}</p>
                {edu.minor && (
                  <p className="text-sm text-muted-foreground">{edu.minor}</p>
                )}
              </div>
            ))}
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 rounded-lg border border-border/50 bg-muted/30 px-4 py-3"
                >
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <p className="text-sm font-medium">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <ContactCTA />
    </main>
  );
}
