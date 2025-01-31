import { network } from '../netwotk';
import { GetListResponse, Question } from './types';

class QuestionService {
    async getQuestion(id: string): Promise<Question> {
        const res = await network.get(`/question/${id}`);
        return res.data;
    }
}

class ListService {
    async getList(page = 1): Promise<GetListResponse> {
        const res = await network.get(`/questions/${page}`);
        return res.data['hydra:member'];
    }
}

export const questionService = new QuestionService();

export const listService = new ListService();
