import React, { useState } from "react";
import {
  vegetable1,
  vegetable2,
  vegetable3,
  vegetable4,
  vegetable5,
} from "../assets/images";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

function Slider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <div className="w-full h-full relative">
      <img
        src={imageUrls[imageIndex]}
        className="object-cover w-full h-full block"
      />

      <button
        onClick={showPreviousImage}
        className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0 hover:bg-lime-200 transition delay-75 duration-150 ease-in-out"
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0 hover:bg-lime-200 transition delay-75 duration-150 ease-in-out"
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default Slider;
