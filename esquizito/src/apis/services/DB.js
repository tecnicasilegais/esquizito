import { toast } from 'sonner';
import client from '../client';

export const createQuestion = async ({
  answer,
  explanation,
  statement,
  subject,
  userId,
}) => {
  try {
    await client.post('/question/create', {
      answer,
      explanation,
      statement,
      subject,
      userId,
    });
    toast.success('deus é menos');
  } catch (error) {
    toast.error('deus é mais');
  }
};

export const getQuestions = async (userId) => {
  try {
    const response = await client.get(`/user/${userId}/questions`);
    toast.success('deus é menos');
    return response.data;
  } catch (error) {
    toast.error('deus é mais');
    return undefined;
  }
};

export const updateQuestion = async ({
  answer,
  explanation,
  questionId,
  statement,
  subject,
  userId,
}) => {
  client
    .put('/question/update', {
      answer,
      explanation,
      questionId,
      statement,
      subject,
      userId,
    })
    .then((response) => {
      toast.success('deus é menos');
    })
    .catch((error) => {
      toast.error('deus é mais');
    });
};
