import React from 'react';
import { NotFoundPagerStyled } from './index.style';
import NotFoundPicture from './NotFoundPicture';
import NotFoundText from './NotFoundText';

const NotFoundPage = (): React.ReactElement => {
    return (
        <NotFoundPagerStyled>
            <NotFoundPicture />
            <NotFoundText />
        </NotFoundPagerStyled>
    );
};

export default NotFoundPage;
