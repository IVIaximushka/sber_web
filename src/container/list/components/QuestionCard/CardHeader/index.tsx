import React from 'react';
import { CardHeaderStyled } from './index.style';

const CardHeader = ({ cardTitle }): React.ReactElement => {
    return <CardHeaderStyled title={cardTitle} />;
};

export default CardHeader;
