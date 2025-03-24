import React, { useState } from "react";
import Button from "../components/Button";
import { strawberry } from "../assets/images";

function Details() {
  const [fruitImage, setFruitImage] = useState(strawberry);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-7xl m-auto"
    >
      {/*<div className="mt-8 h-52 w-52 bg-orange-400"></div>
      <div className="mt-8 h-52 w-52 bg-green-600"></div>*/}
      <div className="flex justify-between gap-16">
        <div className="flex-col">
          <p className="mt-10 text-xl text-green-600 font-bold">
            Your one stop nutrient dense food shop.
          </p>

          <h1 className="relative mt-10 text-4xl max-sm:text-7xl max-sm:leading-80 font-bold text-green-900">
            Your health is your wealth, Eat Healthy and live good.
          </h1>

          <p className=" mt-10 text-slate-600 text-lg leading-8 mb-14 sm:max-w-sm">
            We offer you flesh produce from our local farmers,healthy,
            nutrient-dense and chemical free fruits and vegetables.
          </p>
          <Button label="shop now" />
        </div>
        <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-white bg-cover bg-center ">
          <img
            src={strawberry}
            alt="fruit collection"
            width={750}
            height={550}
            className="object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Details;
