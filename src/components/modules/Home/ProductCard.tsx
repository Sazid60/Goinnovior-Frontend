"use client";

import { Heart, Eye, Share2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    maxPrice: number;
    minPrice: number;
    quantity: number;
    image: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleAddToCart = () => {
    if (inCart) {
      toast("Already in cart!");
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      minPrice: product.minPrice,
      maxPrice: product.maxPrice,
      quantity: product.quantity,
      image: product.image,
    });
    toast.success("Added to cart!");
  };

  return (
    <div className="group relative p-3 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 w-full h-fit">
      <div className="relative h-64 group-hover:h-80 w-full bg-gray-100 rounded-lg overflow-hidden transition-[height] duration-500 ease-in-out">
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={false}
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-md hover:bg-orange-600 hover:text-white transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-md hover:bg-orange-600 hover:text-white transition-colors">
            <Eye className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-md hover:bg-orange-600 hover:text-white transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div>
          <h3 className="text-black text-lg font-semibold font-['Urbanist'] truncate">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-black text-xl font-bold font-['Urbanist']">
              ৳ {product.minPrice.toLocaleString()}
            </span>
            <div className="w-4 h-0.5 bg-black opacity-20" />
            <span className="text-black text-xl font-bold font-['Urbanist']">
              ৳ {product.maxPrice.toLocaleString()}
            </span>
          </div>
        </div>
        <div
          className="flex items-center gap-3 w-full"
          suppressHydrationWarning
        >
          <Button
            variant="secondary"
            className="flex-1 bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 border-none rounded h-10 gap-2 text-xs font-medium"
            onClick={handleAddToCart}
            disabled={inCart}
          >
            <ShoppingCart className="w-4 h-4" />
            <span suppressHydrationWarning>
              {inCart ? "Added" : "Add To Cart"}
            </span>
          </Button>
          <Button className="flex-1 bg-teal-500 hover:bg-teal-600 text-white rounded h-10 text-xs font-medium">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
