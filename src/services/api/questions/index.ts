import { network } from '../netwotk';
import { GetListResponse } from './types';

class ListService {
    async getList(page = 1): Promise<GetListResponse> {
        const res = await network.get(`/questions/${page}`);
        return res.data['hydra:member'];
    }
}

export const listService = new ListService();
