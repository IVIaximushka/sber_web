import React from 'react';
import { LoadingPictStyled } from './index.styled';

const LoadingPict = () => {
    return (
        <LoadingPictStyled>
            <img src={`${__webpack_public_path__}/remote-assets/images/load.png`} alt={'Загрузка'} />
        </LoadingPictStyled>
    );
};

export default LoadingPict;
