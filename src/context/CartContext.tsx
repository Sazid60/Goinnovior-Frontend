"use client";

import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";

export interface CartProduct {
  id: string;
  name: string;
  minPrice: number;
  maxPrice: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};

let cartStore: CartProduct[] = [];

const getCart = (): CartProduct[] => {
  if (typeof window === "undefined") return [];
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
};

const setCart = (cart: CartProduct[]) => {
  if (typeof window === "undefined") return;
  cartStore = cart;
  localStorage.setItem("cart", JSON.stringify(cart));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cart-storage"));
  }
};


if (typeof window !== "undefined") {
  cartStore = getCart();
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cart = useSyncExternalStore(
    (callback) => {
      if (typeof window === "undefined") return () => {};
      window.addEventListener("cart-storage", callback);
      return () => window.removeEventListener("cart-storage", callback);
    },
    () => cartStore, 
    () => [] 
  );

  const addToCart = useCallback(
    (product: CartProduct) => {
      if (cart.some((item) => item.id === product.id)) return;
      const updated = [...cart, product];
      setCart(updated);
    },
    [cart]
  );

  const removeFromCart = useCallback(
    (id: string) => {
      const updated = cart.filter((item) => item.id !== id);
      setCart(updated);
    },
    [cart]
  );

  const isInCart = useCallback(
    (id: string) => {
      return cart.some((item) => item.id === id);
    },
    [cart]
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
