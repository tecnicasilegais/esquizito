import { ArrowBackRounded, HomeRounded } from '@mui/icons-material';
import {
  Button,
  Card,
  Chip,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/joy';
import AnswerDetails from 'components/AnswerDetails';
import HeaderScreen from 'components/HeaderScreen';
import { useNavContext } from 'contexts/NavContext';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { examples, translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function ResultDetailsPage() {
  const navigate = useNavigate();
  const { setUserResultData } = useNavContext();
  const [loading, setLoading] = React.useState(true);
  const [resultDetails, setResultDetails] = React.useState([]);

  useEffect(() => {
    if (resultDetails) {
      console.log('resultDetails ', resultDetails);
      setLoading(false);
    }
  }, [resultDetails]);

  useEffect(() => {
    console.log('examples ', examples.resultDetails);
    setResultDetails(examples.resultDetails);
  }, []);

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
          {!loading && resultDetails.answers.length > 0 && (
            <Stack spacing={2}>
              {resultDetails.answers.map((answer) => (
                <AnswerDetails
                  correctAnswer={answer.questionData.answer}
                  explanation={answer.questionData.explanation}
                  givenAnswer={answer.givenAnswer}
                  key={answer._id}
                  statement={answer.questionData.statement}
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
