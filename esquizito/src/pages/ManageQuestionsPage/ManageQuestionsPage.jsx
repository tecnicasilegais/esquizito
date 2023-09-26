import React, { useState } from 'react';
import { Box, Button, Card, Checkbox, Stack } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import {
  AddCircle,
  CheckBox,
  CheckBoxOutlineBlank,
  Edit,
} from '@mui/icons-material';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen';
import { properties } from '../../util/Properties';

function ManageQuestionsPage() {
  const navigate = useNavigate();
  const [selectAllIcon, setSelectAllIcon] = useState(<CheckBox />);
  const [selectAllState, setSelectedAllState] = useState(false);
  const handleSelectAll = () => {
    setSelectedAllState(!selectAllState);
    setSelectAllIcon(selectAllState ? <CheckBox /> : <CheckBoxOutlineBlank />);
  };
  return (
    <HeaderScreen>
      <Stack spacing={2} mt={1} mb={2} mx={2}>
        <Card>
          <Stack spacing={2} direction='row'>
            <Button
              variant='soft'
              startDecorator={selectAllIcon}
              onClick={handleSelectAll}>
              Selecionar tudo
            </Button>
            <Button variant='soft' startDecorator={<AddCircle />}>
              Criar pergunta
            </Button>
          </Stack>
          <Stack spacing={2}>
            <Card variant='soft'>
              <Stack spacing={1} direction='row' alignItems='stretch'>
                <Stack
                  py={1}
                  spacing={1}
                  alignItems='center'
                  justifyContent='space-between'>
                  <Checkbox variant='outlined' />
                  <Button variant='plain' size='sm' sx={{ height: '100%' }}>
                    <Edit />
                  </Button>
                </Stack>
                <Box>{properties.example.screen.game.question}</Box>
              </Stack>
            </Card>
            <Card variant='soft'>
              {properties.example.screen.game.question}
            </Card>
            <Card variant='soft'>
              {properties.example.screen.game.question}
            </Card>
          </Stack>
        </Card>
      </Stack>
    </HeaderScreen>
  );
}

export default ManageQuestionsPage;
