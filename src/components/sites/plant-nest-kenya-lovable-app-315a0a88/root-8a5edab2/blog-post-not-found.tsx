import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BlogPostNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Article not found</h1>
      <p className="mt-2 text-muted-foreground">
        The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
    </div>
  );
}
