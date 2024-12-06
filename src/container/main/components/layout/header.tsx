import React from 'react';
import { getNavigationsValue } from '@brojs/cli';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import RefButton from '../../../../components/ref-button';
import IcButton from '../../../../components/icon-button';

const navigations: Array<{ name: string; href: string }> = [
    {
        name: 'Главная',
        href: getNavigationsValue('sber_web.main')
    },
    {
        name: 'Детальная информация',
        href: getNavigationsValue('sber_web.detail')
    },

    {
        name: 'Редактировать',
        href: getNavigationsValue('sber_web.edit')
    }
];

const Header = (): React.ReactElement => {
    return (
        <Box>
            <AppBar position="static" sx={{ bgcolor: 'black' }}>
                <Toolbar>
                    <IcButton href={getNavigationsValue('sber_web.main')} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Что? Где? Когда?
                    </Typography>
                    <Box>
                        {navigations.map((item) => (
                            <RefButton key={item.name} name={item.name} href={item.href} />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
