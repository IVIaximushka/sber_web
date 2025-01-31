import styled from '@emotion/styled';
import { CardContent } from '@mui/material';

export const CardContentStyled = styled(CardContent)`
    position: relative;
    max-height: 600px;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: orange;
    transition: all 0.6s ease;

    &.expanded {
        white-space: normal;
        height: 400px;
        z-index: 10;
        position: absolute;
        top: 0;
        background-color: black;
        color: orange;
        left: 0;
        right: 0;
    }
`;
