import {
  AddCircleRounded,
  HomeRounded,
  SyncRounded,
} from '@mui/icons-material';
import { Button, Card, LinearProgress, Stack } from '@mui/joy';
import HeaderScreen from 'components/HeaderScreen';
import ManageQuizModal from 'components/ManageQuizModal';
import Quiz from 'components/Quiz';
import { useService } from 'contexts/ServiceContext';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function ManageQuizzesPage() {
  const navigate = useNavigate();
  const [modalManageQuiz, setModalManageQuiz] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const { user } = useUser();
  const { questionService, quizService } = useService();

  const refreshQuizzes = async () => {
    const result = await quizService.list();
    if (result) {
      setQuizzes(result);
    }
  };

  const refreshQuestions = async () => {
    const result = await questionService.list();
    if (result) {
      setQuestions(result);
    }
  };

  const refreshContent = async () => {
    setLoading(true);
    await refreshQuizzes();
    await refreshQuestions();
    setLoading(false);
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
          {loading && <LinearProgress size='sm' />}
          {!loading && quizzes.length > 0 && (
            <Stack spacing={2}>
              {quizzes.map((quiz) => (
                <Quiz
                  amountOfAnswers={quiz.amountOfAnswers}
                  availableQuestions={questions}
                  code={quiz.code}
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
          )}
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
          quizService
            .create({
              gameMode,
              name,
              questionIds,
            })
            .then(() => refreshQuizzes())
        }
      />
    </HeaderScreen>
  );
}

export default ManageQuizzesPage;
