import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${siteConfig.name} — AI document intelligence, Graph RAG visualization, developer tools, and AIOps.`,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
