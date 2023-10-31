import { Link, Stack, Typography } from '@mui/joy';
import { ReactComponent as Animated404 } from 'assets/404-animation.svg';
import animation404Script from 'components/Animation404Script';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function NotFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    animation404Script();
  }, []);
  return (
    <Stack
      sx={{
        '& > svg': { height: '40%' },
        alignItems: 'center',
        backgroundColor: '#dddddd',
        boxSizing: 'border-box',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      }}>
      <Animated404 />
      <Typography level='h2' mb={2} mt={4}>
        {translations.notFound.text}
      </Typography>
      <Link
        level='h3'
        underline='always'
        onClick={() => navigate(urlPaths.mainMenu)}>
        {translations.notFound.homeLink}
      </Link>
    </Stack>
  );
}

export default NotFoundPage;
