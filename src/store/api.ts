import { createApi, fetchBaseQuery, QueryReturnValue } from '@reduxjs/toolkit/query/react';
import { GetListResponse } from '../services/api/questions/types';
import { listService } from '../services/api/questions';

const createQueryFromPromise =
    <ARGS, RES>(fn: (...args: Array<ARGS>) => Promise<RES>) =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (...args): Promise<QueryReturnValue<RES, any, any>> => {
        try {
            const data = await fn(...args);
            return { data };
        } catch (e: unknown) {
            return { error: e };
        }
    };

// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getList: builder.query<GetListResponse, number>({
            queryFn: createQueryFromPromise((page: number) =>
                listService.getList(page)
            )
        })
    })
});

export const { useGetListQuery } = api;
