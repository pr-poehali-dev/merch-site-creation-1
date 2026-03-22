export type Page = "home" | "catalog" | "cart" | "about";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  tag?: string;
}

export interface CartItem extends Product {
  selectedColor: string;
  selectedSize: string;
  qty: number;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Брелок CHARM",
    price: 690,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/c5432625-66d7-4aaa-819c-964985d808a1.jpg",
    colors: [
      { name: "Розовый", hex: "#FF2D9B" },
      { name: "Жёлтый", hex: "#FFE600" },
      { name: "Голубой", hex: "#00F5FF" },
      { name: "Белый", hex: "#F5F5F5" },
    ],
    sizes: ["One Size"],
    tag: "ХИТ",
  },
  {
    id: 2,
    name: "Браслет NEON",
    price: 890,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/a955f113-ee02-4b8f-8b66-66e9172bc208.jpg",
    colors: [
      { name: "Жёлтый", hex: "#FFE600" },
      { name: "Розовый", hex: "#FF2D9B" },
      { name: "Зелёный", hex: "#00FF87" },
      { name: "Чёрный", hex: "#0D0D0D" },
    ],
    sizes: ["S", "M", "L"],
    tag: "НОВИНКА",
  },
  {
    id: 3,
    name: "Набор DRIP SET",
    price: 1490,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/files/62ea1d41-b693-4f68-b049-e9dc44102de0.jpg",
    colors: [
      { name: "Микс", hex: "#FFE600" },
      { name: "Тёмный", hex: "#0D0D0D" },
    ],
    sizes: ["One Size"],
    tag: "ДРОП",
  },
];