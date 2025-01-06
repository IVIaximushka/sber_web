import QuestionCard from '../questionCard/questionCard';
import React from 'react';
import { MasonryBoxStyled } from './masonryBox.style';
import { MasonryStyled } from './masonry.style';

const heights = [400, 500, 600, 400, 400];

export default function CardsMasonry() {
    return (
        <MasonryBoxStyled>
            <MasonryStyled columns={2} spacing={2}>
                {heights.map((height, index) => (
                    <QuestionCard cardHeight={height} cardNum={index + 1}></QuestionCard>
                ))}
            </MasonryStyled>
        </MasonryBoxStyled>
    );
}
