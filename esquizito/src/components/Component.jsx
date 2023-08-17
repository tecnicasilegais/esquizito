import React from 'react';
import styles from './Component.module.scss';

function Component() {
  return (
    <div>
      <header>
        <p className={styles.testClass}>No need to reload, this is working.</p>
      </header>
    </div>
  );
}

export default Component;
