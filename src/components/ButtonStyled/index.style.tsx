import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonStyled = styled(Button)`
    color: black;
    font-weight: bold;
    border-radius: 25px;
    border: solid 3px #f19502;
    width: 40%;
    margin-bottom: 3%;
    margin-top: 1.5%;

    &:hover {
        background-color: #f19502;
        color: white;
    }
`;
