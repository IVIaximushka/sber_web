import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonMiniStyled = styled(Button)`
    border-color: #f19502;
    color: black;
    font-weight: bold;

    &.active {
        background-color: #f19502;
        color: white;
    }

    &:hover {
        background-color: #f19502;
    }
`;
