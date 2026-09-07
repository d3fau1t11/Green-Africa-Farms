/**
 * Site content and constants for Green Africa General Trading PLC.
 */

import { Headphones, Leaf, ShieldCheck, Truck } from "lucide-react";

import type {
  PlantNestCategory,
  PlantNestFeature,
  PlantNestNavLink,
  PlantNestTestimonial,
} from "@/types/plant-nest-ke";

import { products } from "./products-catalog";

export { products };

export const SITE_NAME = "Green Africa General Trading PLC";
export const CURRENCY = "ETB";
export const FLASH_SALE_FREE_DELIVERY_MIN = 15_000;
export const GUIDE_PROMO_VALUE = 4_500;
export const CART_FREE_DELIVERY_MIN = 30_000;

export function formatPrice(amount: number) {
  return `${CURRENCY} ${amount.toLocaleString()}`;
}

export const WHATSAPP_NUMBER = "251932318151";
export const WHATSAPP_DISPLAY = "+251 932 318 151";
export const CART_STORAGE_KEY = "pnke_cart_v1";
export const GUIDE_PDF = "/downloads/plant-nest-ke-fruit-farming-starter-guide.pdf";
export const ASSET_BASE = "/sites/plant-nest-kenya-lovable-app-315a0a88/root-8a5edab2/images";

export function waUrl(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const categories: PlantNestCategory[] = [
  { slug: "avocado", name: "Avocado Seedlings", emoji: "🥑" },
  { slug: "apple", name: "Apple Seedlings", emoji: "🍎" },
  { slug: "citrus", name: "Citrus Seedlings", emoji: "🍊" },
  { slug: "passion", name: "Passion Fruit", emoji: "💜" },
  { slug: "mango", name: "Mango Seedlings", emoji: "🥭" },
  { slug: "nuts", name: "Macadamia & Nuts", emoji: "🌰" },
  { slug: "berries", name: "Berries", emoji: "🍓" },
  { slug: "exotic", name: "Exotic Fruits", emoji: "🌿" },
];

export const features: PlantNestFeature[] = [
  { icon: Truck, title: "Nationwide Delivery", text: "Fast, safe shipping across all regions of Ethiopia." },
  { icon: Leaf, title: "Healthy Grafted Seedlings", text: "Certified, vigorous & disease-free." },
  {
    icon: Headphones,
    title: "Expert Farming Support",
    text: "Free agronomy advice from our team.",
  },
  {
    icon: ShieldCheck,
    title: "High Survival Rate",
    text: "98% of our seedlings thrive in the field.",
  },
];

export const whyPoints: string[] = [
  "Certified, quality-tested seedlings from trusted nurseries.",
  "Personal expert support — call, WhatsApp or visit our nursery.",
  "Reliable nationwide delivery across Ethiopia.",
  "Beginner-friendly guidance for first-time farmers.",
  "Honest, affordable pricing — no hidden fees.",
];

export const testimonials: PlantNestTestimonial[] = [
  {
    name: "Abebe Bekele",
    location: "Debre Zeit / Bishoftu",
    rating: 5,
    text: "Ordered 200 Hass avocado seedlings — all arrived healthy and the team guided me through planting. Highly recommend.",
  },
  {
    name: "Tigist Haile",
    location: "Hawassa",
    rating: 5,
    text: "My Wambugu apples are now fruiting in just 20 months. Green Africa General Trading PLC's grafted seedlings are the real deal.",
  },
  {
    name: "Dawit Alemu",
    location: "Bahir Dar",
    rating: 5,
    text: "Excellent customer service. The passion fruit vines were strong and well-grafted. Already on my third order.",
  },
];

export const navLinks: PlantNestNavLink[] = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];
