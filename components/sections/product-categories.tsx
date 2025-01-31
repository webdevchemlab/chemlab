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
import { GlareCard } from "@/components/ui/glare-card";
import { Particles } from "@/components/ui/particles";

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
    name: "Fine Chemicals",
    description: "High-purity chemicals for research, analysis, and synthesis",
    icon: BeakerIcon,
    href: "/products/fine-chemicals",
    color: "blue"
  },
  {
    name: "Analytical Reagents",
    description: "Premium grade reagents for precise analytical applications",
    icon: FlaskConical,
    href: "/products/analytical-reagents",
    color: "green"
  },
  {
    name: "Life Science",
    description: "Specialized products for life science research and biotechnology",
    icon: Droplets,
    href: "/products/life-science",
    color: "purple"
  },
  {
    name: "Chromatography",
    description: "High-quality products for all chromatography applications",
    icon: TestTubes,
    href: "/products/chromatography",
    color: "orange"
  },
  {
    name: "Clinical Diagnostics",
    description: "Reliable solutions for clinical and diagnostic testing",
    icon: Microscope,
    href: "/products/clinical-diagnostics",
    color: "indigo"
  },
  {
    name: "Lab Supplies",
    description: "Essential laboratory supplies and consumables",
    icon: GlassWater,
    href: "/products/lab-supplies",
    color: "pink"
  }
];

export function ProductCategories() {
  return (
    <section className="relative py-16 bg-slate-950">
      <Particles
        className="absolute inset-0"
        quantity={75}
        ease={70}
        color="#60A5FA"
        size={0.3}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Product Categories</h2>
          <p className="mt-4 text-lg text-slate-400">
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
              className="h-[300px] group"
            >
              <Link href={category.href} className="block h-full">
                <GlareCard>
                  <div className="flex flex-col h-full p-6 bg-slate-900/50 backdrop-blur-sm group-hover:bg-slate-900/80 transition-colors">
                    <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center ${colorVariants[category.color]}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-slate-100">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-slate-300 flex-grow">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm font-medium text-cyan-400">
                      <span className="group-hover:translate-x-1 transition-transform">Learn more</span>
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform"
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
                  </div>
                </GlareCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 