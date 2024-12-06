import React from 'react';
import { Button } from '@mui/material';
import { RefButtonStyled, RefLinkStyled } from './index.style';

const RefButton = ({ name, href='' }) => {
    return (
        <RefButtonStyled key={name}>
            <RefLinkStyled to={href}>
                {name}
            </RefLinkStyled>
        </RefButtonStyled>
    );
};

export default RefButton