import styled from '@emotion/styled';

export const FormPictStyled = styled.div`
    position: fixed; 
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%; 
    z-index: -1; /* изображение на заднем плане */

    img {
        width: 100%; 
        height: auto; 
    }
`;