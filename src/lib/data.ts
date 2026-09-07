export type Product = {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  mrp?: string;
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
        slug: "viat",
        categorySlug: "ro-purifiers",
        name: "VIAT",
        description: "SAFE & HEALTHY water purification.",
        features: ["RO+UV+UF+TDS", "12-15 Ltrs/Hr", "8 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-ro-health-promise.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-ro-health-promise.jpg"],
        mrp: "23,499/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "8 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+TDS"
        }
      },
      {
        id: "ro-2",
        slug: "i-pure",
        categorySlug: "ro-purifiers",
        name: "I PURE",
        description: "Pure and simple. The perfect choice for your home.",
        features: ["RO+UV+UF+TDS", "12-15 Ltrs/Hr", "8 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-ro-lifestyle.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-ro-lifestyle.jpg"],
        mrp: "21,499/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "8 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+TDS"
        }
      },
      {
        id: "ro-3",
        slug: "4g-hot-cold",
        categorySlug: "ro-purifiers",
        name: "4G HOT & COLD NORMAL",
        description: "Versatile water purifier with hot, cold, and normal options.",
        features: ["Hot & Cold", "Normal Water Option", "12-15 Ltrs/Hr"],
        image: "/images/products/ro-purifiers/ashma-ream-alkaline.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-ream-alkaline.jpg"],
        mrp: "29,999/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "7 Ltrs. Normal 3 Ltrs. Hot 3 Ltrs. Cold",
          "Dimension": "660x431mm",
          "Weight": "16 Kg",
          "Purification System": "RO+UV+UF+TDS"
        }
      },
      {
        id: "ro-4",
        slug: "stion",
        categorySlug: "ro-purifiers",
        name: "STION",
        description: "Copper and Alkaline enhanced purification.",
        features: ["RO+UV+UF+TDS+alkaline", "12-15 Ltrs/Hr", "8 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-mr-pure-ro.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-mr-pure-ro.jpg"],
        mrp: "23,499/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "8 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+TDS+alkaline"
        }
      },
      {
        id: "ro-5",
        slug: "mr-pure",
        categorySlug: "ro-purifiers",
        name: "Mr. Pure",
        description: "Copper technology with a premium metallic finish.",
        features: ["RO+UV+UF+TDS+Copper", "10 Ltrs Storage", "Smart LED Indicator"],
        image: "/images/products/ro-purifiers/ashma-mr-pure-ro.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-mr-pure-ro.jpg"],
        mrp: "21,999/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "10 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+TDS+Copper"
        }
      },
      {
        id: "ro-6",
        slug: "salto",
        categorySlug: "ro-purifiers",
        name: "SALTO",
        description: "Innovative Technology with Zinc, Copper & Alkaline technology.",
        features: ["RO+UV+UF+TDS+Copper", "12 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-salto-ro.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-salto-ro.jpg", "/images/products/ro-purifiers/ashma-salto-hydrate.jpg"],
        mrp: "21,499/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "12 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+TDS+Copper"
        }
      },
      {
        id: "ro-7",
        slug: "ream",
        categorySlug: "ro-purifiers",
        name: "REAM",
        description: "RO+UV Alkaline purification system. Experience purity.",
        features: ["RO+UV+UF+TDS+alkaline", "12 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-ream-alkaline.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-ream-alkaline.jpg", "/images/products/ro-purifiers/ashma-ream-alcea-couple.jpg"],
        mrp: "21,499/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "12 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+TDS+alkaline"
        }
      },
      {
        id: "ro-8",
        slug: "alcea",
        categorySlug: "ro-purifiers",
        name: "ALCEA",
        description: "Drink 100% Pure Water with advanced quality of life features.",
        features: ["RO+UV+UF+ Minerals+TDS", "12 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-alcea-ro.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-alcea-ro.jpg", "/images/products/ro-purifiers/ashma-alcea-benefits.jpg"],
        mrp: "21,499/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "12 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+ Minerals+TDS"
        }
      },
      {
        id: "ro-9",
        slug: "ally",
        categorySlug: "ro-purifiers",
        name: "ALLY",
        description: "Premium Reverse Osmosis System with complete water quality.",
        features: ["RO+UV+UF+ Minerals+TDS", "12 Ltrs Storage"],
        image: "/images/products/ro-purifiers/ashma-ally-ream-mr-pure-alcea.jpg",
        gallery: ["/images/products/ro-purifiers/ashma-ally-ream-mr-pure-alcea.jpg"],
        mrp: "19,999/-",
        specs: {
          "Flow Rate": "12-15 Ltrs. / Hr.",
          "Water Pressure": "0.5 Kg/Sqcm (Min) : 35w",
          "Power Consumption": "35W",
          "Power Supply": "SMPS",
          "Pump": "ASHMA 100GPD",
          "Supply Voltage": "130-290VSE",
          "Water Storage": "12 Ltrs.",
          "Dimension": "375x170x550mm",
          "Weight": "12 Kg",
          "Purification System": "RO+UV+UF+ Minerals+TDS"
        }
      }
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
        slug: "pearl",
        categorySlug: "chimneys",
        name: "PEARL",
        description: "Experience The Power of Auto Intelligence in Kitchen Chimney.",
        features: ["3 Step + Twin Baffle", "Touch & Monitor Sensor", "Stainless Steel"],
        image: "/images/products/chimneys/ashma-chimney-premium.jpg",
        gallery: ["/images/products/chimneys/ashma-chimney-premium.jpg"],
        mrp: "44,999/-",
        specs: {
          "Speed": "3 Step + Twin Baffle",
          "Lamp": "LED",
          "Outlet Dia": "160mm",
          "Switch": "Touch & Monitor Sensor",
          "Rated Motor Input Power": "180 W",
          "Voltage": "AC220 - 240V",
          "Air Flow": "2200m3/H",
          "Oil Container": "Stainless Steel"
        }
      },
      {
        id: "chimney-2",
        slug: "salvia-led",
        categorySlug: "chimneys",
        name: "SALVIA LED",
        description: "Hydraulic operated premium kitchen chimney.",
        features: ["Hydraulic Operated", "Touch & Monitor Sensor", "LED Lighting"],
        image: "/images/products/chimneys/ashma-eco-hydrolic-chimney.jpg",
        gallery: ["/images/products/chimneys/ashma-eco-hydrolic-chimney.jpg"],
        mrp: "49,999/-",
        specs: {
          "Speed": "3 Step",
          "Lamp": "LED",
          "Outlet Dia": "160mm",
          "Switch": "Touch & Monitor Sensor",
          "Rated Motor Input Power": "180 W",
          "Voltage": "AC220 - 240V",
          "Air Flow": "2200m3/H",
          "Operation Type": "Hydrolic Operated",
          "Oil Container": "Stainless Steel"
        }
      },
      {
        id: "chimney-3",
        slug: "salvia-motion",
        categorySlug: "chimneys",
        name: "SALVIA MOTION",
        description: "Wave your hand and say good bye to smokey kitchen.",
        features: ["Touch & Monitor Sensor", "Stainless Steel"],
        image: "/images/products/chimneys/ashma-salvia-motion-chimney.jpg",
        gallery: ["/images/products/chimneys/ashma-salvia-motion-chimney.jpg"],
        mrp: "33,499/-",
        specs: {
          "Speed": "3 Step",
          "Lamp": "LED",
          "Outlet Dia": "160mm",
          "Switch": "Touch & Monitor Sensor",
          "Rated Motor Input Power": "180 W",
          "Voltage": "AC220 - 240V",
          "Air Flow": "2000m3/H",
          "Oil Container": "Stainless Steel"
        }
      },
      {
        id: "chimney-4",
        slug: "renceo",
        categorySlug: "chimneys",
        name: "RENCÉO",
        description: "Advanced suction technology.",
        features: ["Touch & Monitor Sensor", "Stainless Steel"],
        image: "/images/products/chimneys/ashma-renceo-chimney.jpg",
        gallery: ["/images/products/chimneys/ashma-renceo-chimney.jpg"],
        mrp: "34,999/-",
        specs: {
          "Speed": "3 Step",
          "Lamp": "LED",
          "Outlet Dia": "160mm",
          "Switch": "Touch & Monitor Sensor",
          "Rated Motor Input Power": "180 W",
          "Voltage": "AC220 - 240V",
          "Air Flow": "2000m3/H",
          "Oil Container": "Stainless Steel"
        }
      },
      {
        id: "chimney-5",
        slug: "peony",
        categorySlug: "chimneys",
        name: "PEONY",
        description: "Turbo speed for faster smoke extraction.",
        features: ["3 Step + Turbo", "Touch & Monitor Sensor"],
        image: "/images/products/chimneys/ashma-chimney-diwali.jpg",
        gallery: ["/images/products/chimneys/ashma-chimney-diwali.jpg"],
        mrp: "44,999/-",
        specs: {
          "Speed": "3 Step + Turbo",
          "Lamp": "LED",
          "Outlet Dia": "160mm",
          "Switch": "Touch & Monitor Sensor",
          "Rated Motor Input Power": "180 W",
          "Voltage": "AC220 - 240V",
          "Air Flow": "2200m3/H",
          "Oil Container": "Stainless Steel"
        }
      },
      {
        id: "chimney-6",
        slug: "salvia-3g",
        categorySlug: "chimneys",
        name: "SALVIA 3G",
        description: "Efficient and simple to use.",
        features: ["Switch Button", "Stainless Steel"],
        image: "/images/products/chimneys/ashma-eco-chimney-outsmart.jpg",
        gallery: ["/images/products/chimneys/ashma-eco-chimney-outsmart.jpg"],
        mrp: "22,999/-",
        specs: {
          "Speed": "2 Step",
          "Lamp": "LED",
          "Outlet Dia": "160mm",
          "Switch": "Switch Button",
          "Rated Motor Input Power": "180 W",
          "Voltage": "AC220 - 240V",
          "Air Flow": "1800m3/H",
          "Oil Container": "Stainless Steel"
        }
      }
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
        slug: "hot-cold-normal",
        categorySlug: "dispensers",
        name: "HOT COLD & NORMAL Dispenser",
        description: "Floor Standing Water Purifier.",
        features: ["Hot & Cold Option", "Storage Capacity 10 Ltrs", "AVS PLASTIC + METAL SIDES"],
        image: "/images/products/dispensers/ashma-water-dispenser.jpg",
        gallery: ["/images/products/dispensers/ashma-water-dispenser.jpg"],
        mrp: "49,999/-",
        specs: {
          "Floor Standing": "Yes",
          "Floor Standing + Cooling Cabinet": "No",
          "Floor Standing + Storage Cabinet": "No",
          "Floor Standing for Purifier": "Yes",
          "Table Top": "Available",
          "Normal & Cold Option": "Yes",
          "Hot & Cold Option": "Yes",
          "Storage Capacity": "10 Ltrs.",
          "Power Source": "220v / 1P / 50HZ",
          "Power Cold (Max)": "130w",
          "Refirgerant": "R134A (CFC FREE)",
          "Cooling Capacity": "5 Ltrs. / Hr.",
          "Cold Temperature Range": "7-13 Deg. C.",
          "Condenser": "Static",
          "Power Hot": "500w",
          "Heating Capacity": "5 Ltrs. (Hr.)",
          "External Cabinet Material": "AVS PLASTIC + METAL SIDES",
          "Item Depth (mm)": "330mm",
          "Item Height (mm)": "1120mm",
          "Item Weight (Kg)": "19 Kg"
        }
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
