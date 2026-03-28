import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/tilt-card";
import type { Project } from "@/lib/data";

function ProjectIcon({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <Image
        src={project.logo}
        alt={project.name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-lg object-cover"
      />
    );
  }
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${project.color}`}>
      {project.emoji}
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <TiltCard
      className={index !== undefined ? "animate-fade-in-up" : undefined}
      style={index !== undefined ? { animationDelay: `${index * 0.1}s`, animationFillMode: "both" } : undefined}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block h-full rounded-2xl glass p-6 transition-colors hover:border-blue-500/30"
      >
        <div className="mb-3 flex items-center gap-3">
          <ProjectIcon project={project} />
          <div>
            <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.tagline}</p>
          </div>
        </div>

        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} variant="secondary" className="text-xs font-normal">
              {t}
            </Badge>
          ))}
        </div>
      </Link>
    </TiltCard>
  );
}

export { ProjectIcon };
