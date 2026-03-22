import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Product, CartItem } from "@/types/merch";

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ ...product, selectedColor: selectedColor.name, selectedSize, qty: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="card-hover bg-card rounded-2xl overflow-hidden neon-border group">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-500 opacity-20 z-10"
          style={{ backgroundColor: selectedColor.hex }}
        />
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tag && (
          <span
            className="absolute top-3 left-3 z-20 px-3 py-1 text-xs font-bold rounded-full"
            style={{
              background:
                product.tag === "НОВИНКА"
                  ? "var(--neon-cyan)"
                  : product.tag === "ДРОП"
                  ? "var(--neon-pink)"
                  : "var(--neon-yellow)",
              color: "#0D0D0D",
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3
          className="text-lg font-bold uppercase tracking-wider text-white mb-1"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold neon-text-yellow">{product.price.toLocaleString("ru-RU")} ₽</span>
        </div>

        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">
            Цвет: <span className="text-white">{selectedColor.name}</span>
          </p>
          <div className="flex gap-2 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color.hex}
                onClick={() => setSelectedColor(color)}
                className="w-7 h-7 rounded-full transition-all duration-200"
                title={color.name}
                style={{
                  backgroundColor: color.hex,
                  border:
                    selectedColor.hex === color.hex
                      ? "2px solid var(--neon-yellow)"
                      : "2px solid transparent",
                  boxShadow:
                    selectedColor.hex === color.hex
                      ? `0 0 10px ${color.hex}80`
                      : "none",
                  outline:
                    color.hex === "#F5F5F5"
                      ? "1px solid rgba(255,255,255,0.2)"
                      : "none",
                  outlineOffset: "2px",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">Размер</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all duration-200 uppercase ${
                  selectedSize === size
                    ? "text-black"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-white"
                }`}
                style={
                  selectedSize === size
                    ? { background: "var(--neon-yellow)", fontFamily: "'Oswald', sans-serif" }
                    : { fontFamily: "'Oswald', sans-serif" }
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="w-full py-3 rounded-xl text-sm btn-neon flex items-center justify-center gap-2"
        >
          {added ? (
            <>
              <Icon name="Check" size={16} /> Добавлено
            </>
          ) : (
            <>
              <Icon name="ShoppingBag" size={16} /> В корзину
            </>
          )}
        </button>
      </div>
    </div>
  );
}
