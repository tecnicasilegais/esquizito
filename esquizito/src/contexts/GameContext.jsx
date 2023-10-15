import React from 'react';

const GameContext = React.createContext({
  gameData: null,
  setGameData: (game) => {},
});

export default GameContext;
