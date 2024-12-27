import styled from '@emotion/styled';
import { CardContent } from '@mui/material';

export const ItemStyled = styled.div`
    color: #f19502;
    background-color: rgb(0 0 0 / 87%);
`;


export const CardContentStyled = styled(CardContent)<{ contentHeight: number }>`
    position: relative;
    max-height: 600px;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: orange; 
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition:
        all 0.6s ease;

    &.expanded {
        white-space: normal;
        height: ${({ contentHeight = 0 }) => contentHeight}px;
        z-index: 10;
        position: absolute;
        top: 0;
        background-color: black;
        color: orange;
        left: 0;
        opacity: 0.85;
        right: 0;
    }
`;
