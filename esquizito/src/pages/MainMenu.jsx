import { useUser } from 'contexts/UserContext';
import LoginStack from 'components/LoginStack';
import LogoCard from 'components/LogoCard';
import MenuOptions from 'components/MenuOptions';
import React from 'react';

function MainMenu() {
  const { isAuthenticated } = useUser();

  return (
    <LogoCard>
      {!isAuthenticated && <LoginStack />}
      {isAuthenticated && <MenuOptions />}
    </LogoCard>
  );
}

export default MainMenu;
