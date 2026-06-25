import React from "react";
import {Link} from "react-router-dom"
import Card from './Card.jsx'
import bgvideo from '../assets/marvel.mp4';
const Herosection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div>
        <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={bgvideo} type="video/mp4" />
              </video>
      </div>
      <div>
        <section>
          <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen w-2xl ml-100 text-5xl text-yellow-500">
            <h1 className="font-extrabold">WELCOME TO THE MARVEL UNIVERSE</h1>
            <p className="text-xl font-bold mt-4 text-yellow-600/80 max-w-2xl">
              Where legends rise, battles shape destiny, and heroes protect the
              impossible.
            </p>
            <button className="mt-8 px-8 py-3 text-xl font-bold uppercase tracking-widest text-white bg-red-600 rounded-md shadow-lg shadow-red-600/50 hover:bg-red-700 hover:shadow-red-500/80 transition-all duration-300 ease-in-out transform hover:scale-105">
               <Link to = "/Card">Assemble</Link>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Herosection;
