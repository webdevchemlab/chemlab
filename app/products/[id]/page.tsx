"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BeakerIcon, Download, FileText, Info, ShieldAlert } from "lucide-react";

// Mock data - replace with actual data fetching
const product = {
  id: "1",
  name: "Sodium Chloride",
  casNumber: "7647-14-5",
  manufacturer: "Merck",
  purity: "99.5%",
  grade: "ACS",
  category: "Inorganic Chemicals",
  description: "High purity sodium chloride suitable for analytical and laboratory use. Meets ACS specifications.",
  specifications: {
    appearance: "White crystalline powder",
    molecularFormula: "NaCl",
    molecularWeight: "58.44 g/mol",
    meltingPoint: "801°C",
    boilingPoint: "1413°C",
    density: "2.17 g/cm³",
    solubility: "Soluble in water",
  },
  packagingSizes: [
    { size: "500g", sku: "NaCl-500" },
    { size: "1kg", sku: "NaCl-1000" },
    { size: "5kg", sku: "NaCl-5000" },
  ],
  safetyInfo: {
    hazardStatements: [
      "H319 - Causes serious eye irritation",
    ],
    precautionaryStatements: [
      "P264 - Wash hands thoroughly after handling",
      "P280 - Wear protective gloves/protective clothing/eye protection/face protection",
    ],
    storage: "Store in a dry place. Keep container tightly closed.",
  },
};

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Product Overview */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <BeakerIcon className="h-8 w-8 text-blue-500" />
                {product.name}
              </h1>
              <p className="mt-4 text-muted-foreground">{product.description}</p>
            </div>

            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="safety">Safety Data</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                    <CardDescription>Detailed product specifications and properties</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="safety" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Safety Information</CardTitle>
                    <CardDescription>Important safety and handling information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Hazard Statements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.safetyInfo.hazardStatements.map((statement, index) => (
                          <li key={index} className="text-sm">{statement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Precautionary Statements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {product.safetyInfo.precautionaryStatements.map((statement, index) => (
                          <li key={index} className="text-sm">{statement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Storage</h4>
                      <p className="text-sm">{product.safetyInfo.storage}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Documents</CardTitle>
                    <CardDescription>Download product related documents</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Certificate of Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      Safety Data Sheet (SDS)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Info className="mr-2 h-4 w-4" />
                      Product Specification Sheet
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Product Details Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CAS Number:</span>
                  <span className="font-medium">{product.casNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Manufacturer:</span>
                  <span className="font-medium">{product.manufacturer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Purity:</span>
                  <span className="font-medium">{product.purity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grade:</span>
                  <span className="font-medium">{product.grade}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Available Packaging</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.packagingSizes.map((pkg) => (
                  <div key={pkg.sku} className="flex justify-between items-center">
                    <span>{pkg.size}</span>
                    <Button>Request Quote</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Contact our technical support team for any questions about this product.
                </p>
                <Button className="w-full">Contact Support</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 