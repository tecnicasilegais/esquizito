import React from 'react';
import LoginCard from 'components/LoginCard/LoginCard';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <LoginCard />
    </div>
  );
}

export default App;
