import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${siteConfig.name} — AI document intelligence, Graph RAG visualization, developer tools, and AIOps.`,
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex-1 animate-fade-in-up">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Tools and platforms I&apos;m building — focused on AI, developer
          productivity, and infrastructure.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
