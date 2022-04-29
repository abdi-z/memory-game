import "./App.css";
import React from "react";

const cardImages = [
  { src: "/img/cover.png", id: 0 },
  { src: "/img/helmet-1.png", id: 1 },
  { src: "/img/potion-1.png", id: 2 },
  { src: "/img/ring-1.png", id: 3 },
  { src: "/img/shield-1.png", id: 4 },
  { src: "/img/sword-1.png", id: 5 },
  { src: "/img/scroll-1.png", id: 6 },
];

function App() {
  
  const [cards,setCards] = React.useState([])

  const shuffleCards =() => {
    const shuffledCards =[...cardImages, ...cardImages]
    .sort(()=>Math.random()-0.5)
    .map((card)=>({...card, id:Math.random()}))

    setCards(shuffledCards)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
      <div className="cards">

        </div>

    </div>
  );
}

export default App;
