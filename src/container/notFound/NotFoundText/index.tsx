import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { ButtonStyled } from '../ButtonStyled/index.style';
import { NotFoundTextStyled } from './index.style';
import { getNavigationValue } from '@brojs/cli';

const NotFoundText = (): React.ReactElement => {
    return (
        <NotFoundTextStyled>
            <Typography variant="h3" gutterBottom color="white">
                Уважаемый знаток!
            </Typography>
            <Typography variant="h5" gutterBottom color="white">
                Такой страницы не существует, вернитесь на главную.
            </Typography>
            <ButtonStyled variant="outlined" href={getNavigationValue('sber_web.main')}>
                Вернуться
            </ButtonStyled>
        </NotFoundTextStyled>
    );
};

export default NotFoundText;
