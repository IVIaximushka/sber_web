import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonStyled = styled(Button)`
    margin: 2% auto; 
    width: 40%;
    border-radius: 30px;
    border: solid 2px rgb(109, 105, 105); 
    background-color: #f19502; 
    color: black; 
    font-weight: bold;
    font-size: 12px;

    &:hover {
        background-color: #ff6702; // цвет фона при наведении
    }
`;