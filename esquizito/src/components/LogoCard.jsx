import { Card, CardOverflow } from '@mui/joy';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';

function LogoCard({ children }) {
  return (
    <Card
      sx={{
        '& img': {
          marginTop: '-200px',
          width: '100%',
        },
        borderRadius: 36,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '40vh',
        maxWidth: '400px',
        transition: 'height 0.5s',
      }}>
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
