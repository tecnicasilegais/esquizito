import { toast } from 'sonner';
import client from 'apis/client';

export const create = async ({ gameMode, name, questionIds, userId }) => {
  try {
    await client.post('/quiz/create', {
      gameMode,
      name,
      questions: questionIds,
      userId,
    });
    toast.success('Questionário criado com sucesso!');
  } catch (error) {
    toast.error('Erro ao criar questionário!');
  }
};

export const list = async (userId) => {
  try {
    const response = await client.get(`/user/${userId}/quizzes`);
    return response.data;
  } catch (error) {
    toast.error('Erro ao buscar questionários!');
    return undefined;
  }
};

export const getByCode = async (quizCode) => {
  try {
    const response = await client.get(`/quiz/code/${quizCode}`);
    return response.data;
  } catch (error) {
    toast.error('Erro ao buscar questionário!');
    return undefined;
  }
};

export const update = async ({ gameMode, name, questions, quizId, userId }) => {
  try {
    const response = await client.put(`/quiz/update/${quizId}`, {
      gameMode,
      name,
      questions,
      userId,
    });
    toast.success('Questionário atualizado com sucesso!');
  } catch (error) {
    toast.error('Erro ao atualizar questionário!');
  }
};

export const archive = async (quizId) => {
  try {
    const response = await client.delete(`/quiz/${quizId}`);
    toast.success('Questionário excluído com sucesso!');
  } catch (error) {
    toast.error('Erro ao excluir questionário!');
  }
};

export const publish = async (quizId) => {
  try {
    const response = await client.patch(`/quiz/${quizId}/publish`);
    toast.success('Questionário publicado com sucesso!');
  } catch (error) {
    toast.error('Erro ao publicar questionário!');
  }
};
