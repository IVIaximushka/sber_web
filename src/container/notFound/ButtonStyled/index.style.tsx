import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonStyled = styled(Button)`
    border-radius: 30px;
    border-color: white;
    color: white;
    width: 20%;
    font-weight: bold;
    margin-top: 1%;

    &:hover {
        background-color: white;
        color: black;
    }
`;
