"use client";

import ProductCard from "./ProductCard";

const fakeProducts = [
  {
    id: "1",
    name: "Woman Apparel",
    description: "Premium cotton blend",
    minPrice: 1000,
    maxPrice: 100000,
    quantity: 10,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Man Apparel",
    description: "Stylish winter wear",
    minPrice: 1000,
    maxPrice: 100000,
    quantity: 5,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Sports Wear",
    description: "Breathable athletic gear",
    minPrice: 1500,
    maxPrice: 10000,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Nightwear",
    description: "Soft silk pajamas",
    minPrice: 1000,
    maxPrice: 10000,
    quantity: 15,
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc?q=80&w=1000&auto=format&fit=crop",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-4 md:py-16 bg-white mb-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-[120px]">
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
          {fakeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;