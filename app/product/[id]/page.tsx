"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Share2, MapPin, Calendar, Phone } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [showPhone, setShowPhone] = useState(false)

  // This would normally come from an API
  const product = {
    id: params.id,
    title: "iPhone 12 Pro Max",
    price: "$899",
    location: "New York, NY",
    description:
      "Perfect condition, comes with original box and accessories. Battery health at 89%. No scratches or dents. AppleCare+ until December 2023. Selling because upgrading to newer model.",
    seller: "John Doe",
    posted: "2 days ago",
    phone: "+1 234 567 8900",
    images: Array(4).fill("/placeholder.svg?height=600&width=600"),
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image Gallery */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/3] mb-4">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 
                  ${selectedImage === image ? "border-primary" : "border-transparent"}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold">{product.price}</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <h2 className="text-xl mb-4">{product.title}</h2>
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <MapPin className="w-4 h-4" />
              {product.location}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Seller Information</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full" />
              <div>
                <p className="font-medium">{product.seller}</p>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Member since Jan 2023</span>
                </div>
              </div>
            </div>
            <Button className="w-full mb-2" onClick={() => setShowPhone(!showPhone)}>
              <Phone className="w-4 h-4 mr-2" />
              {showPhone ? product.phone : "Show Phone Number"}
            </Button>
            <Button variant="outline" className="w-full">
              Chat with Seller
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

