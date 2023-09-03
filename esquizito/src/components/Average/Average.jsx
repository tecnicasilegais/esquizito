import { Grid, Typography } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function Average({ title, children, xs }) {
  return (
    <Grid
      xs={xs}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography fontWeight='lg'>{title}</Typography>
      {children}
    </Grid>
  );
}

Average.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
};
Average.defaultProps = {
  children: null,
  xs: null,
};

export default Average;
