import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BeakerIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";
import { FeaturedBrands } from "@/components/sections/featured-brands";
import { ProductCategories } from "@/components/sections/product-categories";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="absolute inset-0 bg-grid-slate-400/[0.05] bg-[size:40px_40px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-600/[0.05]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-8 max-w-2xl mx-auto lg:mx-0">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                  Advanced Chemical Synthesis Solutions
                  <span className="text-blue-500">.</span>
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Your trusted partner for high-quality chemical synthesis, supplies, and laboratory equipment.
                  Serving industries with reliability and expertise.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Link href="/products">Browse Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-blue-200 dark:border-blue-800">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground justify-center lg:justify-start">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                  <span>Safety Certified</span>
                </div>
                <div className="h-1.5 w-1.5 rounded-full bg-muted"></div>
                <div className="flex items-center space-x-1.5">
                  <TruckIcon className="h-5 w-5 text-blue-500" />
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BeakerIcon className="h-32 w-32 text-blue-500/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <FeaturedBrands />

      {/* Product Categories Section */}
      <ProductCategories />

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-blue-100 p-4 dark:bg-blue-900/50">
                <BeakerIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Premium Synthesis</h3>
              <p className="text-muted-foreground">
                High-quality chemicals and synthesis solutions from trusted manufacturers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-green-100 p-4 dark:bg-green-900/50">
                <ShieldCheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                Comprehensive safety documentation and handling guidelines for all products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="mb-4 rounded-full bg-orange-100 p-4 dark:bg-orange-900/50">
                <TruckIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Reliable Delivery</h3>
              <p className="text-muted-foreground">
                Secure and timely delivery with proper handling and transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-muted-foreground">
              Create an account to access our full catalog and start ordering.
            </p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Link href="/register">Create Business Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}