import React, { useState } from 'react';
import { Button, Card, Stack } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import {
  AddCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  Refresh,
  Sync,
} from '@mui/icons-material';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen';
import { properties } from '../../util/Properties';
import ManageQuestion from '../../components/ManageQuestion/ManageQuestion';
import CreateQuestionModal from '../../components/CreateQuestionModal/CreateQuestionModal';
import * as DB from '../../util/DB';

function ManageQuestionsPage() {
  const navigate = useNavigate();
  const [modalCreateQuestion, setModalCreateQuestion] = useState(true);
  const [selectAllIcon, setSelectAllIcon] = useState(<CheckBox />);
  const [selectAllState, setSelectedAllState] = useState(false);
  const handleSelectAll = () => {
    setSelectedAllState(!selectAllState);
    setSelectAllIcon(selectAllState ? <CheckBox /> : <CheckBoxOutlineBlank />);
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
              onClick={() => DB.getQuestions()}>
              Atualizar
            </Button>
          </Stack>
          <Stack spacing={2}>
            <ManageQuestion>
              {properties.example.screen.game.question}
            </ManageQuestion>
          </Stack>
        </Card>
      </Stack>
      <CreateQuestionModal
        open={modalCreateQuestion}
        onClose={() => setModalCreateQuestion(false)}
      />
    </HeaderScreen>
  );
}

export default ManageQuestionsPage;
