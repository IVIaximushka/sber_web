import React from 'react';
import { AnswerContainerStyled } from './index.style';
import { ButtonGroupStyled } from './ButtonGroupStyled.tsx/index.style';
import { AnswerDivStyled } from './AnswerDivStyled/index.style';
import { ButtonMiniStyled } from './ButtonGroupStyled.tsx/ButtonMiniStyled/index.style';

const AnswerContainer = ({ answer, comment, author }): React.ReactElement => {
    const [currentView, setCurrentView] = React.useState('answer');

    const handleButtonClick = (view) => {
        setCurrentView(view);
    };
    return (
        <AnswerContainerStyled>
            {currentView === 'answer' && <AnswerDivStyled>{answer}</AnswerDivStyled>}
            {currentView === 'author' && <AnswerDivStyled>Автор вопроса: {author}</AnswerDivStyled>}
            {currentView === 'comment' && <AnswerDivStyled>{comment}</AnswerDivStyled>}
            <ButtonGroupStyled variant="outlined" aria-label="Basic button group">
                <ButtonMiniStyled
                    onClick={() => handleButtonClick('answer')}
                    className={currentView === 'answer' ? 'active' : ''}
                >
                    Овет
                </ButtonMiniStyled>
                <ButtonMiniStyled
                    onClick={() => handleButtonClick('comment')}
                    className={currentView === 'comment' ? 'active' : ''}
                >
                    Комментарий к ответу
                </ButtonMiniStyled>
                <ButtonMiniStyled
                    onClick={() => handleButtonClick('author')}
                    className={currentView === 'author' ? 'active' : ''}
                >
                    Дополнительная информвция
                </ButtonMiniStyled>
            </ButtonGroupStyled>
        </AnswerContainerStyled>
    );
};

export default AnswerContainer;
