import React from 'react';
import { CardContentStyled } from './index.style';
import { useGetListQuery } from '../../../../../store/api';

const CardContent = ({ className, children }): React.ReactElement => {
    return <CardContentStyled className={className}>{children}</CardContentStyled>;
};

export default CardContent;
