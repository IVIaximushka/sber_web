import * as React from 'react';
import { useState } from 'react';
import { CardStyled } from './index.style';
import QuestionPicture from '../../../../components/QuestionPicture/questionPicture';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

const QuestionCard = ({cardNum, children}) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardTitle = 'Вопрос ' + String(cardNum);

    return (
        <CardStyled
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader cardTitle={cardTitle} />
            <QuestionPicture />
            <CardContent className={isHovered ? 'expanded' : ''}>{children}</CardContent>
        </CardStyled>
    );
};

export default QuestionCard;
