import {
  AddCircleRounded,
  HomeRounded,
  SyncRounded,
} from '@mui/icons-material';
import { Button, Card, LinearProgress, Stack } from '@mui/joy';
import HeaderScreen from 'components/HeaderScreen';
import ManageQuestion from 'components/ManageQuestion';
import ManageQuestionModal from 'components/ManageQuestionModal';
import { useService } from 'contexts/ServiceContext';
import { useUser } from 'contexts/UserContext';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { translations } from 'util/Properties';
import { urlPaths } from 'util/UrlPaths';

function ManageQuestionsPage() {
  const navigate = useNavigate();
  const [modalCreateQuestion, setModalCreateQuestion] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const { user } = useUser();
  const { questionService } = useService();
  const refreshQuestions = async () => {
    setIsLoading(true);
    const result = await questionService.list();
    if (result) {
      setQuestions(result);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    if (user.id) {
      refreshQuestions();
    }
  }, [user.id]);
  return (
    <HeaderScreen headerCenter={translations.manageQuestions.header}>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card sx={{ borderRadius: '36px' }}>
          <Stack direction='row' justifyContent='space-between' spacing={2}>
            <Button
              startDecorator={<HomeRounded />}
              variant='solid'
              onClick={() => navigate(urlPaths.mainMenu)}>
              {translations.manageQuestions.button.home}
            </Button>
            <Stack direction='row' spacing={2}>
              <Button
                startDecorator={<AddCircleRounded />}
                variant='soft'
                onClick={() => setModalCreateQuestion(true)}>
                {translations.manageQuestions.button.create}
              </Button>
              <Button
                startDecorator={<SyncRounded />}
                variant='soft'
                onClick={refreshQuestions}>
                {translations.manageQuestions.button.update}
              </Button>
            </Stack>
          </Stack>
          {isLoading && <LinearProgress size='sm' />}
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
      <ManageQuestionModal
        open={modalCreateQuestion}
        title={translations.manageQuestions.questionModal.headerCreate}
        type='create'
        onCancel={() => setModalCreateQuestion(false)}
        onClose={() => setModalCreateQuestion(false)}
        onSave={(questionData) =>
          questionService
            .create({ ...questionData })
            .then(() => refreshQuestions())
        }
      />
    </HeaderScreen>
  );
}

export default ManageQuestionsPage;
