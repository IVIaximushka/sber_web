import React from 'react';
import { TextInputStyled } from './index.styled';

const TextInput = ({ placeholder, row, required = false, register, ...props }): React.ReactElement => {
    const updatePlaceholder = required ? `${placeholder} *` : placeholder;

    return (
        <TextInputStyled
            required={required}
            placeholder={updatePlaceholder}
            multiline
            rows={row}
            {...register(props.name)}
            {...props}
        />
    );
};

export default TextInput;
