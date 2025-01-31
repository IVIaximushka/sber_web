import * as React from 'react';
import { AnswerPictureStyled } from './index.style';

const AnswerPicture = ({ name }) => {
    return (
        <AnswerPictureStyled>
            <img src={`${__webpack_public_path__}/remote-assets/images/${name}.gif`} alt={' '} />
        </AnswerPictureStyled>
    );
};

export default AnswerPicture;
