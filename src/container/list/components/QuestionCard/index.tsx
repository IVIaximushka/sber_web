import * as React from 'react';
import { useState } from 'react';
import { CardStyled } from './index.style';
import QuestionPicture from '../../../../components/QuestionPicture/questionPicture';
import CardContent from './CardContent';

const QuestionCard = ({ fullText, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CardStyled elevation={10} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <QuestionPicture />
            <CardContent className={isHovered ? 'expanded' : ''}>{isHovered ? fullText : children}</CardContent>
        </CardStyled>
    );
};

export default QuestionCard;
