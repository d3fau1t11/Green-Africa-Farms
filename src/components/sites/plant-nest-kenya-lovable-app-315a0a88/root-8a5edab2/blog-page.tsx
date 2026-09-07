import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "./blog-posts-data";

export function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-medium text-primary">Farming Blog</p>
      <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">
        Knowledge to grow your farm
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Practical, Ethiopia-specific advice from our agronomists and partner farmers — covering
        avocado, apple, citrus, passion fruit, berries, and exotic crops.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:border-primary hover:shadow-card"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 text-sm font-medium text-primary">Read article →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
