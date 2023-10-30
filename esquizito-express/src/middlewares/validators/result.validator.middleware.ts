import { NextFunction, Request, Response } from 'express';

export async function validateAnswers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { answers } = req.body;

  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: 'Invalid Answers' });
  }

  const { questions } = req.validatorContent!.quizData!;

  if (questions.length !== answers.length) {
    return res.status(400).json({ error: 'Invalid amount of answers' });
  }

  (answers as [{ questionId: string }]).sort(
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

export async function addQuestionDetails(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { answers } = req.body;

  const { questions } = req.validatorContent!.quizData!;

  for (let i = 0; i < answers.length; i++) {
    const question = questions.find((q) =>
      q._id.equals(answers[i].questionId),
    )!;

    answers[i] = {
      answer: answers[i].answer,
      elapsedTime: answers[i].elapsedTime,
      question,
    };
  }

  return next();
}

export async function addQuizName(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  req.body.quizName = req.validatorContent!.quizData!.name;

  return next();
}
