import React from 'react';
import { BodyDivStyled } from './index.style';

const BodyDiv = ({ children }): React.ReactElement => {
    return <BodyDivStyled>{children}</BodyDivStyled>;
};

export default BodyDiv;
