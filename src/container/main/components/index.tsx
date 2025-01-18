import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { LayoutStyled } from './index.style';

const Layout = (): React.ReactElement => {
    return (
        <LayoutStyled>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </LayoutStyled>
    );
};

export default Layout;
