import React, { useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import Modal from './Modal';

export const GameLogicContext = React.createContext();

function Game() {
  const [score, setScore] = useState(0);
  const [cardsArray, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleCard = (cardName) => {
    addCard((prevCard) => [...prevCard, cardName]);
  };

  const reset = () => {
    setScore(0);
    addCard([]);
  };

  const handleGameLogic = (cardName) => {
    if (!cardsArray.includes(cardName)) {
      handleCard(cardName);
      handleScore();
    } else {
      reset();
    }
  };

  return (
    <div className='app'>
      <Header score={score}></Header>
      <GameLogicContext.Provider value={handleGameLogic}>
        <CardContainer score={score}></CardContainer>
      </GameLogicContext.Provider> 
      {score === 9 ? <Modal reset={reset}></Modal> : null}
    </div>
  );
}

export default Game;
