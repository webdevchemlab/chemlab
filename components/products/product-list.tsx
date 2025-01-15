"use client"

import * as React from "react"
import * as Select from "@radix-ui/react-select"
import { BeakerIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  casNumber: string
  manufacturer: string
  purity: string
  grade: string
  category: string
  price: string
  packSize: string
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps): JSX.Element {
  const [search, setSearch] = React.useState("")
  const [manufacturer, setManufacturer] = React.useState("all")
  const [category, setCategory] = React.useState("all")
  const [grade, setGrade] = React.useState("all")
  const [filteredProducts, setFilteredProducts] = React.useState(products)

  React.useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.casNumber.toLowerCase().includes(search.toLowerCase());
      const matchesManufacturer = manufacturer === "all" || product.manufacturer === manufacturer;
      const matchesCategory = category === "all" || product.category === category;
      const matchesGrade = grade === "all" || product.grade === grade;
      
      return matchesSearch && matchesManufacturer && matchesCategory && matchesGrade;
    });
    setFilteredProducts(filtered);
  }, [search, manufacturer, category, grade, products]);

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name or CAS number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={cn(
              "rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background file:border-0 file:bg-transparent",
              "file:text-sm file:font-medium placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              "md:w-1/3"
            )}
          />
          <Select.Root value={manufacturer} onValueChange={setManufacturer}>
            <Select.Trigger className={cn(
              "inline-flex h-10 w-[200px] items-center justify-between",
              "rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}>
              <Select.Value placeholder="Manufacturer" />
              <Select.Icon />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={cn(
                "relative z-50 min-w-[8rem] overflow-hidden",
                "rounded-md border bg-popover text-popover-foreground shadow-md",
                "animate-in fade-in-80"
              )}>
                <Select.Viewport className="p-1">
                  <Select.Item value="all" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>All Manufacturers</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="Sigma-Aldrich" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>Sigma-Aldrich</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="Merck" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>Merck</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="SRL" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>SRL</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <Select.Root value={category} onValueChange={setCategory}>
            <Select.Trigger className={cn(
              "inline-flex h-10 w-[200px] items-center justify-between",
              "rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}>
              <Select.Value placeholder="Category" />
              <Select.Icon />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={cn(
                "relative z-50 min-w-[8rem] overflow-hidden",
                "rounded-md border bg-popover text-popover-foreground shadow-md",
                "animate-in fade-in-80"
              )}>
                <Select.Viewport className="p-1">
                  <Select.Item value="all" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>All Categories</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="Inorganic Salts" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>Inorganic Salts</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="Solvents" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>Solvents</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="Acids & Bases" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>Acids & Bases</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          <Select.Root value={grade} onValueChange={setGrade}>
            <Select.Trigger className={cn(
              "inline-flex h-10 w-[200px] items-center justify-between",
              "rounded-md border border-input bg-background px-3 py-2 text-sm",
              "ring-offset-background placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}>
              <Select.Value placeholder="Grade" />
              <Select.Icon />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={cn(
                "relative z-50 min-w-[8rem] overflow-hidden",
                "rounded-md border bg-popover text-popover-foreground shadow-md",
                "animate-in fade-in-80"
              )}>
                <Select.Viewport className="p-1">
                  <Select.Item value="all" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>All Grades</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="ACS Reagent" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>ACS Reagent</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="HPLC" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>HPLC</Select.ItemText>
                  </Select.Item>
                  <Select.Item value="AR" className={cn(
                    "relative flex w-full cursor-default select-none items-center",
                    "rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
                    "focus:bg-accent focus:text-accent-foreground",
                    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  )}>
                    <Select.ItemText>AR</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className={cn(
              "rounded-lg border bg-card text-card-foreground shadow-sm"
            )}>
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className={cn(
                  "text-2xl font-semibold leading-none tracking-tight",
                  "flex items-center gap-2"
                )}>
                  <BeakerIcon className="w-5 h-5" />
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">CAS: {product.casNumber}</p>
              </div>
              <div className="p-6 pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Manufacturer:</span>
                    <span>{product.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Purity:</span>
                    <span>{product.purity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Grade:</span>
                    <span>{product.grade}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Pack Size:</span>
                    <span>{product.packSize}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-semibold">${product.price}</span>
                    <a
                      href={`/products/${product.id}`}
                      className={cn(
                        "inline-flex items-center justify-center rounded-md",
                        "text-sm font-medium ring-offset-background transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-ring focus-visible:ring-offset-2",
                        "disabled:pointer-events-none disabled:opacity-50",
                        "border border-input bg-background hover:bg-accent",
                        "hover:text-accent-foreground h-10 px-4 py-2"
                      )}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 