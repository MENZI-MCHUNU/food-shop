import React from "react";
import { star } from "../assets/icons";

function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl leading-normal text-slate-700">(4.8)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold">{name}</h3>
      <p className="mt-2 font-bold text-gray-400 text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
}

export default PopularProductCard;
