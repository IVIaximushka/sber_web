import React from 'react';
import { IcButtonStyled, IcLinkStyled } from './index.style';
import logo from '../../static/images/logo.png';

const IcButton = ({ href = '' }) => {
    return (
        <IcButtonStyled size="large" edge="start" color="inherit" aria-label="menu">
            <IcLinkStyled to={href}>
                <img src={logo} alt={'Логотип'} width={50} />
            </IcLinkStyled>
        </IcButtonStyled>
    );
};

export default IcButton;
