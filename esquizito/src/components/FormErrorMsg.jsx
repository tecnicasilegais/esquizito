import { InfoOutlined } from '@mui/icons-material';
import { Box, FormHelperText, Stack } from '@mui/joy';
import PropTypes from 'prop-types';
import React from 'react';

function FormErrorMsg({ errorMessage }) {
  return (
    <FormHelperText>
      <Stack direction='row' spacing={1}>
        <InfoOutlined />
        <Box>{errorMessage}</Box>
      </Stack>
    </FormHelperText>
  );
}

FormErrorMsg.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default FormErrorMsg;
