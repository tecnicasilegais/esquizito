import React, { useState } from 'react';
import { Button, Card, Stack } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import {
  AddCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  Sync,
} from '@mui/icons-material';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen';
import ManageQuestionModal from '../../components/ManageQuestionModal/ManageQuestionModal';
import * as DB from '../../util/DB';
import ManageQuestion from '../../components/ManageQuestion/ManageQuestion';

function ManageQuestionsPage() {
  const navigate = useNavigate();
  const [modalCreateQuestion, setModalCreateQuestion] = useState(false);
  const [selectAllIcon, setSelectAllIcon] = useState(<CheckBox />);
  const [selectAllState, setSelectedAllState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const handleSelectAll = () => {
    setSelectedAllState(!selectAllState);
    setSelectAllIcon(selectAllState ? <CheckBox /> : <CheckBoxOutlineBlank />);
  };
  const refreshQuestions = async () => {
    const result = await DB.getQuestions();
    if (result) {
      console.log({ result });
      setQuestions(result);
      setIsLoading(false);
    }
  };
  return (
    <HeaderScreen>
      <Stack mb={2} mt={1} mx={2} spacing={2}>
        <Card sx={{ borderRadius: '36px' }}>
          <Stack direction='row' spacing={2}>
            <Button
              startDecorator={selectAllIcon}
              variant='soft'
              onClick={handleSelectAll}>
              Selecionar tudo
            </Button>
            <Button
              startDecorator={<AddCircle />}
              variant='soft'
              onClick={() => setModalCreateQuestion(true)}>
              Criar pergunta
            </Button>
            <Button
              startDecorator={<Sync />}
              variant='soft'
              onClick={refreshQuestions}>
              Atualizar
            </Button>
          </Stack>
          <Stack spacing={2}>
            {!isLoading &&
              questions.map((question) => (
                <ManageQuestion
                  answer={question.answer}
                  explanation={question.explanation}
                  key={question._id}
                  questionId={question._id}
                  statement={question.statement}
                  subject={question.subject}
                />
              ))}
          </Stack>
        </Card>
      </Stack>
      <ManageQuestionModal
        open={modalCreateQuestion}
        title='Criar nova pergunta'
        onCancel={() => setModalCreateQuestion(false)}
        onClose={() => setModalCreateQuestion(false)}
        onSave={(questionData) => DB.createQuestion(questionData)}
      />
    </HeaderScreen>
  );
}

export default ManageQuestionsPage;
