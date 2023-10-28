import { Box } from '@mui/joy';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';

function HeaderScreen({ children, headerCenter, headerRight }) {
  const headerChildrenStyle = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    minWidth: '120px',
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        height: '100%',
        width: '100%',
      }}>
      <Box
        sx={{
          '& img': {
            height: '100%',
          },
          boxSizing: 'border-box',
          display: 'flex',
          fontSize: 'xl3',
          fontWeight: 'xl',
          height: '100px',
          px: 2,
          py: 1,
          zIndex: '1',
        }}>
        <Box sx={headerChildrenStyle}>
          <img alt='EsQUIZito logo' src={logo} />
        </Box>
        <Box sx={{ ...headerChildrenStyle, flexGrow: '1' }}>{headerCenter}</Box>
        <Box sx={headerChildrenStyle}>{headerRight}</Box>
      </Box>
      <Box
        sx={{
          maxHeight: 'calc(100vh - 100px)',
          overflow: 'auto',
        }}>
        {children}
      </Box>
    </Box>
  );
}

HeaderScreen.propTypes = {
  children: PropTypes.node,
  headerCenter: PropTypes.node,
  headerRight: PropTypes.node,
};
HeaderScreen.defaultProps = {
  children: null,
  headerCenter: null,
  headerRight: null,
};
export default HeaderScreen;
