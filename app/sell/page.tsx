"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImagePlus, X } from "lucide-react"

export default function SellPage() {
  const router = useRouter()
  const [images, setImages] = useState<string[]>([])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    router.push("/")
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Post Your Ad</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Images */}
        <div className="space-y-4">
          <Label>Photos</Label>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Upload ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {images.length < 8 && (
              <div className="aspect-square relative">
                <Label
                  htmlFor="images"
                  className="h-full flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary"
                >
                  <ImagePlus className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Add Photo</span>
                </Label>
                <Input
                  id="images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="vehicles">Vehicles</SelectItem>
              <SelectItem value="property">Property</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="What are you selling?" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe your item in detail" rows={6} />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2">$</span>
            <Input id="price" type="number" className="pl-7" placeholder="0.00" />
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Enter your location" />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Post Ad
        </Button>
      </form>
    </main>
  )
}

