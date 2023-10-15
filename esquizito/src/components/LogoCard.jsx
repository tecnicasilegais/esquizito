import { Card, CardOverflow } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';
import logo from 'assets/logo.png';
import styles from './LogoCard.module.scss';

function LogoCard({ children }) {
  return (
    <Card className={styles.loginCard} sx={{ borderRadius: 36 }}>
      <CardOverflow>
        <img alt='EsQUIZito logo' loading='lazy' src={logo} />
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
