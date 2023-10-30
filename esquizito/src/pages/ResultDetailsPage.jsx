import { ArrowBackRounded, HomeRounded } from '@mui/icons-material';
import { Button, Card, LinearProgress, Stack } from '@mui/joy';
import AnswerDetails from 'components/AnswerDetails';
import HeaderScreen from 'components/HeaderScreen';
import { useNavContext } from 'contexts/NavContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function ResultDetailsPage() {
  const navigate = useNavigate();
  const { setUserResultData, userResultData } = useNavContext();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (userResultData) {
      console.log('resultDetails ', userResultData);
      setLoading(false);
    }
  }, [userResultData]);

  return (
    <HeaderScreen headerCenter={translations.resultDetails.header}>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card sx={{ borderRadius: '36px' }}>
          <Stack direction='row' justifyContent='flex-start' spacing={2}>
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
              startDecorator={<ArrowBackRounded />}
              variant='soft'
              onClick={() => {
                setUserResultData(undefined);
                navigate(urlPaths.userResultsPage);
              }}>
              {translations.userResults.button.back}
            </Button>
          </Stack>
          {loading && <LinearProgress size='sm' />}
          {!loading && userResultData.answers.length > 0 && (
            <Stack spacing={2}>
              {userResultData.answers.map((answer) => (
                <AnswerDetails
                  correctAnswer={answer.question.answer}
                  explanation={answer.question.explanation}
                  givenAnswer={answer.answer}
                  key={answer._id}
                  statement={answer.question.statement}
                />
              ))}
            </Stack>
          )}
        </Card>
      </Stack>
    </HeaderScreen>
  );
}

export default ResultDetailsPage;
