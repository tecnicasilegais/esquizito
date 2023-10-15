import {
  AddCircleRounded,
  HomeRounded,
  SyncRounded,
} from '@mui/icons-material';
import { Button, Card, LinearProgress, Stack } from '@mui/joy';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';
import { useNavigate } from 'react-router-dom';
import { useUser } from 'contexts/UserContext';
import HeaderScreen from 'components/HeaderScreen';
import ManageQuizModal from 'components/ManageQuizModal';
import QuestionService from 'apis/services/QuestionService';
import Quiz from 'components/Quiz';
import QuizService from 'apis/services/QuizService';
import React, { useEffect, useState } from 'react';

function ManageQuizzesPage() {
  const navigate = useNavigate();
  const [modalManageQuiz, setModalManageQuiz] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const { user } = useUser();

  const refreshQuizzes = async () => {
    const result = await QuizService.list(user.id);
    if (result) {
      setQuizzes(result);
    }
  };

  const refreshQuestions = async () => {
    const result = await QuestionService.list(user.id);
    if (result) {
      setQuestions(result);
    }
  };

  const refreshContent = async () => {
    setIsLoading(true);
    await refreshQuizzes();
    await refreshQuestions();
    setIsLoading(false);
  };

  useEffect(() => {
    if (user.id) {
      refreshContent();
    }
  }, [user.id]);

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
                onClick={() => setModalManageQuiz(true)}>
                {translations.manageQuizzes.button.create}
              </Button>
              <Button
                startDecorator={<SyncRounded />}
                variant='soft'
                onClick={() => refreshContent()}>
                {translations.manageQuizzes.button.update}
              </Button>
            </Stack>
          </Stack>
          {isLoading && <LinearProgress size='sm' />}
          <Stack spacing={2}>
            {!isLoading &&
              quizzes.map((quiz) => (
                <Quiz
                  gameMode={quiz.gameMode}
                  key={quiz._id}
                  name={quiz.name}
                  questions={quiz.questions}
                  quizId={quiz._id}
                  quizStatus={quiz.status}
                  refreshPage={refreshContent}
                />
              ))}
          </Stack>
        </Card>
      </Stack>
      <ManageQuizModal
        open={modalManageQuiz}
        quizQuestions={questions}
        title={translations.manageQuizzes.quizModal.headerCreate}
        type='create'
        onCancel={() => setModalManageQuiz(false)}
        onClose={() => setModalManageQuiz(false)}
        onSave={({ gameMode, name, questionIds }) =>
          QuizService.create({
            gameMode,
            name,
            questionIds,
            userId: user.id,
          }).then(() => refreshQuizzes())
        }
      />
    </HeaderScreen>
  );
}

export default ManageQuizzesPage;
