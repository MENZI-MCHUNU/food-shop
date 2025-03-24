import React from "react";

function Button({ label }) {
  return (
    <button className="flex justify-center items-center px-7 py-4 border text-lg leading-none bg-green-500 text-white border-green-500 rounded-full">
      {label}
    </button>
  );
}

export default Button;
