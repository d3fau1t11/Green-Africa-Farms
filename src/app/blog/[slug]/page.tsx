import type { Metadata } from "next";

import { BlogPostNotFound } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/blog-post-not-found";
import { BlogPostPage } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/blog-post-page";
import { getBlogPost } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/blog-posts-data";
import { SITE_NAME } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-data";
import { SiteShell } from "@/components/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/site-shell";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: `Article not found — ${SITE_NAME}` };
  }
  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return (
    <SiteShell>{post ? <BlogPostPage post={post} /> : <BlogPostNotFound />}</SiteShell>
  );
}
