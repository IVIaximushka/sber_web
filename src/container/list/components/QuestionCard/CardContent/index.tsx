import React from 'react';
import { CardContentStyled } from './index.style';
import CardContentHover from "./OnHover";

const CardContent = ({ className, children }): React.ReactElement => {
    return <CardContentStyled className={className}>{className=='expanded' ? <CardContentHover fullText={children} /> : children}</CardContentStyled>;
};

export default CardContent;
