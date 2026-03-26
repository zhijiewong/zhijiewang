import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-border/50 bg-card/50 p-6 transition-colors hover:border-blue-500/30 hover:bg-card"
    >
      <div className="mb-3 flex items-center gap-3">
        {project.icon ? (
          <Image
            src={project.icon}
            alt={project.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 font-mono text-sm font-bold text-blue-400">
            {project.name.charAt(0).toUpperCase()}
          </div>
        )}
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
  );
}
