import { NextFunction, Request, Response } from 'express';

import { nanoIdConfig } from 'configs/nanoId.config';
import { QuizStatus } from 'models/enums';
import questionService from 'services/question.service';
import quizService from 'services/quiz.service';

export async function validateQuestionsExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { questions } = req.body;

  if (!Array.isArray(questions)) {
    return res.status(400).json({ error: 'Invalid Questions' });
  }

  const existingQuestions = await questionService.listByIds(questions);

  const missingQuestionIds = questions.filter(
    (id) => !existingQuestions.some((question) => question._id.equals(id)),
  );

  if (missingQuestionIds.length > 0) {
    const missingQuestionIdsMessage = `Missing questions: [${missingQuestionIds.join(
      ', ',
    )}]`;
    return res.status(400).json({ error: missingQuestionIdsMessage });
  }

  req.body.questions = questions.map((id) =>
    existingQuestions.find((question) => question._id.equals(id)),
  );

  return next();
}

export const validateQuizIsDraft = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  const quiz = await quizService.get(id);

  if (!quiz) {
    return res
      .status(404)
      .json({ error: `Could not locate quiz by id: ${id}` });
  }

  if (quiz.status !== QuizStatus.DRAFT) {
    return res
      .status(400)
      .json({ error: 'Can only update quizzes in draft state.' });
  }

  return next();
};

export const validateGameCode = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { code } = req.params;

  if (code.length !== nanoIdConfig.size) {
    return res.status(400).json({ error: 'Invalid game code.' });
  }

  return next();
};

export const validateAmountOfQuestions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { questions } = req.body;

  if (questions.length % 2 !== 0) {
    return res
      .status(400)
      .json({ error: 'Amount of questions should be even' });
  }

  return next();
};
