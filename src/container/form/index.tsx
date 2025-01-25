import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormPageStyled } from './index.style';
import TextInput from './components/TextInput';
import DialogWindow from './components/DialogWindow';
import { ButtonStyled } from './components/ButtonStyled/index.style';

const FormPage = (): React.ReactElement => {
    const {
        handleSubmit,
        reset,
        register,
        formState: { errors }
    } = useForm();

    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        reset();
        setDialogOpen(true);
    };

    return (
        <div>
            <FormPageStyled>
                <h1>Отправь свой вопрос!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInput label="Текст вопроса" name="question" register={register} />
                    <TextInput label="Текст ответа" name="answer" register={register} />
                    <TextInput label="Комментарий к ответу" name="comment" register={register} />
                    <TextInput label="ФИО" name="fullname" register={register} />
                    <TextInput label="Адрес электронной почты" name="email" errors={errors} register={register} />
                    <TextInput label="Дополнительная информация" name="addit" required={false} register={register} />
                    <ButtonStyled type="submit" color="warning" variant="contained">
                        Отправить вопрос
                    </ButtonStyled>
                </form>
                <DialogWindow open={dialogOpen} onClose={() => setDialogOpen(false)} />
            </FormPageStyled>
        </div>
    );
};

export default FormPage;
