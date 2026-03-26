import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { projects, getProject, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.description,
    openGraph: {
      title: `${project.name} — ${project.tagline} | ${siteConfig.name}`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{project.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${project.color}`}>
              {project.emoji}
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {project.name}
              </h1>
              <p className="text-lg text-blue-400">{project.tagline}</p>
            </div>
          </div>
          <p className="max-w-2xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section>
              <h2 className="mb-3 text-lg font-semibold">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold">The Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.approach}
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div>
              <h3 className="mb-3 font-mono text-sm font-medium text-blue-400">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {project.links.length > 0 && (
              <div>
                <h3 className="mb-3 font-mono text-sm font-medium text-blue-400">
                  Links
                </h3>
                <div className="space-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <span>&nearr;</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
