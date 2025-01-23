import { categories } from "@/data/categories"
import CategoryContent from "./CategoryContent"

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryContent categoryId={params.category} />
}