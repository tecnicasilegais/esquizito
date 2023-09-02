import { Card, CardOverflow } from '@mui/joy';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './LogoCard.module.scss';

function LogoCard({ children }) {
  return (
    <Card className={styles.loginCard} sx={{ borderRadius: 36 }}>
      <CardOverflow>
        <img src={logo} alt='EsQUIZito logo' loading='lazy' />
      </CardOverflow>
      {children}
    </Card>
  );
}

LogoCard.propTypes = {
  children: PropTypes.node,
};
LogoCard.defaultProps = {
  children: null,
};

export default LogoCard;
