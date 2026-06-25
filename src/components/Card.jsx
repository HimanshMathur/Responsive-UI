import React from "react";
import ironman from "../assets/ironman.jpg";
import wallpaper2 from "../assets/wallpaper2.jpg";

const Card = ({ name, image, famousQuote }) => {
  return (
    <div
      className="w-[360px] h-[520px] rounded-3xl overflow-hidden
      bg-cover bg-center border border-yellow-500/30
      shadow-2xl hover:scale-105 hover:shadow-yellow-500/40
      transition-all duration-300 mt-30"
      style={{ backgroundImage: `url(${wallpaper2})` }}
    >
      {/* Dark Overlay */}
      <div className="w-full h-full bg-black/55 flex flex-col items-center p-8">
        
        {/* Hero Image */}
        <img
          src={image}
          alt={name}
          className="w-52 h-52 rounded-full object-cover
          border-4 border-yellow-500 shadow-lg shadow-yellow-500/40"
        />

        {/* Name */}
        <h1 className="mt-8 text-4xl font-extrabold text-yellow-400 tracking-wide">
          {name}
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-yellow-500 rounded-full my-5"></div>

        {/* Quote */}
        <p className="text-center text-gray-200 italic text-lg leading-8 px-4">
          "{famousQuote}"
        </p>

        {/* Button */}
        <button
          className="mt-auto px-6 py-3 rounded-full
          bg-yellow-500 text-black font-bold
          hover:bg-yellow-400 transition"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};
export default Card;
