import { toast } from 'sonner';
import client from 'apis/client';

const QuizService = {
  archive: async (quizId, token) => {
    try {
      const response = await client.delete(`/quiz/${quizId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Questionário excluído com sucesso!');
    } catch (error) {
      toast.error('Erro ao excluir questionário!');
    }
  },

  create: async ({ gameMode, name, questionIds, userId }, token) => {
    try {
      await client.post(
        '/quiz/create',
        {
          gameMode,
          name,
          questions: questionIds,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success('Questionário criado com sucesso!');
    } catch (error) {
      toast.error('Erro ao criar questionário!');
    }
  },

  getByCode: async (quizCode, token) => {
    const response = await client.get(`/quiz/code/${quizCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },

  list: async (userId, token) => {
    try {
      const response = await client.get(`/user/${userId}/quizzes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      toast.error('Erro ao buscar questionários!');
      return undefined;
    }
  },

  publish: async (quizId, token) => {
    try {
      const response = await client.patch(`/quiz/${quizId}/publish`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Questionário publicado com sucesso!');
    } catch (error) {
      toast.error('Erro ao publicar questionário!');
    }
  },

  update: async ({ gameMode, name, questions, quizId, userId }, token) => {
    try {
      const response = await client.put(
        `/quiz/update/${quizId}`,
        {
          gameMode,
          name,
          questions,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      toast.success('Questionário atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar questionário!');
    }
  },
};

export default QuizService;
