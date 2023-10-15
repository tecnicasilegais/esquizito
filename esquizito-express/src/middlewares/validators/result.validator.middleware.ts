import { NextFunction, Request, Response } from 'express';

import quizService from 'services/quiz.service';

export async function validateAnswers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { answers } = req.body;

  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: 'Invalid Answers' });
  }

  const { questions } = (await quizService.get(req.body.quizId))!;

  if (questions.length !== answers.length) {
    return res.status(400).json({ error: 'Invalid amount of answers' });
  }

  answers.sort(
    (a, b) =>
      questions.findIndex((qa) => qa._id === a.questionId) -
      questions.findIndex((qb) => qb._id === b.questionId),
  );

  for (let i = 0; i < answers.length; i++) {
    if (!questions[i]._id.equals(answers[i].questionId)) {
      return res.status(400).json({
        error: `Question ID mismatch: expected: ${questions[i]._id}, received: ${answers[i].questionId}`,
      });
    }
  }

  return next();
}
