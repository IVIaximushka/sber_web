import React from 'react';
import { LoadingIconStyled } from './index.styled';
import { Circular } from './Circular/index.styled';
import LoadingPict from './LoadingPict';

const LoadingIcon = () => {
    return (
        <LoadingIconStyled>
            <Circular size={'9.5rem'} />
            <LoadingPict />
        </LoadingIconStyled>
    );
};

export default LoadingIcon;
