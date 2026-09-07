import type { LucideIcon } from "lucide-react";

/** A single seedling listing. */
export interface PlantNestProduct {
  slug: string;
  name: string;
  price: number;
  category: string;
  image: string;
  short: string;
  badge?: string;
  benefits: string[];
  climate: string;
  maturity: string;
  description: string;
}

/** A shop category tile. */
export interface PlantNestCategory {
  slug: string;
  name: string;
  emoji: string;
}

/** A value-proposition entry in the feature strip. */
export interface PlantNestFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

/** A customer quote. */
export interface PlantNestTestimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

/** A line in the persisted cart. */
export interface PlantNestCartItem {
  slug: string;
  qty: number;
}

/** A cart line joined with its product record. */
export interface PlantNestCartLine {
  product: PlantNestProduct;
  qty: number;
  lineTotal: number;
}

/** A top-level navigation entry. */
export interface PlantNestNavLink {
  to: string;
  label: string;
}
