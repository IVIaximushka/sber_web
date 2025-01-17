import styled from '@emotion/styled';
import { Dialog, Button } from '@mui/material';

export const DialogDiv = styled(Dialog)`
    .MuiDialog-paper {
        background-color: rgb(230, 225, 225); // цвет фона диалога
        color: black; // Цвет текста
    };
    background-color: rgba(0, 0, 0, 0.5);
`;

export const DialogButton = styled(Button)`
    color: #f19502;
    &:hover {
        background-color: rgba(241, 149, 2, 0.25);
    }
`;
