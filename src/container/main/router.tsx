import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ListPage from '../list';
import DetailPage from '../detail';
import FormPage from '../form';
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
    {
        path: getNavigationsValue('sber_web.main'),
        element: <Layout />,
        children: [
            {
                path: getNavigationsValue('sber_web.main'),
                element: <ListPage />
            },
            {
                path: getNavigationsValue('sber_web.detail'),
                element: <DetailPage />
            },
            {
                path: getNavigationsValue('sber_web.edit'),
                element: <FormPage />
            }
        ]
    }
]);
