import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';

const Layout = (): React.ReactElement => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
