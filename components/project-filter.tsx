"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

const categories = ["All", "AI/ML", "Developer Tools", "Infrastructure"] as const;

export function ProjectFilter() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2 animate-fade-in-up stagger-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              active === cat
                ? "border-blue-500/30 bg-blue-500/20 text-blue-400"
                : "border-border bg-muted/50 text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </>
  );
}
