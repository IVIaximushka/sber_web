import React from 'react';
import { FormPictStyled } from './FormPictStyled';

const FormPict = () => {
    return (
        <FormPictStyled>
            <img src={`${__webpack_public_path__}/remote-assets/images/form.jpg`} alt={'Студия из Что?Где?Логда?'} />
        </FormPictStyled>
    );
};

export default FormPict;