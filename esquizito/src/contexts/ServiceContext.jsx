import React, { useCallback, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import QuestionService from 'apis/services/QuestionService';
import QuizService from 'apis/services/QuizService';
import ResultService from 'apis/services/ResultService';
import { useUser } from './UserContext';

/* eslint-disable no-unused-vars */
const initialServiceContext = {
  questionService: {
    create: async ({ answer, explanation, statement, subject }) => {},
    list: async () => {},
    remove: async (questionId) => {},
    update: async ({
      answer,
      explanation,
      questionId,
      statement,
      subject,
    }) => {},
  },
  quizService: {
    archive: async (quizId) => {},
    create: async ({ gameMode, name, questionIds }) => {},
    getByCode: async (quizCode) => {},
    list: async () => {},
    publish: async (quizId) => {},
    update: async ({ gameMode, name, questionIds, quizId }) => {},
  },
  resultService: {
    create: async ({ answers, elapsedTime, quizId }) => {},
    listFromQuiz: async (quizId) => {},
    listFromUser: async () => {},
  },
};
/* eslint-enable no-unused-vars */

const ServiceContext = React.createContext(initialServiceContext);
const QuestionContext = React.createContext(undefined);
const QuizContext = React.createContext(undefined);
const ResultContext = React.createContext(undefined);

export const useService = () => {
  const context = useContext(ServiceContext);

  if (context === initialServiceContext) {
    throw new Error('useService was called outside of its Provider');
  }

  return context;
};

function QuestionProvider({ children }) {
  const { getAccessTokenSilently, user } = useUser();

  const create = useCallback(
    async ({ answer, explanation, statement, subject }) =>
      getAccessTokenSilently().then((token) =>
        QuestionService.create(
          { answer, explanation, statement, subject, userId: user.id },
          token,
        ),
      ),
    [getAccessTokenSilently, user.id],
  );

  const list = useCallback(
    async () =>
      getAccessTokenSilently().then((token) =>
        QuestionService.list(user.id, token),
      ),
    [getAccessTokenSilently, user.id],
  );

  const remove = useCallback(
    async (questionId) =>
      getAccessTokenSilently().then((token) =>
        QuestionService.remove(questionId, token),
      ),
    [getAccessTokenSilently],
  );

  const update = useCallback(
    async ({ answer, explanation, questionId, statement, subject }) =>
      getAccessTokenSilently().then((token) =>
        QuestionService.update(
          {
            answer,
            explanation,
            questionId,
            statement,
            subject,
            userId: user.id,
          },
          token,
        ),
      ),
    [getAccessTokenSilently, user.id],
  );

  const contextValue = useMemo(
    () => ({
      create,
      list,
      remove,
      update,
    }),
    [create, list, remove, update],
  );

  return (
    <QuestionContext.Provider value={contextValue}>
      {children}
    </QuestionContext.Provider>
  );
}

function QuizProvider({ children }) {
  const { getAccessTokenSilently, user } = useUser();

  const archive = useCallback(
    (quizId) =>
      getAccessTokenSilently().then((token) =>
        QuizService.archive(quizId, token),
      ),
    [getAccessTokenSilently],
  );

  const create = useCallback(
    ({ gameMode, name, questionIds }) =>
      getAccessTokenSilently().then((token) =>
        QuizService.create(
          { gameMode, name, questionIds, userId: user.id },
          token,
        ),
      ),
    [getAccessTokenSilently, user.id],
  );

  const getByCode = useCallback(
    (quizCode) =>
      getAccessTokenSilently().then((token) =>
        QuizService.getByCode(quizCode, token),
      ),
    [getAccessTokenSilently],
  );

  const list = useCallback(
    async () =>
      getAccessTokenSilently().then((token) =>
        QuizService.list(user.id, token),
      ),
    [getAccessTokenSilently, user.id],
  );

  const publish = useCallback(
    async (quizId) =>
      getAccessTokenSilently().then((token) =>
        QuizService.publish(quizId, token),
      ),
    [getAccessTokenSilently],
  );

  const update = useCallback(
    async ({ gameMode, name, questionIds, quizId }) =>
      getAccessTokenSilently().then((token) =>
        QuizService.update(
          {
            gameMode,
            name,
            questionIds,
            quizId,
            userId: user.id,
          },
          token,
        ),
      ),
    [getAccessTokenSilently, user.id],
  );

  const contextValue = useMemo(
    () => ({
      archive,
      create,
      getByCode,
      list,
      publish,
      update,
    }),
    [archive, create, getByCode, list, publish, update],
  );
  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
}

function ResultProvider({ children }) {
  const { getAccessTokenSilently, user } = useUser();

  const create = useCallback(
    async ({ answers, elapsedTime, quizId }) =>
      getAccessTokenSilently().then((token) =>
        ResultService.create(
          { answers, elapsedTime, quizId, userId: user.id },
          token,
        ),
      ),
    [getAccessTokenSilently, user.id],
  );

  const listFromQuiz = useCallback(
    async (quizId) =>
      getAccessTokenSilently().then((token) =>
        ResultService.listFromQuiz(quizId, token),
      ),
    [getAccessTokenSilently],
  );

  const listFromUser = useCallback(
    async () =>
      getAccessTokenSilently().then((token) =>
        ResultService.listFromUser(user.id, token),
      ),
    [getAccessTokenSilently, user.id],
  );

  const contextValue = useMemo(
    () => ({
      create,
      listFromQuiz,
      listFromUser,
    }),
    [create, listFromQuiz, listFromUser],
  );
  return (
    <ResultContext.Provider value={contextValue}>
      {children}
    </ResultContext.Provider>
  );
}

function ServiceInnerProvider({ children }) {
  const questionContext = useContext(QuestionContext);
  const quizContext = useContext(QuizContext);
  const resultContext = useContext(ResultContext);

  const contextValue = useMemo(
    () => ({
      questionService: questionContext,
      quizService: quizContext,
      resultService: resultContext,
    }),
    [questionContext, quizContext, resultContext],
  );
  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
}

export function ServiceProvider({ children }) {
  return (
    <QuestionProvider>
      <QuizProvider>
        <ResultProvider>
          <ServiceInnerProvider>{children}</ServiceInnerProvider>
        </ResultProvider>
      </QuizProvider>
    </QuestionProvider>
  );
}

ServiceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ServiceInnerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

QuestionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

ResultProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
