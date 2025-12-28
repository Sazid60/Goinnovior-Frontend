"use client";

import ProductCard from "./ProductCard";


import { ProductType } from "@/types/product.interface";


const FeaturedProducts = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="py-4 md:py-16 bg-white mb-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start mb-10 gap-3">
          <div>
            <h2 className="text-black text-3xl md:text-4xl font-bold font-['Urbanist']">
              Our Apparels
            </h2>
          </div>
          <button className="text-black text-sm font-medium underline underline-offset-4 hover:text-teal-600 transition-colors">
            See All Products
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500 py-10">No product data found</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;