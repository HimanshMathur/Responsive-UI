import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <h1 className="text-3xl font-extrabold tracking-widest">
            <span className="text-red-600">IRON</span>
            <span className="text-white">VERSE</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-white font-medium">
            <li className="cursor-pointer hover:text-red-500 transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-red-500 transition">
              Avengers
            </li>
            <li className="cursor-pointer hover:text-red-500 transition">
              Heroes
            </li>
            <li className="cursor-pointer hover:text-red-500 transition">
              Timeline
            </li>
            <li className="cursor-pointer hover:text-red-500 transition">
              Multiverse
            </li>
          </ul>

          {/* Button */}
          <button
            className="
              hidden md:block
              px-6 py-2
              bg-red-600
              text-white
              rounded-md
              font-semibold
              shadow-[0_0_20px_rgba(220,38,38,0.6)]
              hover:shadow-[0_0_35px_rgba(220,38,38,1)]
              hover:bg-red-700
              transition-all
            "
          >
            Assemble
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-6 py-8 text-white text-lg">
            <li>Home</li>
            <li>Avengers</li>
            <li>Heroes</li>
            <li>Timeline</li>
            <li>Multiverse</li>

            <button
              className="
                px-6 py-2
                bg-red-600
                rounded-md
                shadow-[0_0_20px_rgba(220,38,38,0.6)]
              "
            >
              Assemble
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;