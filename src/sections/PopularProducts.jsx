import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

function PopularProducts() {
  return (
    <section id="products" className="max-w-[1440px] m-auto max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold text-green-600">
          Our Popular Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-600">
          We buy food based on taste, quality, nutritional value and price.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <div key={index}>
            <PopularProductCard key={product.name} {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
