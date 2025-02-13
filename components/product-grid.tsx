"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "iPhone 12 Pro Max",
    price: "$899",
    location: "New York, NY",
    description: "Perfect condition, comes with original box and accessories. Battery health at 89%.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    title: "Mountain Bike",
    price: "$450",
    location: "Brooklyn, NY",
    description: "Trek mountain bike, barely used. Perfect for trails and city riding.",
    image: "/placeholder.svg?height=200&width=200",
  },
  // Add more sample products...
]

export default function ProductGrid() {
  const [products] = useState(SAMPLE_PRODUCTS)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="border rounded-lg hover:shadow-lg transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.price}</h2>
                <h3 className="text-gray-900 mb-1">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.location}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" className="px-8">
          Load More
        </Button>
      </div>
    </>
  )
}

