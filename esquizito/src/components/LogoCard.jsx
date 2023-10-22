import { Box, Card, CardOverflow } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';
import logo from 'assets/logo.png';

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
        justifyContent: 'center',
        marginTop: '200px',
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
