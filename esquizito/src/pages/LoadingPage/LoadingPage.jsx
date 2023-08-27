import { Box, CircularProgress } from '@mui/joy';
import React from 'react';
import LogoCard from 'components/LogoCard/LogoCard';

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
