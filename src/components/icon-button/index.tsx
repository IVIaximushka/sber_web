import React from 'react';
import { IcButtonStyled, IcLinkStyled } from './index.style';
import Icon from '../icon';

const IcButton = ({ href = '' }) => {
    return (
        <IcButtonStyled size="large" edge="start" color="inherit" aria-label="menu">
            <IcLinkStyled to={href}>
                <Icon />
            </IcLinkStyled>
        </IcButtonStyled>
    );
};

export default IcButton;
