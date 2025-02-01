import styled from '@emotion/styled';

export const MainStyled = styled.main`
    // Какие-то стили для содержимого страницы (например шрифты)
    flex-grow: 1;
    display: flex;
    justify-content: center;

    background-image: linear-gradient(to right top, #f19502, #c3612b, #873a2f, #451f23, #000000);
    background-size: 400% 400%;
    animation: AnimateBG 10s ease infinite;

    @-webkit-keyframes AnimateBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes Animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
