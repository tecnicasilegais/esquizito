import client from 'apis/client';
import { toast } from 'sonner';

const ResultService = {
  create: async ({ answers, elapsedTime, quizId, userId }, token) => {
    try {
      await client.post(
        '/result/create',
        {
          answers,
          elapsedTime,
          quizId,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success('Resultado salvo com sucesso!');
    } catch (error) {
      toast.error('Erro ao salvar resultado!');
    }
  },

  listFromQuiz: async (quizId, token) => {
    try {
      const response = await client.get(`/quiz/${quizId}/results`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error('Erro ao buscar resultados!');
      return undefined;
    }
  },

  listFromUser: async (userId, token) => {
    try {
      const response = await client.get(`/user/${userId}/results`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error('Erro ao buscar resultados!');
      return undefined;
    }
  },
};

export default ResultService;
