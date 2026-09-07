import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

import type { BlogPost } from "./blog-posts-data";

export function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="768px"
          className="object-cover"
        />
      </div>
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
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{post.title}</h1>
      <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
    </article>
  );
}
