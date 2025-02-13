import ProductGrid from "@/components/product-grid"

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Fresh Recommendations</h1>
        <p className="text-gray-600">Find great deals near you</p>
      </div>

      <ProductGrid />
    </main>
  )
}

