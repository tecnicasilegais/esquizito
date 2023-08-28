import { Box, Typography } from '@mui/joy';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './HeaderScreen.module.scss';

function HeaderScreen({ children }) {
  return (
    <div className={styles.container}>
      <Box className={styles.header} fontWeight='xl'>
        <div className={styles.headerEnd}>
          <img src={logo} alt='EsQUIZito logo' />
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

HeaderScreen.propTypes = {
  children: PropTypes.node,
};
HeaderScreen.defaultProps = {
  children: null,
};
export default HeaderScreen;
