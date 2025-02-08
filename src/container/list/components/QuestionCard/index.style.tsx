import styled from '@emotion/styled';
import Card from '@mui/material/Card';

export const CardStyled = styled(Card)<{ cardHeight: number }>`
    position: relative;
    height: ${({ cardHeight = 500 }) => cardHeight}px;
    background-color: black;
    border-radius: 30px;
`;
