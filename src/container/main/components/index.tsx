import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';
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
