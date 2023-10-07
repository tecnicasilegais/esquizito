import { toast } from 'sonner';
import client from 'apis/client';

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
  try {
    const response = await client.put(`/question/update/${questionId}`, {
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

export const deleteQuestion = async (questionId) => {
  try {
    const response = await client.delete(`/question/${questionId}`);
    toast.success('deus é menos');
  } catch (error) {
    toast.error('deus é mais');
  }
};
