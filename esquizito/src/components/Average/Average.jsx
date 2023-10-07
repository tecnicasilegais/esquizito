import { Grid, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function Average({ children, title, xs }) {
  return (
    <Grid
      sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      xs={xs}>
      <Typography fontWeight='lg'>{title}</Typography>
      {children}
    </Grid>
  );
}

Average.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
};
Average.defaultProps = {
  children: null,
  xs: null,
};

export default Average;
