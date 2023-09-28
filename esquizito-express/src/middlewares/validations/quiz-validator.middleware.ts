import { NextFunction, Request, Response } from 'express';
import questionService from '../../services/question.service';

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

  return next();
}
