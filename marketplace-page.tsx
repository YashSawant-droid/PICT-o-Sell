"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"]

  const products = Array(6).fill({
    title: "Title",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    image: "/placeholder.svg?height=200&width=200",
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#483c32] px-4 py-3">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500" />
            <span className="text-white text-xl font-medium hidden sm:inline">PICT'o Sell</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-xl relative">
            <Input
              type="search"
              placeholder="Search Products"
              className="w-full pl-10 pr-4 py-2 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white">
              <ShoppingCart className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="text-white hidden sm:flex items-center gap-2">
              <User className="w-5 h-5" />
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-4">
            {categories.map((category, index) => (
              <Button key={index} variant="outline" className="whitespace-nowrap rounded-full">
                {category}
              </Button>
            ))}
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Heading</h1>
          <p className="text-gray-600">Subheading</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center">
          <Button variant="outline" className="px-8">
            Load More
          </Button>
        </div>
      </main>
    </div>
  )
}

