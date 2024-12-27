import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ItemStyled, TitleStyled } from './item.style';

const Icon = () => {
    return (
        <img
            src={`${__webpack_public_path__}/remote-assets/images/meme.jpg`}
            alt={'Фото вопроса'}
            width={334}
            height={200}
        />
    );
};

export default function QuestionCard({ cardHeight, cardNum }) {
    const cardTitle = 'Вопрос ' + String(cardNum);

    return (
        <Card
            sx={{
                maxWidth: 345,
                height: cardHeight,
                color: '#FFC073',
                backgroundColor: '#2A1F5F',
                borderRadius: '30px'
            }}
        >
            <ItemStyled>
                <CardHeader title={cardTitle} />
            </ItemStyled>
            <Icon></Icon>
            <CardContent>
                <Typography
                    variant="body2"
                    //aria-owns={open ? 'mouse-over-popover' : undefined}
                    height="400"
                    //aria-haspopup="true"
                >
                    <TitleStyled>Текст вопроса...</TitleStyled>
                </Typography>
            </CardContent>
        </Card>
    );
}
