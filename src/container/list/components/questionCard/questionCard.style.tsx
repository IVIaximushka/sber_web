import styled from '@emotion/styled';
import Card from '@mui/material/Card';

export const CardStyled = styled(Card)<{ cardHeight: number }>`
    position: relative;
    max-width: 345px;
    height: ${({ cardHeight = 0 }) => cardHeight}px;
    color: #FFC073;
    background-color: rgba(30,15,44,0.96);
    border-radius: 30px;
`;