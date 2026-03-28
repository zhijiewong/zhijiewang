"use client";

import { useState, type FormEvent } from "react";
import { Send, Check, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(
        `https://formspree.io/f/${siteConfig.formspreeId}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json();
        setError(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-8" role="status" aria-live="polite">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
          <Check className="h-6 w-6 text-green-400" aria-hidden="true" />
        </div>
        <p className="font-medium">Message sent!</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          placeholder="What would you like to discuss?"
        />
      </div>

      {status === "error" && (
        <div
          className="flex items-center gap-2 text-sm text-red-400"
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
