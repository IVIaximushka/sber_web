import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { FormPageStyled } from './FormPageStyled';
import TextInput from './components/TextInput';
import DialogWindow from './components/DialogWindow';
import { ButtonStyled } from './components/ButtonStyled';
import FormPict from './components/FormPict';

const FormPage = (): React.ReactElement => {
    const { register, handleSubmit, reset } = useForm();

    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit = (data) => {
        console.log(data); 
        setDialogOpen(true);
        reset(); 
    };
    
    return (
        <div>
        <FormPict />    
        <FormPageStyled>
            
            <h1>Отправь свой вопрос!</h1>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <TextInput placeholder='Текст вопроса' row={2} required name='question' register={register} />
                <TextInput placeholder='Текст ответа' row={2} required name='answer' register={register} />
                <TextInput placeholder='Комментарий к ответу' row={2} required name='comment' register={register} />
                <TextInput placeholder='ФИО' row required name='fullName' register={register} />     
                <TextInput placeholder='Адрес электронной почты' row required name='email' register={register} />
                <TextInput placeholder='Дополнительная информация' row name='addit' register={register} />
                <ButtonStyled type="submit">Отправить</ButtonStyled>        
            </form>
            <DialogWindow open={dialogOpen} onClose={() => setDialogOpen(false)} /> 
        </FormPageStyled>
        </div>
    );
};

export default FormPage;
