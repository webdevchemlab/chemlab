"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  BeakerIcon, 
  FlaskConical, 
  Droplets, 
  TestTubes,
  Microscope,
  GlassWater
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: keyof typeof colorVariants;
}

const colorVariants = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400",
  green: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-400",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-400",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-900/50 dark:text-pink-400",
};

const categories: Category[] = [
  {
    name: "Organic Chemicals",
    description: "Comprehensive selection of organic compounds for synthesis and analysis.",
    icon: BeakerIcon,
    href: "/categories/organic-chemicals",
    color: "blue"
  },
  {
    name: "Inorganic Chemicals",
    description: "Essential inorganic compounds for various laboratory applications.",
    icon: FlaskConical,
    href: "/categories/inorganic-chemicals",
    color: "green"
  },
  {
    name: "Solvents",
    description: "High-purity solvents for chromatography, extraction, and more.",
    icon: Droplets,
    href: "/categories/solvents",
    color: "purple"
  },
  {
    name: "Reagents",
    description: "Wide array of reagents for chemical reactions and analysis.",
    icon: TestTubes,
    href: "/categories/reagents",
    color: "orange"
  },
  {
    name: "Lab Equipment",
    description: "Quality laboratory equipment for precise measurements and analysis.",
    icon: Microscope,
    href: "/categories/lab-equipment",
    color: "indigo"
  },
  {
    name: "Glassware",
    description: "Premium laboratory glassware for all your research needs.",
    icon: GlassWater,
    href: "/categories/glassware",
    color: "pink"
  }
];

export function ProductCategories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Product Categories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our comprehensive range of chemical products and laboratory supplies
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group flex flex-col h-full p-6 bg-background rounded-lg border border-border hover:border-foreground/20 transition-colors"
              >
                <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center ${colorVariants[category.color]}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-foreground/90">
                  {category.name}
                </h3>
                <p className="mt-2 text-muted-foreground flex-grow">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-foreground/60 group-hover:text-foreground">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 