import { toast } from 'sonner';
import client from '../client';

export const createQuestion = ({ answer, explanation, statement, subject }) => {
  client
    .post('/question/create', {
      answer,
      explanation,
      statement,
      subject,
      userId: '64ecef379778977eb4cb6ac7',
    })
    .then((response) => {
      toast.success('deus é menos');
      console.log(response);
    })
    .catch((error) => {
      toast.error('deus é mais');
      console.log(error);
    });
};

export const getQuestions = async () => {
  try {
    const response = await client.get(
      '/user/64ecef379778977eb4cb6ac7/questions',
    );
    toast.success('deus é menos');
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error('deus é mais');
    console.log(error);
    return undefined;
  }
};

export const updateQuestion = ({
  answer,
  explanation,
  questionId,
  statement,
  subject,
}) => {
  client
    .put('/question/update', {
      answer,
      explanation,
      questionId,
      statement,
      subject,
      userId: '64ecef379778977eb4cb6ac7',
    })
    .then((response) => {
      toast.success('deus é menos');
      console.log(response);
    })
    .catch((error) => {
      toast.error('deus é mais');
      console.log(error);
    });
};
