import * as React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { AnswerSlideStyled } from './index.style';
import AnswerContainer from '../AnswerContainer';
import { ButtonStyled } from '../../../components/ButtonStyled/index.style';
import AnswerPicture from '../AnswerPicture';

const AnswerSlide = ({ answer, comment, author }): React.ReactElement => {
    const [checked, setChecked] = React.useState(false);

    const handleClick = () => {
        setChecked((prev) => !prev);
    };

    return (
        <AnswerSlideStyled>
            <ButtonStyled variant="outlined" onClick={handleClick}>
                {checked ? 'Скрыть' : 'Открыть ответ'}
            </ButtonStyled>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box height="100%">
                    {answer && <AnswerContainer answer={answer} comment={comment} author={author} />}
                </Box>
            </Slide>
            {!checked && <AnswerPicture name={'trans_owl'} />}
        </AnswerSlideStyled>
    );
};

export default AnswerSlide;
