/**
 * Product definitions for Stripe integration
 * Define all products and their prices here for centralized management
 */

export const PRODUCTS = {
  AOBENZ_SINPIN: {
    id: 1,
    name: "aobenz SINPIN Radiance Essence",
    description: "Professional brightening formula targeting dark spots, freckles, and uneven skin tone",
    priceInCents: 5990, // $59.90
    originalPriceInCents: 19990, // $199.90 (for display)
    currency: "usd",
    image: "/manus-storage/aobenz_product_45ae952f.jpg",
  },
};

export type Product = (typeof PRODUCTS)[keyof typeof PRODUCTS];
