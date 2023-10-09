import React, { useEffect, useState } from 'react';
import { Button, Card, Stack } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import {
  AddCircleRounded,
  HomeRounded,
  SyncRounded,
} from '@mui/icons-material';
import HeaderScreen from 'components/HeaderScreen/HeaderScreen';
import * as Quiz from 'apis/services/Quiz';
import ManageQuestion from 'components/ManageQuestion/ManageQuestion';
import { useUser } from 'contexts/UserContext';
import { urlPaths } from 'util/UrlPaths';
import { translations } from 'util/Properties';
import ManageQuizModal from 'components/ManageQuizModal/ManageQuizModal';

function ManageQuizzesPage() {
  const navigate = useNavigate();
  const [modalCreateQuestion, setModalCreateQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const { user } = useUser();
  const refreshQuestions = async () => {
    const result = await Quiz.list(user.id);
    if (result) {
      setQuestions(result);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    refreshQuestions();
  }, [user]);
  return (
    <HeaderScreen headerCenter={translations.manageQuizzes.header}>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card sx={{ borderRadius: '36px' }}>
          <Stack direction='row' justifyContent='space-between' spacing={2}>
            <Button
              startDecorator={<HomeRounded />}
              variant='solid'
              onClick={() => navigate(urlPaths.mainMenu)}>
              {translations.manageQuizzes.button.home}
            </Button>
            <Stack direction='row' spacing={2}>
              <Button
                startDecorator={<AddCircleRounded />}
                variant='soft'
                onClick={() => setModalCreateQuestion(true)}>
                {translations.manageQuizzes.button.create}
              </Button>
              <Button
                startDecorator={<SyncRounded />}
                variant='soft'
                onClick={refreshQuestions}>
                {translations.manageQuizzes.button.update}
              </Button>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            {!isLoading &&
              questions.map((question) => (
                <ManageQuestion
                  answer={question.answer}
                  explanation={question.explanation}
                  key={question._id}
                  questionId={question._id}
                  refreshPage={refreshQuestions}
                  statement={question.statement}
                  subject={question.subject}
                />
              ))}
          </Stack>
        </Card>
      </Stack>
      <ManageQuizModal
        open={modalCreateQuestion}
        title={translations.manageQuizzes.quizModal.headerCreate}
        type='create'
        onCancel={() => setModalCreateQuestion(false)}
        onClose={() => setModalCreateQuestion(false)}
        onSave={(questionData) =>
          Quiz.create({ userId: user.id, ...questionData }).then(() =>
            refreshQuestions(),
          )
        }
      />
    </HeaderScreen>
  );
}

export default ManageQuizzesPage;
