import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ShoppingCart } from "lucide-react"
import { getProductById } from "@/lib/db/products"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex-1">
      <Container>
        <div className="grid gap-8 py-8 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg border bg-background">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                No image available
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                {product.featured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
              </div>
              <p className="text-lg text-muted-foreground">
                CAS: {product.casNumber}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Manufacturer</span>
                <span>{product.manufacturer}</span>
              </div>
              {product.purity && (
                <div className="flex justify-between">
                  <span className="font-medium">Purity</span>
                  <span>{product.purity}</span>
                </div>
              )}
              {product.grade && (
                <div className="flex justify-between">
                  <span className="font-medium">Grade</span>
                  <span>{product.grade}</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Available Packaging Sizes</h3>
              <div className="grid grid-cols-3 gap-4">
                {product.packagingSizes.map((size) => (
                  <div
                    key={size.id}
                    className="flex flex-col items-center rounded-lg border p-4"
                  >
                    <span className="text-lg font-medium">
                      {size.size} {size.unit}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      SKU: {size.sku}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button asChild variant="outline" className="flex-1">
                <Link href={product.msdsUrl} target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Download MSDS
                </Link>
              </Button>
              <Button className="flex-1">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="py-8">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="prose max-w-none">
                <p>{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <div className="prose max-w-none">
                <ul>
                  {product.specifications?.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="applications" className="mt-4">
              <div className="prose max-w-none">
                <ul>
                  {product.applications?.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </div>
  )
} 