import { Box, CircularProgress } from '@mui/joy';
import LogoCard from 'components/LogoCard/LogoCard';
import React from 'react';

function LoadingPage() {
  return (
    <LogoCard>
      <Box display='flex' justifyContent='center'>
        <CircularProgress variant='soft' size='lg' />
      </Box>
    </LogoCard>
  );
}

export default LoadingPage;
