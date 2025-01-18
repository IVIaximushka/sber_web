import React from 'react';
import { getNavigationsValue } from '@brojs/cli';
import { Typography, Toolbar } from '@mui/material';
import IcButton from '../../../../components/icon-button';
import { FooterStyled } from './index.style';

const Footer = (): React.ReactElement => {
    return (
        <FooterStyled position="static">
            <Toolbar>
                <IcButton href={getNavigationsValue('sber_web.main')} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Совершенно неофициальный сайт игры Что? Где? Когда?
                </Typography>
            </Toolbar>
        </FooterStyled>
    );
};

export default Footer;
