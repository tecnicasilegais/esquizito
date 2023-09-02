import { Grid } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function ResultsTableLine({ children, sx }) {
  return (
    <Grid xs={12} sx={sx}>
      <Grid container>{children}</Grid>
    </Grid>
  );
}

ResultsTableLine.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
ResultsTableLine.defaultProps = {
  children: null,
  sx: null,
};
export default ResultsTableLine;
