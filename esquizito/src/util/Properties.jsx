import {
  EditNoteRounded,
  Inventory2Rounded,
  PublicRounded,
  QuizRounded,
  StarRounded,
  TimerRounded,
} from '@mui/icons-material';

export const properties = {
  answers: ['vv', 'vf', 'fv', 'ff'],
  gameModes: ['classic', 'timed', 'stars'],
  quizStatus: ['draft', 'published', 'archived'],
  rankingHeadCells: [
    {
      id: 'userName',
      label: 'Nome',
      numeric: false,
    },
    {
      id: 'hits',
      label: 'Acertos',
      numeric: true,
    },
    {
      id: 'elapsedTime',
      label: 'Tempo',
      numeric: false,
    },
  ],
};

export const translations = {
  confirmationModal: {
    button: { cancel: 'Cancelar', confirm: 'Confirmar', delete: 'Excluir' },
  },
  game: {
    answers: {
      ff: (
        <>
          I. Falso
          <br />
          II. Falso
        </>
      ),
      fv: (
        <>
          I. Falso
          <br />
          II. Verdadeiro
        </>
      ),
      vf: (
        <>
          I. Verdadeiro
          <br />
          II. Falso
        </>
      ),
      vv: (
        <>
          I. Verdadeiro
          <br />
          II. Verdadeiro
        </>
      ),
    },
    button: { confirm: 'Confirmar', next: 'Avançar' },
  },
  gameEndModal: {
    button: { home: 'Início', results: 'Meus Resultados' },
    correctAnswers: (amount) =>
      Math.abs(amount) === 1 ? 'Resposta correta' : 'Respostas corretas',
    header: 'Fim de jogo',
    incorrectAnswers: (amount) =>
      Math.abs(amount) === 1 ? 'Resposta incorreta' : 'Respostas incorretas',
  },
  gameModes: {
    0: {
      helperText: 'Modo padrão sem limite de tempo.',
      icon: <QuizRounded />,
      text: 'Clássico',
    },
    1: {
      helperText: 'O jogo termina quando o tempo acaba.',
      icon: <TimerRounded />,
      text: 'Tempo',
    },
    2: {
      helperText: 'O jogo termina quando o jogador perde todas as estrelas.',
      icon: <StarRounded />,
      text: 'Estrelas',
    },
  },
  joinGame: {
    button: { back: 'Voltar', play: 'Jogar' },
    gameCode: {
      error: {
        invalidCode: 'Código inválido.',
        notFound:
          'Não foi possível encontrar um quiz publicado com esse código.',
        oddQuestions:
          'O quiz informado é inválido. Verifique o número de questões com o criador.',
      },
      label: 'Código do quiz',
      placeholder: 'Insira o código',
    },
  },
  landing: { button: { login: 'Entrar' } },
  manageQuestions: {
    button: {
      cancel: 'Cancelar',
      create: 'Criar pergunta',
      delete: 'Excluir',
      edit: 'Editar',
      home: 'Início',
      update: 'Atualizar',
    },
    deleteHeader: 'Tem certeza que deseja excluir a pergunta?',
    header: 'Gerenciar Questões',
    questionModal: {
      answer: 'Resposta',
      answerFalse: 'Falso',
      answerTrue: 'Verdadeiro',
      button: { cancel: 'Cancelar', clear: 'Limpar', save: 'Salvar' },
      explanation: 'Explicação',
      headerCreate: 'Criar nova pergunta',
      headerEdit: 'Editar pergunta',
      headerView: 'Visualizar pergunta',
      statement: 'Enunciado',
      subject: 'Assunto',
    },
  },
  manageQuizzes: {
    button: {
      archive: 'Arquivar',
      create: 'Criar questionário',
      delete: 'Excluir',
      edit: 'Editar',
      home: 'Início',
      publish: 'Publicar',
      results: 'Resultados',
      update: 'Atualizar',
      view: 'Visualizar',
    },
    deleteHeader: 'Tem certeza que deseja arquivar o questionário?',
    header: 'Gerenciar Questionários',
    publishHeader: 'Tem certeza que deseja publicar o questionário?',
    quizModal: {
      answers: 'Respostas',
      button: {
        cancel: 'Cancelar',
        clear: 'Limpar',
        save: 'Salvar',
      },
      error: {
        name: 'O nome do questionário é obrigatório.',
        questions: 'As questões devem formar pares.',
      },
      gameMode: 'Modo de jogo',
      headerCreate: 'Criar novo questionário',
      headerEdit: 'Editar questionário',
      headerView: 'Visualizar questionário',
      name: 'Nome',
      questions: 'Perguntas',
    },
    quizStatus: {
      0: { color: 'warning', icon: <EditNoteRounded />, text: 'Rascunho' },
      1: { color: 'success', icon: <PublicRounded />, text: 'Publicado' },
      2: { color: 'neutral', icon: <Inventory2Rounded />, text: 'Arquivado' },
    },
  },
  menu: {
    button: {
      enterGame: 'Entrar em um jogo',
      logout: 'Sair',
      manageQuestions: 'Gerenciar questões',
      manageQuizzes: 'Gerenciar questionários',
      seeResults: 'Meus resultados',
    },
  },
  notFound: {
    homeLink: 'Volte para a página inicial!',
    text: 'Você parece estar perdido :(',
  },
  quizResults: {
    averagesHeader: {
      answers: { title: 'Respostas' },
      hits: { title: 'Média de Acertos' },
      time: { title: 'Tempo Médio' },
    },
    button: { back: 'Voltar' },
    imgDescription: {
      correct: 'Ícone de acerto',
      incorrect: 'Ícone de erro',
    },
    noResults: 'Nenhum resultado encontrado.',
    pageHeader: { center: 'Relatório' },
    resultsHeader: {
      name: 'Nome',
      place: '#',
      successRate: 'Acertos',
      time: 'Tempo',
    },
  },
  startGame: {
    button: { back: 'Voltar', play: 'Iniciar Jogo' },
    code: 'Código',
    header: 'Entrando no jogo',
    questions: 'Perguntas',
  },
};

export const examples = {
  screen: {
    game: {
      answer: [
        'Todas as alternativas são verdadeiras.',
        'Apenas I é verdadeira.',
        'Apenas II é verdadeira.',
        'Nenhuma alternativa é verdadeira.',
      ],
      question:
        "Cat ipsum dolor sit amet, meow meow, i tell my human or ask to be pet then attack owners hand. Why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout leave fur on owners clothes. Murf pratt ungow ungow meow meow pee in shoe, or poop on grasses.",
    },
    ranking: {
      tableData: [
        {
          hits: [
            { correct: true, i: 1 },
            { correct: true, i: 2 },
            { correct: false, i: 3 },
            { correct: false, i: 4 },
            { correct: true, i: 5 },
            { correct: true, i: 6 },
            { correct: false, i: 7 },
            { correct: true, i: 8 },
            { correct: true, i: 9 },
            { correct: false, i: 10 },
            { correct: true, i: 11 },
            { correct: true, i: 12 },
            { correct: false, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Simon Curry',
          successRate: 64,
          time: '22m10s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: false, i: 2 },
            { correct: false, i: 3 },
            { correct: false, i: 4 },
            { correct: false, i: 5 },
            { correct: false, i: 6 },
            { correct: false, i: 7 },
            { correct: true, i: 8 },
            { correct: true, i: 9 },
            { correct: true, i: 10 },
            { correct: true, i: 11 },
            { correct: true, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Sarah Campbell',
          successRate: 50,
          time: '20m16s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: false, i: 2 },
            { correct: true, i: 3 },
            { correct: true, i: 4 },
            { correct: false, i: 5 },
            { correct: false, i: 6 },
            { correct: true, i: 7 },
            { correct: false, i: 8 },
            { correct: true, i: 9 },
            { correct: true, i: 10 },
            { correct: false, i: 11 },
            { correct: false, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Martha Pratt',
          successRate: 50,
          time: '21m31s',
        },
        {
          hits: [
            { correct: true, i: 1 },
            { correct: false, i: 2 },
            { correct: true, i: 3 },
            { correct: false, i: 4 },
            { correct: false, i: 5 },
            { correct: false, i: 6 },
            { correct: false, i: 7 },
            { correct: true, i: 8 },
            { correct: false, i: 9 },
            { correct: true, i: 10 },
            { correct: false, i: 11 },
            { correct: true, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Kelsey Hart',
          successRate: 50,
          time: '22m27s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: true, i: 2 },
            { correct: false, i: 3 },
            { correct: false, i: 4 },
            { correct: false, i: 5 },
            { correct: false, i: 6 },
            { correct: true, i: 7 },
            { correct: true, i: 8 },
            { correct: true, i: 9 },
            { correct: false, i: 10 },
            { correct: true, i: 11 },
            { correct: false, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Jordan Cummings',
          successRate: 50,
          time: '22m50s',
        },
        {
          hits: [
            { correct: true, i: 1 },
            { correct: true, i: 2 },
            { correct: false, i: 3 },
            { correct: false, i: 4 },
            { correct: true, i: 5 },
            { correct: true, i: 6 },
            { correct: false, i: 7 },
            { correct: false, i: 8 },
            { correct: false, i: 9 },
            { correct: false, i: 10 },
            { correct: false, i: 11 },
            { correct: true, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Beau Simpson',
          successRate: 50,
          time: '25m18s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: false, i: 2 },
            { correct: true, i: 3 },
            { correct: true, i: 4 },
            { correct: false, i: 5 },
            { correct: true, i: 6 },
            { correct: false, i: 7 },
            { correct: false, i: 8 },
            { correct: true, i: 9 },
            { correct: false, i: 10 },
            { correct: true, i: 11 },
            { correct: true, i: 12 },
            { correct: true, i: 13 },
            { correct: false, i: 14 },
          ],
          name: 'Francisco Schultz',
          successRate: 50,
          time: '25m32s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: true, i: 2 },
            { correct: false, i: 3 },
            { correct: true, i: 4 },
            { correct: false, i: 5 },
            { correct: true, i: 6 },
            { correct: true, i: 7 },
            { correct: true, i: 8 },
            { correct: false, i: 9 },
            { correct: false, i: 10 },
            { correct: false, i: 11 },
            { correct: false, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Abby Quinn',
          successRate: 50,
          time: '26m49s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: false, i: 2 },
            { correct: false, i: 3 },
            { correct: false, i: 4 },
            { correct: false, i: 5 },
            { correct: false, i: 6 },
            { correct: false, i: 7 },
            { correct: true, i: 8 },
            { correct: true, i: 9 },
            { correct: true, i: 10 },
            { correct: true, i: 11 },
            { correct: true, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Kira Reid',
          successRate: 50,
          time: '28m14s',
        },
        {
          hits: [
            { correct: false, i: 1 },
            { correct: false, i: 2 },
            { correct: false, i: 3 },
            { correct: false, i: 4 },
            { correct: false, i: 5 },
            { correct: false, i: 6 },
            { correct: false, i: 7 },
            { correct: true, i: 8 },
            { correct: true, i: 9 },
            { correct: true, i: 10 },
            { correct: true, i: 11 },
            { correct: true, i: 12 },
            { correct: true, i: 13 },
            { correct: true, i: 14 },
          ],
          name: 'Dwayne Neal',
          successRate: 50,
          time: '30m11s',
        },
      ],
    },
  },
};
