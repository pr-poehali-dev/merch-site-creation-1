import { useState } from "react";
import { CartItem, PRODUCTS } from "@/types/merch";
import ProductCard from "@/components/ProductCard";

interface CatalogPageProps {
  onAddToCart: (item: CartItem) => void;
}

export default function CatalogPage({ onAddToCart }: CatalogPageProps) {
  const [filter, setFilter] = useState("Все");
  const categories = ["Все", "Худи", "Футболки", "Аксессуары"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Магазин</p>
        <h1
          className="text-5xl font-black uppercase text-white mb-8"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Каталог <span className="neon-text-yellow">товаров</span>
        </h1>
        <div className="flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all duration-200 ${
                filter === cat ? "btn-neon" : "btn-outline-neon"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map((p, i) => (
          <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <ProductCard product={p} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
