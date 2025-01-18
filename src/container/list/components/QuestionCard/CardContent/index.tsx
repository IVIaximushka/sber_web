import React from 'react';
import { CardContentStyled } from './index.style';

const CardContent = ({ contentHeight, className }): React.ReactElement => {
    return (
        <CardContentStyled contentHeight={contentHeight} className={className}>
            Перед вами тарелка с мясом, плошка с просом и колесо. Выносят черный ящик. Если к этим предметам и можно,
            что-то добавить, то только то, что находится в черном ящике. Так что же в нем?
        </CardContentStyled>
    );
};

export default CardContent;
