import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LogoCard from 'components/LogoCard/LogoCard';
import LoginStack from 'components/LoginStack/LoginStack';
import MenuOptions from 'components/MenuOptions/MenuOptions';

function MainMenu() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    console.log(user); // shows email, name, etc
    console.log(user.mongo_user_id); // mongo user id should be set as you sign up
    console.log(user.sub); // auth0 user id
  }

  return (
    <LogoCard>
      {!isAuthenticated && <LoginStack />}
      {isAuthenticated && <MenuOptions />}
    </LogoCard>
  );
}

export default MainMenu;
