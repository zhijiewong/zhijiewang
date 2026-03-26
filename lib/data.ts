export const siteConfig = {
  name: "Zhijie Wang",
  tagline: "Turning coffee into community-driven code ☕",
  description:
    "Full-stack developer building AI-powered tools for document intelligence, knowledge visualization, and developer productivity. IT Expert at Vector Informatik GmbH.",
  url: "https://zhijiewang.me",
  email: "wang.zhijie@163.com",
  linkedin: "https://www.linkedin.com/in/zhijiewang",
  github: "https://github.com/zhijiewong",
};

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  approach: string;
  tech: string[];
  links: { label: string; url: string }[];
  featured: boolean;
  emoji: string;
  color: string;
}

export const projects: Project[] = [
  {
    slug: "pawdig",
    name: "Pawdig",
    tagline: "AI document intelligence",
    description:
      "An AI-powered document intelligence platform that processes and understands documents for automated insights, data extraction, and knowledge discovery.",
    problem:
      "Extracting structured information from unstructured documents is time-consuming and error-prone. Teams spend hours manually reviewing documents, missing critical insights buried in dense text.",
    approach:
      "Pawdig uses large language models and document parsing pipelines to automatically extract, classify, and connect information across documents — turning raw files into actionable intelligence.",
    tech: ["AI/ML", "Document Processing", "NLP", "Python"],
    links: [{ label: "Website", url: "https://pawdig.com" }],
    featured: true,
    emoji: "🐾",
    color: "text-red-400 bg-red-500/10",
  },
  {
    slug: "ragviz",
    name: "ragviz",
    tagline: "Graph RAG visualization platform",
    description:
      "An interactive platform for visualizing Graph Retrieval-Augmented Generation (RAG) pipelines. Upload documents, build knowledge graphs, and chat with local LLMs while tuning parameters in real-time.",
    problem:
      "RAG pipelines are opaque — developers can't see how documents are chunked, embedded, and retrieved. Debugging retrieval quality requires visibility into the knowledge graph structure.",
    approach:
      "ragviz provides a visual interface to the entire RAG pipeline: document ingestion, graph construction with Neo4j, vector search with HNSW indexing, and interactive querying against local LLMs via Ollama and llama.cpp.",
    tech: ["Next.js", "FastAPI", "Neo4j", "Python", "Ollama", "TypeScript"],
    links: [
      { label: "GitHub", url: "https://github.com/zhijiewong/ragviz" },
    ],
    featured: true,
    emoji: "🧠",
    color: "text-cyan-400 bg-cyan-500/10",
  },
  {
    slug: "viber",
    name: "viber",
    tagline: "DOM capture for vibe coders",
    description:
      "A browser extension for Cursor IDE and VS Code that captures webpage DOM structures, enabling developers to generate production-ready code components with AI assistance.",
    problem:
      "When building UIs, developers often reference existing websites for inspiration but manually recreate layouts. There's no fast way to capture a page's DOM structure and feed it to AI coding tools.",
    approach:
      "viber injects into any webpage, captures the DOM tree with styles and layout information, and pipes it directly into your IDE. Paired with AI assistants, it turns any website into a component blueprint.",
    tech: ["TypeScript", "Playwright", "VS Code API", "Floating UI"],
    links: [
      { label: "GitHub", url: "https://github.com/zhijiewong/viber" },
    ],
    featured: true,
    emoji: "⚡",
    color: "text-yellow-400 bg-yellow-500/10",
  },
  {
    slug: "aiops",
    name: "AIOps Platform",
    tagline: "Open-source intelligent operations",
    description:
      "An open-source AIOps platform for infrastructure monitoring, anomaly detection, and automated incident response — bringing AI-driven intelligence to DevOps workflows.",
    problem:
      "Modern infrastructure generates massive volumes of logs, metrics, and traces. Traditional monitoring tools create alert fatigue without surfacing actionable insights or automating responses.",
    approach:
      "The platform aggregates observability data, applies machine learning for anomaly detection and root cause analysis, and automates runbook execution — reducing mean time to resolution.",
    tech: ["Monitoring", "Automation", "Infrastructure", "ML", "Python"],
    links: [],
    featured: true,
    emoji: "🤖",
    color: "text-green-400 bg-green-500/10",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "Python", "Java", "SQL", "Bash"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Backend & AI",
    skills: ["Spring Boot", "FastAPI", "Kafka", "LLM APIs", "RAG"],
  },
  {
    category: "Infrastructure",
    skills: ["AWS", "Docker", "Neo4j", "PostgreSQL", "Oracle"],
  },
];

export const education = [
  {
    school: "The Pennsylvania State University",
    degree: "B.S. Information Science and Technology — Design & Development",
    minor: "Business Minor",
  },
];

export const certifications = [
  "CFA Sustainable Investing Certificate",
  "AWS Solutions Architect Associate",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];
