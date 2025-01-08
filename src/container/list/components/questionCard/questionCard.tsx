import * as React from 'react';
import { useState } from 'react';
import { CardContentStyled } from './cardContent.style';
import { CardStyled } from './questionCard.style';
import { CardHeaderStyled } from './cardHeader.style';
import QuestionPic from './questionPic';

const QuestionCard = ({ cardHeight, cardNum }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardTitle = 'Вопрос ' + String(cardNum);

    return (
        <CardStyled
            cardHeight={cardHeight}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeaderStyled title={cardTitle}></CardHeaderStyled>
            <QuestionPic></QuestionPic>
            <CardContentStyled contentHeight={cardHeight * 1.2} className={isHovered ? 'expanded' : ''}>
                Перед вами тарелка с мясом, плошка с просом и колесо. Выносят черный ящик. Если к этим предметам и
                можно, что-то добавить, то только то, что находится в черном ящике. Так что же в нем?
            </CardContentStyled>
        </CardStyled>
    );
};

export default QuestionCard;
