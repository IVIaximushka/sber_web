import React from 'react';
import { getNavigationValue } from '@brojs/cli';
import { Box, Typography, Toolbar } from '@mui/material';
import RefButton from '../../../../components/ref-button';
import IcButton from '../../../../components/icon-button';
import { HeaderStyled } from './index.style';

const navigations: Array<{ name: string; href: string }> = [
    {
        name: 'Главная',
        href: getNavigationValue('sber_web.main')
    },
    {
        name: 'Детальная информация',
        href: getNavigationValue('sber_web.detail')
    },

    {
        name: 'Редактировать',
        href: getNavigationValue('sber_web.edit')
    }
];

const Header = (): React.ReactElement => {
    return (
        <HeaderStyled position="static">
            <Toolbar>
                <IcButton href={getNavigationValue('sber_web.main')} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Что? Где? Когда?
                </Typography>
                <Box>
                    {navigations.map((item) => (
                        <RefButton key={item.name} name={item.name} href={item.href} />
                    ))}
                </Box>
            </Toolbar>
        </HeaderStyled>
    );
};

export default Header;
