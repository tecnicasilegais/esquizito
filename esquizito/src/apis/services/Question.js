import { toast } from 'sonner';
import client from 'apis/client';

export const create = async ({
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
    toast.success('Pergunta criada com sucesso!');
  } catch (error) {
    toast.error('Erro ao criar pergunta!');
  }
};

export const list = async (userId) => {
  try {
    const response = await client.get(`/user/${userId}/questions`);
    return response.data;
  } catch (error) {
    toast.error('Erro ao buscar perguntas!');
    return undefined;
  }
};

export const update = async ({
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
    toast.success('Pergunta atualizada com sucesso!');
  } catch (error) {
    toast.error('Erro ao atualizar pergunta!');
  }
};

export const remove = async (questionId) => {
  try {
    const response = await client.delete(`/question/${questionId}`);
    toast.success('Pergunta excluída com sucesso!');
  } catch (error) {
    toast.error('Erro ao excluir pergunta!');
  }
};
