import React from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogDiv } from './index.style';
import { Button } from '@mui/material';

const DialogWindow = ({ open, onClose }): React.ReactElement => {
    return (
        <DialogDiv open={open} onClose={onClose}>
            <DialogTitle>Ваш вопрос был отправлен!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ваш вопрос отправлен в нашу базу данных! Мы его внимательно рассмотрим, и он будет доступен на сайте
                    только после одобрения администратором. Благодарим за ваше участие!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="warning" variant="outlined">
                    Закрыть
                </Button>
            </DialogActions>
        </DialogDiv>
    );
};

export default DialogWindow;
