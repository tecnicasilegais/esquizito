import { Box, FormHelperText, Stack } from '@mui/joy';
import { InfoOutlined } from '@mui/icons-material';
import React from 'react';
import PropTypes from 'prop-types';

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
