export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const img = (file: string) =>
  `/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/images/${file}`;

export const blogPosts: BlogPost[] = [
  {
    slug: "hass-avocado-ethiopia",
    title: "How to Grow Hass Avocado Profitably in Ethiopia",
    excerpt:
      "A complete guide to spacing, irrigation, and export-readiness for Hass avocado farmers.",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "Avocado",
    image: img("blog-product-avocado.jpg"),
  },
  {
    slug: "wambugu-apple-guide",
    title: "Wambugu Apple: The Ethiopian Apple Variety Changing Farming",
    excerpt:
      "Why the Wambugu variety is unlocking apple farming in unlikely altitudes — including hot, low-altitude areas.",
    date: "May 02, 2026",
    readTime: "6 min read",
    category: "Apple",
    image: img("blog-product-apple.jpg"),
  },
  {
    slug: "passion-fruit-income",
    title: "Passion Fruit Farming: The Fastest Path to Farm Income in Ethiopia",
    excerpt:
      "From planting to first harvest in under a year — here's how to grow grafted purple passion profitably.",
    date: "April 18, 2026",
    readTime: "7 min read",
    category: "Passion Fruit",
    image: img("blog-product-passion.jpg"),
  },
  {
    slug: "soil-preparation",
    title: "Soil Preparation Checklist for Fruit Trees in Ethiopia",
    excerpt:
      "Get your soil ready before your seedlings arrive — a simple checklist every fruit farmer needs.",
    date: "April 04, 2026",
    readTime: "5 min read",
    category: "Farming Basics",
    image: img("blog-product-avocado.jpg"),
  },
  {
    slug: "dragon-fruit-farming-ethiopia",
    title: "Dragon Fruit Farming in Ethiopia: A Premium Crop on the Rise",
    excerpt:
      "Dragon fruit (pitaya) fetches up to ETB 2,400 per fruit. Here is how to set up your first orchard.",
    date: "March 20, 2026",
    readTime: "7 min read",
    category: "Exotic Fruits",
    image: img("dragon-fruit.jpg"),
  },
  {
    slug: "strawberry-farming-ethiopia",
    title: "Strawberry Farming in Ethiopia: Start Earning in 4 Months",
    excerpt:
      "Strawberries fruit within 3–4 months of planting and bear continuously. Here is how to grow them profitably.",
    date: "March 06, 2026",
    readTime: "6 min read",
    category: "Berries",
    image: img("strawberry.jpg"),
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
