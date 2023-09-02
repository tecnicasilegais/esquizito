import questionRepository from 'repositories/question';

const get = async (questionId) => questionRepository.get(questionId);

const create = async (question) => questionRepository.create(question);

export default { get, create };
