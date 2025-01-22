import { brands } from "@/data/brands"
import BrandContent from "./brand-content"

export async function generateStaticParams() {
  return brands.map((brand) => ({
    id: brand.id,
  }))
}

export default function BrandPage({ params }: { params: { id: string } }) {
  return <BrandContent brandId={params.id} />
}
