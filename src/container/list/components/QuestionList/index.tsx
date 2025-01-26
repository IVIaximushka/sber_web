import QuestionCard from '../QuestionCard';
import React from 'react';
import { QuestionListStyled } from './index.style';
import { useGetListQuery } from '../../../../store/api';
import { validateText } from './questionTextValidation';
import { truncateText } from './questionTextTruncation';

const QuestionList = () => {
    const { data, isLoading, error } = useGetListQuery({});
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка</div>}
            <QuestionListStyled columns={3} spacing={2}>
                {data?.map((item) => (
                    <QuestionCard fullText={validateText(item.question)}>
                        {truncateText(validateText(item.question))}
                    </QuestionCard>
                ))}
            </QuestionListStyled>
        </>
    );
};

export default QuestionList;
