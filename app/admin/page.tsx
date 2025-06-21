"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GradientText } from "@/components/ui/gradient-text"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { 
  Package,
  Users,
  ShoppingCart,
  FileText,
  Settings,
  BarChart3,
  Shield,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const adminSections = [
  {
    title: "Products",
    description: "Manage your chemical products inventory",
    icon: Package,
    href: "/admin/products",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Orders",
    description: "View and manage customer orders",
    icon: ShoppingCart,
    href: "/admin/orders",
    color: "text-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30"
  },
  {
    title: "Customers",
    description: "Manage customer accounts and information",
    icon: Users,
    href: "/admin/customers",
    color: "text-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Safety Documents",
    description: "Manage MSDS and safety documentation",
    icon: Shield,
    href: "/admin/safety",
    color: "text-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    title: "Analytics",
    description: "View sales and performance metrics",
    icon: BarChart3,
    href: "/admin/analytics",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    title: "Settings",
    description: "Configure system settings and preferences",
    icon: Settings,
    href: "/admin/settings",
    color: "text-slate-400",
    bgColor: "bg-slate-500/20",
    borderColor: "border-slate-500/30"
  }
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Container className="py-8">
        {/* Header */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { label: "Admin", href: "/admin" }
            ]} 
          />
          
          <div className="mt-4">
            <GradientText
              colors={["#60A5FA", "#34D399", "#60A5FA"]}
              className="text-4xl font-bold mb-2"
              animationSpeed={8}
            >
              Admin Dashboard
            </GradientText>
            <p className="text-slate-400">Manage your chemical supply business</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Total Products</p>
                    <p className="text-2xl font-bold text-slate-100">156</p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <Package className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Active Orders</p>
                    <p className="text-2xl font-bold text-slate-100">23</p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Customers</p>
                    <p className="text-2xl font-bold text-slate-100">1,247</p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-800/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Revenue (MTD)</p>
                    <p className="text-2xl font-bold text-slate-100">₹2.4M</p>
                  </div>
                  <div className="h-12 w-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Admin Sections */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {adminSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <CardSpotlight className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-cyan-500/50 transition-all duration-500 group">
                <Link href={section.href}>
                  <CardContent className="p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-12 w-12 rounded-xl ${section.bgColor} ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <section.icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {section.description}
                    </p>
                  </CardContent>
                </Link>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
              <Link href="/admin/products">
                <Package className="h-4 w-4 mr-2" />
                Add Product
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-200">
              <Link href="/admin/orders">
                <ShoppingCart className="h-4 w-4 mr-2" />
                View Orders
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-200">
              <Link href="/admin/customers">
                <Users className="h-4 w-4 mr-2" />
                Manage Customers
              </Link>
            </Button>
            
            <Button asChild variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-200">
              <Link href="/admin/analytics">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
} 