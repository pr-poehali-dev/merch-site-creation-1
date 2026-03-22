import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Page, CartItem } from "@/types/merch";

interface NavbarProps {
  page: Page;
  cart: CartItem[];
  onNavigate: (p: Page) => void;
}

const navLinks: { id: Page; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "cart", label: "Корзина" },
  { id: "about", label: "О нас" },
];

export default function Navbar({ page, cart, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="text-2xl font-black uppercase tracking-tight neon-text-yellow"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          DRIP<span className="text-white">STORE</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm uppercase tracking-widest font-bold transition-all duration-200 ${
                page === link.id ? "neon-text-yellow" : "text-muted-foreground hover:text-white"
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {link.id === "cart" ? (
                <span className="flex items-center gap-2">
                  {link.label}
                  {cart.length > 0 && (
                    <span
                      className="text-xs w-5 h-5 rounded-full flex items-center justify-center text-black font-bold"
                      style={{ background: "var(--neon-yellow)" }}
                    >
                      {cart.length}
                    </span>
                  )}
                </span>
              ) : (
                link.label
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="md:hidden relative" onClick={() => onNavigate("cart")}>
            <Icon
              name="ShoppingBag"
              size={22}
              className={cart.length > 0 ? "neon-text-yellow" : "text-muted-foreground"}
            />
            {cart.length > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-black font-bold"
                style={{ background: "var(--neon-yellow)", fontSize: "9px" }}
              >
                {cart.length}
              </span>
            )}
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-white" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-3 animate-fade-in-up">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setMenuOpen(false);
              }}
              className={`text-left text-sm uppercase tracking-widest font-bold py-2 ${
                page === link.id ? "neon-text-yellow" : "text-muted-foreground"
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
