import React, { useState, useEffect } from 'react';
import Card from './Card';
import compass from '../assets/compass.png';
import grubsong from '../assets/grubsong.png';
import hiveblood from '../assets/hiveblood.png';
import kingsoul from '../assets/kingsoul.png';
import longnail from '../assets/longnail.png';
import shadow from '../assets/shadow.png';
import shaman from '../assets/shaman.png';
import slash from '../assets/slash.png';
import weaver from '../assets/weaver.png';

function CardContainer({ score }) {
  const images = [
    {
      src: compass,
      id: 'compass',
    },
    {
      src: grubsong,
      id: 'grubsong',
    },
    {
      src: hiveblood,
      id: 'hiveblood',
    },
    {
      src: kingsoul,
      id: 'kingsoul',
    },
    {
      src: longnail,
      id: 'longnail',
    },
    {
      src: shadow,
      id: 'shadow',
    },
    {
      src: shaman,
      id: 'shaman',
    },
    {
      src: slash,
      id: 'slash',
    },
    {
      src: weaver,
      id: 'weaver',
    },
  ];

  const [cards, setCards] = useState(images);

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * i);
      [newCards[randomIdx], newCards[i]] = [newCards[i], newCards[randomIdx]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setCards(newCards);
  }, [score]);

  return (
    <main className='card-container'>
      {cards.map((card) => (
        <Card card={card} key={card.id}></Card>
      ))}
    </main>
  );
}

export default CardContainer;
