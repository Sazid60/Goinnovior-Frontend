"use client";
import { useCart } from "@/context/CartContext";
import CartPageCard from "@/components/modules/Home/CartPageCard";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-8" suppressHydrationWarning>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
            {cart.map((product) => (
              <CartPageCard
                key={product.id}
                product={product}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
