import { Box, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';
import logo from 'assets/logo.png';
import styles from './ScreenWithHeader.module.scss';

function ScreenWithHeader({ children }) {
  return (
    <div className={styles.container}>
      <Box className={styles.header} fontWeight='xl'>
        <div className={styles.headerEnd}>
          <img src={logo} />
        </div>
        <div className={styles.headerCenter}>
          <Typography fontSize='xl3'>5/15</Typography>
        </div>
        <div className={styles.headerEnd}>
          <Typography fontSize='xl3'>5/10</Typography>
        </div>
      </Box>
      {children}
    </div>
  );
}

ScreenWithHeader.propTypes = {
  children: PropTypes.node,
};
ScreenWithHeader.defaultProps = {
  children: null,
};
export default ScreenWithHeader;
