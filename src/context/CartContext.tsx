import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  name: string;
  price: number;
  emoji: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: {
    name: string;
    price: number;
    emoji: string;
  }) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeFromCart: (name: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: {
    name: string;
    price: number;
    emoji: string;
  }) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        { ...product, quantity: 1 },
      ];
    });
  };

  const increaseQuantity = (name: string) => {
    setCartItems((items) =>
      items.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (name: string) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name: string) => {
    setCartItems((items) =>
      items.filter((item) => item.name !== name)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
