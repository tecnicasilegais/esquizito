import React from 'react';
import { Box, Button, Card, Checkbox, Stack } from '@mui/joy';
import { Edit } from '@mui/icons-material';
import PropTypes from 'prop-types';

function ManageQuestion({ statement, answer, subject, explanation }) {
  return (
    <Card variant='soft'>
      <Stack alignItems='stretch' direction='row' spacing={1}>
        <Stack
          alignItems='center'
          justifyContent='space-between'
          py={1}
          spacing={1}>
          <Checkbox variant='outlined' />
          <Button size='sm' sx={{ height: '100%' }} variant='plain'>
            <Edit />
          </Button>
        </Stack>
        <Box>{statement}</Box>
      </Stack>
    </Card>
  );
}

ManageQuestion.propTypes = {
  statement: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
};
export default ManageQuestion;
