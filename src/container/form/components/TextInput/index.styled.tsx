import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const TextInputStyled = styled(TextField)`
    background-color: rgba(230, 225, 225, 0.75);
    margin-top: 2%;
    display: flex;

    textarea {
        overflow: hidden; // скрываем линию прокрутки
    }
`;
