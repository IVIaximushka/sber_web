import React from 'react';
import { MainStyled } from './index.style';

const Main = ({ children }): React.ReactElement => {
    return <MainStyled>{children}</MainStyled>;
};

export default Main;
