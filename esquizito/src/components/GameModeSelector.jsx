import { Box, Stack } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function GameModeSelector({ children, endDecorator, startDecorator }) {
  return (
    <Stack direction='row' justifyContent='center' spacing={1}>
      {startDecorator}
      <Box>{children}</Box>
      {endDecorator}
    </Stack>
  );
}

GameModeSelector.propTypes = {
  children: PropTypes.node,
  endDecorator: PropTypes.node,
  startDecorator: PropTypes.node,
};

GameModeSelector.defaultProps = {
  children: null,
  endDecorator: null,
  startDecorator: null,
};

export default GameModeSelector;
