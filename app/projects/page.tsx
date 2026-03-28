import { ProjectFilter } from "@/components/project-filter";

export default function ProjectsPage() {
  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="mt-2 text-muted-foreground">
            Tools and platforms I&apos;m building — focused on AI, developer
            productivity, and infrastructure.
          </p>
        </div>

        <ProjectFilter />
      </div>
    </main>
  );
}
