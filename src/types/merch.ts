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
    name: "Брелок «Солнечный корт»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#FFE600" }],
    sizes: ["One Size"],
  },
  {
    id: 2,
    name: "Брелок «Лисья нора»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#FF6B00" }],
    sizes: ["One Size"],
  },
  {
    id: 3,
    name: "Брелок «Свита короля»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#FF2D9B" }],
    sizes: ["One Size"],
    tag: "ХИТ",
  },
  {
    id: 4,
    name: "Брелок «Дело ласточке»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#00C9A7" }],
    sizes: ["One Size"],
  },
  {
    id: 5,
    name: "Брелок «О чём молчит ласточка»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#00F5FF" }],
    sizes: ["One Size"],
    tag: "НОВИНКА",
  },
  {
    id: 6,
    name: "Брелок «Король воронов»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#7B2FBE" }],
    sizes: ["One Size"],
  },
  {
    id: 7,
    name: "Брелок «Окна во двор»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#2D6BE4" }],
    sizes: ["One Size"],
  },
  {
    id: 8,
    name: "Брелок «Дни нашей жизни»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#FF2D9B" }],
    sizes: ["One Size"],
  },
  {
    id: 9,
    name: "Брелок «Невидимые голоса»",
    price: 200,
    image: "https://cdn.poehali.dev/projects/5bb63d21-3e6e-4772-b867-48475d9b230a/bucket/e383a7fe-9532-49fb-b4ad-0925c9f857e4.jpeg",
    colors: [{ name: "Стандарт", hex: "#F5F5F5" }],
    sizes: ["One Size"],
    tag: "ДРОП",
  },
];