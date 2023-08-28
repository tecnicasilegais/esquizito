import { useAuth0 } from '@auth0/auth0-react';
import LoginStack from 'components/LoginStack/LoginStack';
import LogoCard from 'components/LogoCard/LogoCard';
import MenuOptions from 'components/MenuOptions/MenuOptions';
import React from 'react';

function MainMenu() {
  const { isAuthenticated, user } = useAuth0();
  // TODO: this will later be used to register to the API if mongo_user_id is undefined
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
