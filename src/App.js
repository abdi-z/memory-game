import "./App.css";
import React from "react";
import SingleCard from "./components/SingleCard";
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
];

function App() {
  const [win, setWin] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [turns, setTurns] = React.useState(0);
  const [choiceOne, setChoiceOne] = React.useState(null);
  const [choiceTwo, setChoiceTwo] = React.useState(null);
  const [disabled, setDisabled] = React.useState(false);
  const shuffleCards = () => {
    setWin(false);
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };
  //handle a choice

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //compare the two cards

  React.useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        cards.map((item) => {
          if (item.src === choiceOne.src) {
            item.matched = true;
          }
          return item;
        });
        console.log("Cards matched");
        resetTurn();
      } else {
        console.log("Cards not matched");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //start a new game automatically

  React.useEffect(() => {
    shuffleCards();
  }, []);

  const resetTurn = () => {
    setChoiceTwo(null);
    setChoiceOne(null);
    setTurns((prevState) => prevState + 1);
    setDisabled(false);
  };

  //check if won

  React.useEffect(() => {
    for (var i = 0; i < cards.length; i++) {
      if (!cards[i].matched) {
        break;
      } else if (i === cards.length - 1) {
        setWin(true);
      }
    }
  }, [choiceTwo]);

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      {win ? (
        turns <= 12 ? (
          <>
            <h2>Wow! You won with only turns {turns}</h2>
            <a
              href="https://www.linkedin.com/in/abdul-rehman-aziz/"
              target="_none"
              style={{ textDecoration: "none", color: "white" }}>
              Let me know if you enjoyed!
            </a>
            <br />
          </>
        ) : (
          <h3>You won with turns {turns}...You can do better</h3>
        )
      ) : (
        <p></p>
      )}
      <button onClick={shuffleCards}>New Game</button>
      {!win && <p>Turns: {turns}</p>}
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
