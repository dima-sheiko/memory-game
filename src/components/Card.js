import React, { useContext } from 'react';
import { GameLogicContext } from './Game';

function Card({card}) {

  const handleGameLogic = useContext(GameLogicContext);

  return (
    <div className='card'>
      <img className='card-img' src={card.src} alt={card.id} onClick={() => handleGameLogic(card.id)} />
    </div>
  );
}

export default Card;
