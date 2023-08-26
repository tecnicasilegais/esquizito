import { Card, CardOverflow } from '@mui/joy';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './LogoCard.module.scss';

function LogoCard({ children, alignCenter }) {
  return (
    <Card
      className={`${styles.loginCard} ${
        alignCenter ? styles.centerAligned : ''
      }`}>
      <CardOverflow>
        <img src={logo} alt='EsQUIZito logo' loading='lazy' />
      </CardOverflow>
      {children}
    </Card>
  );
}

LogoCard.propTypes = {
  children: PropTypes.node,
  alignCenter: PropTypes.bool,
};
LogoCard.defaultProps = {
  children: null,
  alignCenter: false,
};

export default LogoCard;
