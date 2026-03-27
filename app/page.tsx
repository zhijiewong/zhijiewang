import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main id="main-content" className="flex-1">
      <Hero />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
