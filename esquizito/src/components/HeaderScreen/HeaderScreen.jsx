import { Box } from '@mui/joy';
import logo from 'assets/logo.png';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './HeaderScreen.module.scss';

function HeaderScreen({ children, headerCenter, headerRight }) {
  return (
    <div className={styles.container}>
      <Box
        className={styles.header}
        fontSize='xl3'
        fontWeight='xl'
        px={2}
        py={1}>
        <div className={styles.headerEnd}>
          <img alt='EsQUIZito logo' src={logo} />
        </div>
        <div className={styles.headerCenter}>{headerCenter}</div>
        <div className={styles.headerEnd}>{headerRight}</div>
      </Box>
      <Box>{children}</Box>
    </div>
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
