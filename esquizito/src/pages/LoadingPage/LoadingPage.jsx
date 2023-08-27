import { CircularProgress } from '@mui/joy';
import React from 'react';
import LogoCard from 'components/LogoCard/LogoCard';

function LoadingPage() {
  return (
    <LogoCard alignCenter>
      <CircularProgress variant='soft' size='lg' />
    </LogoCard>
  );
}

export default LoadingPage;
