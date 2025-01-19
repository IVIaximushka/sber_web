import QuestionCard from '../QuestionCard';
import React, { useState } from 'react';
import { QuestionListStyled } from './index.style';
import { useGetListQuery } from '../../../../store/api';

const heights = [400, 500, 600, 400, 400];

const QuestionList = () => {
    const { data, isLoading, error } = useGetListQuery({});
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Произошла ошибка</div>}
            {data?.map((item) => {
                return (
                    <div key={item.id}>
                        {item.id}: {item.question} - {item.answer}
                    </div>
                );
            })}

            <QuestionListStyled columns={2} spacing={2}>
                {heights.map((height, index) => (
                    <QuestionCard cardHeight={height} cardNum={index + 1}></QuestionCard>
                ))}
            </QuestionListStyled>
        </>
    );
};

export default QuestionList;
