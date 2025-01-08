import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ListPage from '../list';
import DetailPage from '../detail';
import FormPage from '../form';
import { getNavigationValue } from '@brojs/cli';
import Layout from './components';

export const router = createBrowserRouter([
    {
        path: getNavigationValue('sber_web.main'),
        element: <Layout />,
        children: [
            {
                path: getNavigationValue('sber_web.main'),
                element: <ListPage />
            },
            {
                path: getNavigationValue('sber_web.detail'),
                element: <DetailPage />
            },
            {
                path: getNavigationValue('sber_web.edit'),
                element: <FormPage />
            }
        ]
    }
]);
