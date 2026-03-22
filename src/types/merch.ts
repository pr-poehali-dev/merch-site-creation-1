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
