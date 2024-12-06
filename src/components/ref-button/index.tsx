import React from 'react';
import { RefButtonStyled, RefLinkStyled } from './index.style';

const RefButton = ({ name, href = '' }) => {
    return (
        <RefButtonStyled>
            <RefLinkStyled to={href}>{name}</RefLinkStyled>
        </RefButtonStyled>
    );
};

export default RefButton;
