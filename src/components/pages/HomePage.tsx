import { Page, PRODUCTS } from "@/types/merch";
import ProductCard from "@/components/ProductCard";

interface HomePageProps {
  onNavigate: (p: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="gradient-hero min-h-screen">
      <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--neon-yellow)" }}
          />
          <div
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
            style={{ background: "var(--neon-pink)" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl"
            style={{ background: "var(--neon-cyan)" }}
          />
        </div>

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in-up">
            Новая коллекция — весна 2026
          </p>
          <h1
            className="text-6xl md:text-9xl font-black uppercase leading-none mb-4 animate-fade-in-up delay-100"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-0.02em" }}
          >
            <span className="neon-text-yellow">DRIP</span>
            <br />
            <span className="text-white">STORE</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-10 animate-fade-in-up delay-200"
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            Мерч для тех, кто не боится выделяться. Лимитированные дропы. Яркие цвета.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up delay-300">
            <button
              className="btn-neon px-10 py-4 rounded-xl text-base"
              onClick={() => onNavigate("catalog")}
            >
              Смотреть каталог
            </button>
            <button
              className="btn-outline-neon px-10 py-4 rounded-xl text-base"
              onClick={() => onNavigate("about")}
            >
              О нас
            </button>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-card border-y border-border py-4 mb-16">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(8)
            .fill("✦ НОВЫЙ ДРОП ✦ ЛЕТНЯЯ КОЛЛЕКЦИЯ ✦ БЕСПЛАТНАЯ ДОСТАВКА ОТ 5000₽ ✦ ВОЗВРАТ 30 ДНЕЙ ✦ ЭКСКЛЮЗИВНЫЙ МЕРЧ ")
            .map((text, i) => (
              <span
                key={i}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Популярное</p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Хиты продаж
            </h2>
          </div>
          <button
            className="btn-outline-neon px-6 py-3 rounded-xl text-sm hidden md:block"
            onClick={() => onNavigate("catalog")}
          >
            Все товары →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 3).map((p, i) => (
            <div key={p.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={p} onAddToCart={() => {}} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
