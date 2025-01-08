import styled from '@emotion/styled';
import { AppBar } from '@mui/material';

export const HeaderStyled = styled(AppBar)`
    background-color: black;
`;

export const MainStyled = styled.main`
    // Какие-то стили для содержимого страницы (например шрифты)
    flex-grow: 1;
`;

export const FooterStyled = styled(AppBar)`
    background-color: black;
    position: relative;
    bottom: 0;
`;

export const LayoutStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.54);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;
