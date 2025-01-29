import * as React from 'react';
import { NotFoundPictureStyled } from './index.style';

const NotFoundPicture = () => {
    return (
        <NotFoundPictureStyled>
            <img
                src={`${__webpack_public_path__}/remote-assets/images/404error.png`}
                alt={'Архивное фото из передачи Что?Где?Когда?'}
            />
        </NotFoundPictureStyled>
    );
};

export default NotFoundPicture;
