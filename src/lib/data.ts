export type Product = {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  specs?: Record<string, string>;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    slug: "ro-purifiers",
    name: "RO Water Purifiers",
    description: "Advanced multi-stage purification systems ensuring 100% pure and healthy drinking water.",
    image: "/images/products/ro-purifiers/ashma-ream-salto-alcea-lineup.jpg",
    products: [
      {
        id: "ro-1",
        slug: "salto",
        categorySlug: "ro-purifiers",
        name: "Ashma Salto",
        description: "Innovative Technology with Zinc, Copper & Alkaline technology for promoting a healthier home.",
        features: ["Copper & Alkaline Technology", "Advanced Multi-stage Purification", "Zinc Enriched", "Premium Design"],
        image: "/images/products/ro-purifiers/ashma-salto-ro.jpg",
        gallery: [
          "/images/products/ro-purifiers/ashma-salto-ro.jpg",
          "/images/products/ro-purifiers/ashma-salto-hydrate.jpg",
          "/images/products/ro-purifiers/ashma-salto-kitchen-lifestyle.jpg"
        ],
      },
      {
        id: "ro-2",
        slug: "alcea",
        categorySlug: "ro-purifiers",
        name: "Ashma Alcea",
        description: "Drink 100% Pure Water with advanced quality of life features.",
        features: ["100% Purity", "Improved Hydration", "Better Digestion", "Stronger Immune System", "Compact Design", "ABS Plastic", "LED Option"],
        image: "/images/products/ro-purifiers/ashma-alcea-ro.jpg",
        gallery: [
          "/images/products/ro-purifiers/ashma-alcea-ro.jpg",
          "/images/products/ro-purifiers/ashma-alcea-benefits.jpg"
        ],
      },
      {
        id: "ro-3",
        slug: "ivy",
        categorySlug: "ro-purifiers",
        name: "Ashma Ivy",
        description: "Premium Reverse Osmosis System with complete water quality display.",
        features: ["RO+UV+UF+TDS Controller", "Mineral Cartridge", "Wide Water Display"],
        image: "/images/products/ro-purifiers/ashma-ivy-ro.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-ivy-ro.jpg"],
      },
      {
        id: "ro-4",
        slug: "ream",
        categorySlug: "ro-purifiers",
        name: "Ashma Ream",
        description: "RO+UV Alkaline purification system. With Ashma India Alkaline, you will always see the glass full!",
        features: ["RO+UV Purification", "Alkaline Enriched", "Elegant Design"],
        image: "/images/products/ro-purifiers/ashma-ream-alkaline.jpg",
        gallery: [
          "/images/products/ro-purifiers/ashma-ream-alkaline.jpg",
          "/images/products/ro-purifiers/ashma-ream-alcea-couple.jpg"
        ],
      },
      {
        id: "ro-5",
        slug: "mr-pure",
        categorySlug: "ro-purifiers",
        name: "Mr. Pure",
        description: "Experience purity in every drop. The perfect blend of style and health!",
        features: ["Copper Technology", "Smart LED Indicator", "Premium Metallic Finish"],
        image: "/images/products/ro-purifiers/ashma-mr-pure-ro.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-mr-pure-ro.jpg"],
      },
    ],
  },
  {
    id: "cat-2",
    slug: "commercial-ro",
    name: "Commercial & Industrial RO",
    description: "High-capacity water purification solutions for commercial and industrial applications.",
    image: "/images/products/commercial-ro/industrial-ro-plant-tanks.jpg",
    products: [
      {
        id: "com-1",
        slug: "water-chiller",
        categorySlug: "commercial-ro",
        name: "Water Chiller with Inbuilt RO & UV",
        description: "Stainless steel water cooler and chiller with inbuilt purification.",
        features: ["Inbuilt RO & UV", "Stainless Steel Body", "High Capacity Cooling"],
        image: "/images/products/commercial-ro/commercial-ro-water-chiller.jpg",
        gallery: [
          "/images/products/commercial-ro/commercial-ro-water-chiller.jpg",
          "/images/products/commercial-ro/commercial-ro-cooler-1.jpg",
          "/images/products/commercial-ro/commercial-ro-cooler-2.jpg"
        ],
      },
      {
        id: "com-2",
        slug: "industrial-plants",
        categorySlug: "commercial-ro",
        name: "Industrial RO Plants",
        description: "Available in 50 LPH to 10000 LPH capacities. Customized models are also available.",
        features: ["High Capacity (50-10000 LPH)", "Customizable", "Heavy Duty FRP Vessels", "Advanced Control Panel"],
        image: "/images/products/commercial-ro/industrial-ro-plant-system.jpg",
        gallery: [
          "/images/products/commercial-ro/industrial-ro-plant-system.jpg",
          "/images/products/commercial-ro/industrial-ro-plant-tanks.jpg",
          "/images/products/commercial-ro/commercial-ro-plant-blue-vessels.jpg"
        ],
      },
    ],
  },
  {
    id: "cat-3",
    slug: "chimneys",
    name: "Kitchen Chimneys",
    description: "Premium kitchen chimneys for a smoke-free and healthy cooking environment.",
    image: "/images/products/chimneys/ashma-eco-chimney-outsmart.jpg",
    products: [
      {
        id: "chimney-1",
        slug: "eco",
        categorySlug: "chimneys",
        name: "Ashma ECO",
        description: "Outsmart the kitchen smoke with Ashma Eco. Detachable chimney panel with Heat Auto Clean.",
        features: ["Detachable Chimney & Panel", "Vertical Hood Design", "Heat Auto Clean", "Powerful Suction"],
        image: "/images/products/chimneys/ashma-eco-chimney-outsmart.jpg",
        gallery: [
          "/images/products/chimneys/ashma-eco-chimney-outsmart.jpg",
          "/images/products/chimneys/ashma-eco-chimney-peace.jpg"
        ],
      },
      {
        id: "chimney-2",
        slug: "eco-hydrolic",
        categorySlug: "chimneys",
        name: "Ashma ECO Hydrolic",
        description: "Bring the best kitchen chimney to your kitchen. Premium design with advanced features.",
        features: ["Hydraulic Open/Close", "Touch Control", "Sleek Design"],
        image: "/images/products/chimneys/ashma-eco-hydrolic-chimney.jpg",
        gallery: ["/images/products/chimneys/ashma-eco-hydrolic-chimney.jpg"],
      },
      {
        id: "chimney-3",
        slug: "salvia-motion",
        categorySlug: "chimneys",
        name: "Salvia Motion",
        description: "Wave your hand and say good bye to smokey kitchen.",
        features: ["High Suction Power", "Filter Less", "Touch & Motion Control", "Bright LED Lights"],
        image: "/images/products/chimneys/ashma-salvia-motion-chimney.jpg",
        gallery: ["/images/products/chimneys/ashma-salvia-motion-chimney.jpg"],
      },
      {
        id: "chimney-4",
        slug: "renceo",
        categorySlug: "chimneys",
        name: "Ashma Renceo",
        description: "Bhagwan ka diya sab kuch hai... Ashma India ki Chimney hai or kya chahiye.",
        features: ["T-Shape Design", "Touch Control Panel", "Powerful Suction"],
        image: "/images/products/chimneys/ashma-renceo-chimney.jpg",
        gallery: ["/images/products/chimneys/ashma-renceo-chimney.jpg"],
      },
    ],
  },
  {
    id: "cat-4",
    slug: "dispensers",
    name: "Water Dispensers & Softeners",
    description: "Hydrate with our premium purified water dispensers and protect appliances with softeners.",
    image: "/images/products/dispensers/ashma-water-dispenser.jpg",
    products: [
      {
        id: "disp-1",
        slug: "purified-dispenser",
        categorySlug: "dispensers",
        name: "Purified Water Dispenser",
        description: "Flex your health! Hydrate with Purified water Dispenser. 500 watts 5Liters/hr capacity.",
        features: ["Anti-Bacterial Material", "Anti-Overflow Design", "Over Heat Protection", "Fast Heating and Cooling", "Hot, Normal & Cold Options"],
        image: "/images/products/dispensers/ashma-water-dispenser.jpg",
        gallery: ["/images/products/dispensers/ashma-water-dispenser.jpg"],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.products.find((p) => p.slug === productSlug);
}

export function getAllProducts() {
  return CATEGORIES.flatMap((c) => c.products);
}
