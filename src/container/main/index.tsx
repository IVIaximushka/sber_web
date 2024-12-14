import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import BodyDiv from './body-div';

const Main = (): React.ReactElement => {
    return (
        <BodyDiv>
            <RouterProvider router={router} />
        </BodyDiv>
    );
};

export default Main;
