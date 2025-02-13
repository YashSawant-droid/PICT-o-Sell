"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trash2 } from "lucide-react"

type CartItem = {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, title: "iPhone 12 Pro Max", price: 899, quantity: 1, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, title: "Mountain Bike", price: 450, quantity: 1, image: "/placeholder.svg?height=200&width=200" },
  ])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <Card className="p-6 text-center text-gray-500">Your cart is empty</Card>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4 p-4">
              <div className="flex items-center">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="ml-4 text-red-500" onClick={() => removeItem(item.id)}>
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          ))}
          <div className="mt-6 text-right">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Button className="mt-4">Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  )
}

