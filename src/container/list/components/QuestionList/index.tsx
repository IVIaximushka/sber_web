import QuestionCard from '../QuestionCard';
import React from 'react';
import { QuestionListStyled } from './index.style';
import { useGetListQuery } from '../../../../store/api';
import {validateText} from './questionTextValidation';

const heights = [400, 500, 600, 400, 400];

const QuestionList = () => {
    const { data, isLoading, error } = useGetListQuery({});
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка</div>}
            <QuestionListStyled columns={2} spacing={2}>

                {data?.map((item, index) => (
                    <QuestionCard cardNum={index + 1}>
                        {validateText(item.question)} - {item.answer}
                    </QuestionCard>

                ))}
            </QuestionListStyled>
        </>
    );
};

export default QuestionList;
