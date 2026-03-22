import Icon from "@/components/ui/icon";
import { CartItem } from "@/types/merch";

interface CartPageProps {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

export default function CartPage({ cart, onRemove, onClear }: CartPageProps) {
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
