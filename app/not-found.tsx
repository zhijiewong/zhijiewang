import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="flex-1">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-32 text-center">
        <p className="font-mono text-sm font-medium text-blue-400">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-300"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
