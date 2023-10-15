import { Box, CircularProgress } from '@mui/joy';
import LogoCard from 'components/LogoCard';
import React from 'react';

function LoadingPage() {
  return (
    <LogoCard>
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='lg' variant='soft' />
      </Box>
    </LogoCard>
  );
}

export default LoadingPage;
