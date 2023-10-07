import { Box } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function GameQuestion({ number, text }) {
  return (
    <Box>
      <Box component='span' fontWeight='xl'>
        {`${number}. `}
      </Box>
      <Box component='span' fontWeight='md'>
        {text}
      </Box>
    </Box>
  );
}

GameQuestion.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default GameQuestion;
