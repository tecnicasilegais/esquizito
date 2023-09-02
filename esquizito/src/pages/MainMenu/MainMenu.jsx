import LoginStack from 'components/LoginStack/LoginStack';
import LogoCard from 'components/LogoCard/LogoCard';
import MenuOptions from 'components/MenuOptions/MenuOptions';
import { useUser } from 'contexts/UserContext';
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
