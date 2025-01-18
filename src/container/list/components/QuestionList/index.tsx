import QuestionCard from '../QuestionCard';
import React from 'react';
import { QuestionListStyled } from './index.style';

const heights = [400, 500, 600, 400, 400];

const QuestionList = () => {
    return (
            <QuestionListStyled columns={2} spacing={2}>
                {heights.map((height, index) => (
                    <QuestionCard cardHeight={height} cardNum={index + 1}></QuestionCard>
                ))}
            </QuestionListStyled>
    );
};

export default QuestionList;
