import React from "react";
import ironman from "../assets/ironman.jpg";
import wallpaper2 from "../assets/wallpaper2.jpg";

const Card = () => {
  return (
    <div
      className="h-200 w-200 bg-cover bg-center flex flex-wrap  rounded-3xl"
      style={{ backgroundImage: `url(${wallpaper2})` }}
    >
      <div
        className="h-100 w-100 flex flex-wrap ml-50 mt-30 bg-cover bg-center rounded-3xl border border-gray-300 shadow-xl"
        style={{ backgroundImage: `url(${ironman})` }}
      ></div>
    </div>
  );
};

export default Card;
