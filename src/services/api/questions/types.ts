export interface Question {
    id: string;
    tour: string;
    number: number;
    type: string;
    question: string;
    answer: string;
    passCriteria: string;
    authors: string;
    sources: string;
    comments: string;
}

export type GetListResponse = Array<Question>;
