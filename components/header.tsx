"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Plus, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "All Categories",
    "Electronics",
    "Vehicles",
    "Property",
    "Fashion",
    "Home & Garden",
    "Sports",
    "Toys & Games",
    "Books",
    "Music",
  ]

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#483c32] px-4 py-3">
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500" />
            <span className="text-white text-xl font-medium hidden sm:inline">PICT'o Sell</span>
          </Link>

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

          <div className="flex items-center gap-2">
            <Link href="/messages">
              <Button variant="ghost" className="text-white hidden sm:flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                <span className="hidden lg:inline">Messages</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" className="text-white hidden sm:flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden lg:inline">Cart</span>
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="ghost" className="text-white hidden sm:flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="hidden lg:inline">Login</span>
              </Button>
            </Link>
            <Link href="/sell">
              <Button className="bg-white text-[#483c32] hover:bg-gray-100 hidden sm:flex items-center gap-2">
                <Plus className="w-5 h-5" />
                <span className="hidden lg:inline">Sell</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="border-b overflow-hidden">
        <div className="max-w-full mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-4 w-max">
            {categories.map((category, index) => (
              <Button key={index} variant="outline" className="whitespace-nowrap rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

