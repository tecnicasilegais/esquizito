import { Grid } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function ResultsTable({ children }) {
  return <Grid container>{children}</Grid>;
}

ResultsTable.propTypes = {
  children: PropTypes.node,
};
ResultsTable.defaultProps = {
  children: null,
};

export default ResultsTable;
