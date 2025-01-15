import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.chemlabsynthesis.com"

  // Get all products (replace with actual data fetching)
  const products = [
    { id: "1", name: "Sodium Chloride" },
    { id: "2", name: "Methanol" },
    { id: "3", name: "Sulfuric Acid" },
  ]

  // Get all categories
  const categories = [
    "organic-chemicals",
    "inorganic-salts",
    "solvents",
    "acids-bases",
    "analytical-standards",
    "laboratory-glassware",
  ]

  // Get all brands
  const brands = [
    "sigma-aldrich",
    "merck",
    "srl",
    "honeywell",
    "thermo-fisher",
    "borosil",
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...products.map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/categories/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...brands.map((brand) => ({
      url: `${baseUrl}/brands/${brand}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]
} 