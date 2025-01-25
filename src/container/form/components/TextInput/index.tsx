import React from 'react';
import { TextField } from '@mui/material';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const TextInput = ({ name, label, required = true, errors = {}, register, ...props }) => {
    const isMultiline = ['question', 'answer', 'comment'].includes(name);
    const type = ['email'].includes(name) ? 'email' : 'string';

    let validationRules = {};
    if (name === 'email') {
        validationRules = {
            pattern: {
                value: emailRegex,
                message: 'Адрес электронной почты должен иметь вид: user@domain.com'
            }
        };
    }

    const hasError = !!errors[name];

    return (
        <TextField
            required={required}
            label={label}
            id="outlined-multiline"
            margin="dense"
            fullWidth
            name={name}
            color="warning"
            multiline={isMultiline}
            rows={2}
            type={type}
            error={hasError}
            helperText={hasError && errors[name]?.message}
            {...register(name, validationRules)}
            {...props}
        />
    );
};
export default TextInput;
