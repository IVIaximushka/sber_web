import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {DialogDiv, DialogButton} from './DialogWindow.style';

const DialogWindow = ({open, onClose}): React.ReactElement => {
    return (
            <DialogDiv
                open={open}
                onClose={onClose}
            >
            <DialogTitle>Ваш вопрос был отправлен!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ваш вопрос отправлен в нашу базу данных! 
                    Мы его внимательно рассмотрим, и он будет 
                    доступен на сайте только после одобрения 
                    администратором. Благодарим за ваше участие!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <DialogButton onClick={onClose}>Закрыть</DialogButton>
            </DialogActions>
        </DialogDiv>

    );
}

export default DialogWindow;