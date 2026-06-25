import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Herosection from './components/herosection.jsx';
import bgvideo from './assets/marvel.mp4';
import Card from './components/Card.jsx'
import ironman from "./assets/ironman.jpg";
import captainamerica from "./assets/captain.jpg";
import thor from "./assets/thor.jpg";
const App = () => {
  const avengers = [
  {
    id: 1,
    image: ironman,
    name: "Iron Man",
    famousQuote: "I am Iron Man."
  },
  {
    id: 2,
    image: captainamerica,
    name: "Captain America",
    famousQuote: "Avengers... Assemble!"
  },
  {
    id: 3,
    image: thor,
    name: "Thor",
    famousQuote: "Bring me Thanos!"
  }
];
  return (
    <div className="relative h-screen w-full">
      <div className = "relative z-10">
        <BrowserRouter>
           <Navbar/>
           <Routes>
            <Route path = "/" element = {<Herosection/>}/>
            <Route path = "/card" element = {
               <div className="flex flex-wrap justify-center gap-8">
            {avengers.map((hero)=>{
              return (<Card
               key = {hero.id}
               name = {hero.name}
               image = {hero.image}
               famousQuote = {hero.famousQuote}
              />);
            })}</div>
            }
          />
           </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
};

export default App;