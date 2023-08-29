import React from 'react';
import LogoCard from 'components/LogoCard/LogoCard';
import LoginStack from 'components/LoginStack/LoginStack';
import MenuOptions from 'components/MenuOptions/MenuOptions';
import { useUser } from 'contexts/UserContext';

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
