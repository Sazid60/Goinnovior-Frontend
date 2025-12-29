"use client";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const CartCount = () => {
  const { cart } = useCart();

  return (
    <div className="relative" suppressHydrationWarning>
      <ShoppingCart
        size={20}
        className="group-hover:text-orange-600 transition-colors"
      />
      {cart.length > 0 && (
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full text-[10px] font-bold flex items-center justify-center">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartCount;
