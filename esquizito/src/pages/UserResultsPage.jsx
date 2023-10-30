import { HomeRounded, SyncRounded } from '@mui/icons-material';
import { Button, Card, LinearProgress, Stack } from '@mui/joy';
import HeaderScreen from 'components/HeaderScreen';
import UserResult from 'components/UserResult';
import { useNavContext } from 'contexts/NavContext';
import { useService } from 'contexts/ServiceContext';
import { useUser } from 'contexts/UserContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function UserResultsPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const { resultService } = useService();
  const { setUserResultData, userResultData } = useNavContext();
  const [loading, setLoading] = React.useState(true);
  const [results, setResults] = React.useState([]);

  const refreshResults = async () => {
    setLoading(true);
    const newResults = await resultService.listFromUser();
    newResults.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setResults(newResults);
    setLoading(false);
  };

  useEffect(() => {
    if (user.id) {
      refreshResults();
    }
  }, [user.id]);

  useEffect(() => {
    if (userResultData) {
      navigate(urlPaths.resultDetailsPage);
    }
  }, []);

  return (
    <HeaderScreen headerCenter={translations.userResults.header}>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card sx={{ borderRadius: '36px' }}>
          <Stack direction='row' justifyContent='space-between' spacing={2}>
            <Button
              startDecorator={<HomeRounded />}
              variant='solid'
              onClick={() => {
                setUserResultData(undefined);
                navigate(urlPaths.mainMenu);
              }}>
              {translations.userResults.button.home}
            </Button>
            <Button
              startDecorator={<SyncRounded />}
              variant='soft'
              onClick={refreshResults}>
              {translations.userResults.button.update}
            </Button>
          </Stack>
          {loading && <LinearProgress size='sm' />}
          {!loading && results.length > 0 && (
            <Stack spacing={2}>
              {results.map((result) => (
                <UserResult
                  answers={result.answers}
                  key={result._id}
                  quizName={result.quizName}
                  resultId={result._id}
                  savedAt={result.createdAt}
                  openResultDetails={() => {
                    setUserResultData(result);
                    navigate(urlPaths.resultDetailsPage);
                  }}
                />
              ))}
            </Stack>
          )}
        </Card>
      </Stack>
    </HeaderScreen>
  );
}

export default UserResultsPage;
