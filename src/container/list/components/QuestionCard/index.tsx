import * as React from 'react';
import { useState } from 'react';
import { CardStyled } from './index.style';
import QuestionPicture from '../../../../components/QuestionPicture/questionPicture';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

const QuestionCard = ({ cardHeight, cardNum }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardTitle = 'Вопрос ' + String(cardNum);

    return (
        <CardStyled
            cardHeight={cardHeight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader cardTitle={cardTitle} />
            <QuestionPicture />
            <CardContent contentHeight={cardHeight * 1.2} className={isHovered ? 'expanded' : ''} />
        </CardStyled>
    );
};

export default QuestionCard;
