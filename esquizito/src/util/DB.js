import axios from 'axios';
import { toast } from 'sonner';
import { apiUrl } from './Util';

axios.defaults.baseURL = apiUrl();

export const createQuestion = ({ subject, statement, answer, explanation }) => {
  axios
    .post('/question/create', {
      subject,
      statement,
      answer,
      explanation,
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

export const getQuestions = () => {
  axios
    .get('/user/64ecef379778977eb4cb6ac7/questions')
    .then((response) => {
      toast.success('deus é menos');
      console.log(response);
    })
    .catch((error) => {
      toast.error('deus é mais');
      console.log(error);
    });
};
