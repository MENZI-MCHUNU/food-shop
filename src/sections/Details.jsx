import React from "react";

function Details() {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-w-7xl m-auto"
    >
      <div>
        <p className="text-2xl text-green-600 font-bold">
          Your one stop nutrient dense food shop.
        </p>
        <h1 className="mt-10 text-8xl max-sm:text-7xl max-sm:leading-80 font-bold text-green-900">
          Your health is your wealth, Eat Healthy and live good.
        </h1>
        <p className="mt-10 text-green-500 text-lg leading-8 mb-14 sm:max-w-sm">
          We offer you flesh produce from our local farmers,healthy,
          nutrient-dense and chemical free fruits and vegetables.
        </p>
      </div>
    </section>
  );
}

export default Details;
