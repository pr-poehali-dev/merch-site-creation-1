import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "catalog" | "cart" | "about";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  tag?: string;
}

interface CartItem extends Product {
  selectedColor: string;
  selectedSize: string;
  qty: number;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Худи OVERSIZE",
    price: 4990,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/bcf128ee-527c-41f2-926d-6f5cff0f2f7b.jpg",
    colors: [
      { name: "Чёрный", hex: "#0D0D0D" },
      { name: "Жёлтый", hex: "#FFE600" },
      { name: "Розовый", hex: "#FF2D9B" },
      { name: "Белый", hex: "#F5F5F5" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    tag: "ХИТ",
  },
  {
    id: 2,
    name: "Футболка GRAPHIC",
    price: 2490,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/3b868fa2-bac7-48a7-a997-a0a085eb1759.jpg",
    colors: [
      { name: "Белый", hex: "#F5F5F5" },
      { name: "Чёрный", hex: "#0D0D0D" },
      { name: "Голубой", hex: "#00F5FF" },
      { name: "Зелёный", hex: "#00FF87" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    tag: "НОВИНКА",
  },
  {
    id: 3,
    name: "Кепка LOGO",
    price: 1990,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/d114f314-13e7-4229-80e5-8f55a01fd40c.jpg",
    colors: [
      { name: "Чёрный", hex: "#0D0D0D" },
      { name: "Бежевый", hex: "#C8B89A" },
      { name: "Жёлтый", hex: "#FFE600" },
    ],
    sizes: ["One Size"],
  },
  {
    id: 4,
    name: "Лонгслив DROP",
    price: 3290,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/bcf128ee-527c-41f2-926d-6f5cff0f2f7b.jpg",
    colors: [
      { name: "Чёрный", hex: "#0D0D0D" },
      { name: "Розовый", hex: "#FF2D9B" },
      { name: "Белый", hex: "#F5F5F5" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tag: "ДРОП",
  },
];

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (item: CartItem) => void }) {
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

function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
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

function CatalogPage({ onAddToCart }: { onAddToCart: (item: CartItem) => void }) {
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

function CartPage({
  cart,
  onRemove,
  onClear,
}: {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onClear: () => void;
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
        <div className="text-8xl mb-6">🛒</div>
        <h2
          className="text-4xl font-black uppercase text-white mb-3"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Корзина пуста
        </h2>
        <p className="text-muted-foreground mb-8">Добавьте что-нибудь из каталога</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Оформление</p>
      <h1
        className="text-5xl font-black uppercase text-white mb-10"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        Ваша <span className="neon-text-yellow">корзина</span>
      </h1>

      <div className="space-y-4 mb-8">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
            className="bg-card rounded-2xl p-5 neon-border flex gap-5 items-center"
          >
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
            <div className="flex-1">
              <h3
                className="font-bold uppercase text-white"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "1.1rem" }}
              >
                {item.name}
              </h3>
              <div className="flex gap-3 mt-1">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{
                      background: item.colors.find((c) => c.name === item.selectedColor)?.hex,
                    }}
                  />
                  {item.selectedColor}
                </span>
                <span className="text-xs text-muted-foreground">Размер: {item.selectedSize}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold neon-text-yellow">{item.price.toLocaleString("ru-RU")} ₽</p>
              <button
                onClick={() => onRemove(item.id)}
                className="text-xs text-muted-foreground hover:text-destructive mt-1 transition-colors"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-6 neon-border">
        <div className="flex justify-between items-center mb-6">
          <span className="text-muted-foreground uppercase tracking-wider text-sm">Итого</span>
          <span
            className="text-3xl font-black neon-text-yellow"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {total.toLocaleString("ru-RU")} ₽
          </span>
        </div>
        <button className="w-full py-4 rounded-xl text-base btn-neon flex items-center justify-center gap-2">
          <Icon name="CreditCard" size={18} /> Оформить заказ
        </button>
        <button onClick={onClear} className="w-full mt-3 py-3 rounded-xl text-sm btn-outline-neon">
          Очистить корзину
        </button>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">История</p>
      <h1
        className="text-5xl font-black uppercase text-white mb-6"
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        О нас
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <p
            className="text-muted-foreground text-lg leading-relaxed mb-6"
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            <span className="neon-text-yellow font-bold">DRIP STORE</span> — это не просто мерч. Это манифест. Мы
            создаём вещи для тех, кто отказывается быть невидимым.
          </p>
          <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Rubik', sans-serif" }}>
            Каждый дроп — это ограниченная серия. Каждый принт — коллаборация с независимыми художниками. Мы против
            масс-маркета. Мы за настоящее.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { icon: "Zap", title: "Лимитированные дропы", desc: "Только ограниченные серии. Никакого масс-маркета." },
            { icon: "Palette", title: "Авторские принты", desc: "Каждый дизайн — работа независимого художника." },
            { icon: "Truck", title: "Быстрая доставка", desc: "Отправляем в течение 24 часов. По всей России." },
            { icon: "RefreshCw", title: "Возврат 30 дней", desc: "Не подошло? Вернём без вопросов." },
          ].map((item) => (
            <div key={item.icon} className="bg-card rounded-xl p-4 neon-border flex gap-4 items-start card-hover">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(255,230,0,0.1)" }}
              >
                <Icon name={item.icon as any} size={20} className="neon-text-yellow" />
              </div>
              <div>
                <h4
                  className="font-bold uppercase text-white text-sm mb-1"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { num: "500+", label: "Довольных клиентов" },
          { num: "12", label: "Дропов выпущено" },
          { num: "30", label: "Художников-партнёров" },
          { num: "100%", label: "Уникальных принтов" },
        ].map((stat) => (
          <div key={stat.num} className="bg-card rounded-2xl p-6 neon-border text-center">
            <p
              className="text-4xl font-black neon-text-yellow mb-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {stat.num}
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find(
        (c) => c.id === item.id && c.selectedColor === item.selectedColor && c.selectedSize === item.selectedSize
      );
      if (exists)
        return prev.map((c) =>
          c.id === item.id && c.selectedColor === item.selectedColor && c.selectedSize === item.selectedSize
            ? { ...c, qty: c.qty + 1 }
            : c
        );
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((c) => c.id !== id));

  const navLinks: { id: Page; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "catalog", label: "Каталог" },
    { id: "cart", label: "Корзина" },
    { id: "about", label: "О нас" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="text-2xl font-black uppercase tracking-tight neon-text-yellow"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            DRIP<span className="text-white">STORE</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
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
            <button className="md:hidden relative" onClick={() => setPage("cart")}>
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
                  setPage(link.id);
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

      <main>
        {page === "home" && <HomePage onNavigate={setPage} />}
        {page === "catalog" && <CatalogPage onAddToCart={addToCart} />}
        {page === "cart" && <CartPage cart={cart} onRemove={removeFromCart} onClear={() => setCart([])} />}
        {page === "about" && <AboutPage />}
      </main>

      <footer className="border-t border-border py-8 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-2xl font-black neon-text-yellow" style={{ fontFamily: "'Oswald', sans-serif" }}>
            DRIPSTORE
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">© 2026 · Мерч для смелых</p>
          <div className="flex gap-6">
            {["Instagram", "Telegram", "VK"].map((s) => (
              <button
                key={s}
                className="text-xs text-muted-foreground hover:text-white transition-colors uppercase tracking-wider"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
