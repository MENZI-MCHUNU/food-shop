import React from "react";
import Button from "../components/Button";
import { fruitsandvegetables } from "../assets/images";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-w-7xl m-auto"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold lg:max-w-lg">
          We provide you
          <span className="text-green-800"> Super </span>
          <span className="text-green-800">Quality</span> food
        </h2>
        <p className="mt-4 lg:max-w-lg text-slate-700 text-lg leading-7">
          Our suppliers are small holder farmers in South Africa, with honest,
          old fashioned, organic and biodynamic principles and ethos. Creating
          permanent good jobs in South Africa for South Africans on farms, at
          producers and in the retail and logistics link, is just one of the
          reasons why we aid these local agriculturists.
        </p>
        <p className="mt-6 lg:max-w-lg text-slate-700 text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={fruitsandvegetables}
          alt="fruitsandvegetables"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality;
