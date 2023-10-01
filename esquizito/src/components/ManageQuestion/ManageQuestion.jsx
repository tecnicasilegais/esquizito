import React from 'react';
import { Box, Button, Card, Checkbox, Stack } from '@mui/joy';
import { Edit } from '@mui/icons-material';
import PropTypes from 'prop-types';

function ManageQuestion({ children }) {
  return (
    <Card variant='soft'>
      <Stack spacing={1} direction='row' alignItems='stretch'>
        <Stack
          py={1}
          spacing={1}
          alignItems='center'
          justifyContent='space-between'>
          <Checkbox variant='outlined' />
          <Button variant='plain' size='sm' sx={{ height: '100%' }}>
            <Edit />
          </Button>
        </Stack>
        <Box>{children}</Box>
      </Stack>
    </Card>
  );
}

ManageQuestion.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ManageQuestion;
