import { Box } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function Question({ number, text }) {
  return (
    <Box>
      <Box fontWeight='xl' component='span'>
        {`${number}. `}
      </Box>
      <Box fontWeight='md' component='span'>
        {text}
      </Box>
    </Box>
  );
}

Question.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Question;
