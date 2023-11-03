import { useState } from 'react';
import Crypto from '../components/card.js';

export default function myTokens() {
//   const [selectedCards, setSelectedCards] = useState([]);

//   adds a card to the list
//   const handleCardClick = (cardData) => {
//     setSelectedCards([...selectedCards, cardData]);
//   };

  return (
    <div>
    <div>
      <h1>My Tokens</h1>
      <ul>
        {myTokens.map((token, index) => (
          <li key={index}>{token.name}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}