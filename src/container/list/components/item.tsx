import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { ItemStyled, CardContentStyled } from './item.style';
import { useState } from 'react';

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
    const [isHovered, setIsHovered] = useState(false);
    const cardTitle = 'Вопрос ' + String(cardNum);

    return (
        <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative' }}
            sx={{
                maxWidth: 345,
                height: cardHeight,
                color: '#FFC073',
                backgroundColor: 'rgba(30,15,44,0.96)',
                borderRadius: '30px'
            }}
        >
            <ItemStyled>
                <CardHeader title={cardTitle} />
            </ItemStyled>
            <Icon></Icon>
            <CardContentStyled contentHeight={cardHeight * 1.2} className={isHovered ? 'expanded' : ''}>
                Перед вами тарелка с мясом, плошка с просом и колесо. Выносят черный ящик. Если к этим предметам и
                можно, что-то добавить, то только то, что находится в черном ящике. Так что же в нем?
            </CardContentStyled>
        </Card>
    );
}
