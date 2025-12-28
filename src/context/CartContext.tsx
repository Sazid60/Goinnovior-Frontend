"use client";

import { createContext, useContext, useState, useCallback } from "react";

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
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCartState] = useState<CartProduct[]>(getCart());

    const addToCart = useCallback((product: CartProduct) => {
        setCartState((prev) => {
            if (prev.some((item) => item.id === product.id)) return prev;
            const updated = [...prev, product];
            setCart(updated);
            return updated;
        });
    }, []);

    const removeFromCart = useCallback((id: string) => {
        setCartState((prev) => {
            const updated = prev.filter((item) => item.id !== id);
            setCart(updated);
            return updated;
        });
    }, []);

    const isInCart = useCallback((id: string) => {
        return cart.some((item) => item.id === id);
    }, [cart]);

    const clearCart = useCallback(() => {
        setCartState([]);
        setCart([]);
    }, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
