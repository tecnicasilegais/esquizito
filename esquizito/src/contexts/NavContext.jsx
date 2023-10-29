import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const initialNavContext = {
  gameData: null,
  resultData: null,
  setGameData: (game) => {},
  setResultData: (result) => {},
  setUserResultData: (result) => {},
  userResultData: null,
};

const NavContext = React.createContext(initialNavContext);

export const useNavContext = () => {
  const context = React.useContext(NavContext);

  if (context === initialNavContext) {
    throw new Error('useNavContext was called outside of its Provider');
  }

  return context;
};

export function NavContextProvider({ children }) {
  const [gameData, setGameData] = React.useState(null);
  const [resultData, setResultData] = React.useState(null);
  const [userResultData, setUserResultData] = React.useState(null);

  const contextValue = useMemo(
    () => ({
      gameData,
      resultData,
      setGameData,
      setResultData,
      setUserResultData,
      userResultData,
    }),
    [
      gameData,
      setGameData,
      resultData,
      setResultData,
      userResultData,
      setUserResultData,
    ],
  );

  return (
    <NavContext.Provider value={contextValue}>{children}</NavContext.Provider>
  );
}

NavContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
