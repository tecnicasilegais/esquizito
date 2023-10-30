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
  resultDetails: {
    answer: { false: 'Falso', true: 'Verdadeiro' },
    correctAnswer: 'Resposta correta:',
    explanation: 'Explicação:',
    header: 'Detalhes do resultado',
    statement: 'Enunciado:',
    yourAnswer: 'Sua resposta:',
  },
  startGame: {
    button: { back: 'Voltar', play: 'Iniciar Jogo' },
    code: 'Código',
    header: 'Entrando no jogo',
    questions: 'Perguntas',
  },
  userResults: {
    button: {
      back: 'Voltar',
      details: 'Ver Detalhes',
      home: 'Início',
      update: 'Atualizar',
    },
    header: 'Meus resultados',
  },
};

export const examples = {
  resultDetails: {
    __v: 0,
    _id: '653e909b2206d754be9bd24c',
    answers: [
      {
        _id: '653e909b2206d754be9bd24d',
        elapsedTime: 10,
        givenAnswer: true,
        questionData: {
          _id: '653cabd91ae47db8dd7af1ed',
          answer: false,
          explanation: 'asdasd é falso',
          statement:
            'falso dsf sd fsad fsadf sdf saf asdf sadf dsf sd fsad fsadf sdf saf asdf sadf ',
        },
      },
      {
        _id: '653e909b2206d754be9bd24e',
        elapsedTime: 10,
        givenAnswer: true,
        questionData: {
          _id: '653e651d2206d754be9bd1f1',
          answer: true,
          explanation: '2² + 2 = 6',
          statement: 'O quadrado de 2 mais ele mesmo é 5.',
        },
      },
      {
        _id: '653e909b2206d754be9bd24f',
        elapsedTime: 10,
        givenAnswer: true,
        questionData: {
          _id: '653e65222206d754be9bd1f6',
          answer: true,
          explanation: '2² + 2 = 6',
          statement: 'O quadrado de 2 mais ele mesmo é 5.',
        },
      },
      {
        _id: '653e909b2206d754be9bd250',
        elapsedTime: 10,
        givenAnswer: false,
        questionData: {
          _id: '653e65242206d754be9bd1fb',
          answer: false,
          explanation: '2² + 2 = 6',
          statement: 'O quadrado de 2 mais ele mesmo é 5.',
        },
      },
      {
        _id: '653e909b2206d754be9bd251',
        elapsedTime: 10,
        givenAnswer: true,
        questionData: {
          _id: '653e652b2206d754be9bd200',
          answer: false,
          explanation: '2² + 2 = 6',
          statement: 'O quadrado de 2 mais ele mesmo é 5.',
        },
      },
      {
        _id: '653e909b2206d754be9bd252',
        elapsedTime: 10,
        givenAnswer: true,
        questionData: {
          _id: '653e652d2206d754be9bd205',
          answer: false,
          explanation: '2² + 2 = 6',
          statement: 'O quadrado de 2 mais ele mesmo é 5.',
        },
      },
    ],
    createdAt: '2023-10-29T17:04:27.965Z',
    elapsedTime: 60,
    quizId: '653e653e2206d754be9bd217',
    userId: '653cabae1ae47db8dd7af1e5',
    userName: 'Eduardo Andrade',
  },
};
