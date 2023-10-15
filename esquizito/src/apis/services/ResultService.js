import { toast } from 'sonner';
import client from 'apis/client';

const ResultService = {
  create: async ({ answers, elapsedTime, quizId, userId }) => {
    try {
      await client.post('/result/create', {
        answers,
        elapsedTime,
        quizId,
        userId,
      });
      toast.success('Pergunta criada com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar pergunta!');
    }
  },

  listFromQuiz: async (quizId) => {
    try {
      const response = await client.get(`/quiz/${quizId}/results`);
      return response.data;
    } catch (error) {
      toast.error('Erro ao buscar resultados!');
      return undefined;
    }
  },
};

export default ResultService;
