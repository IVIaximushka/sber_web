import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// import ListPage from '../list';
// import DetailPage from '../detail';
import { getNavigationsValue } from '@brojs/cli';
import Layout from './components/layout';

export const router = createBrowserRouter([
    {
        path: getNavigationsValue('kfu-24-teacher.main'),
        element: <Layout />,
        children: [
            // {
            //     path: getNavigationsValue('kfu-24-teacher.main'),
            //     element: <ListPage />
            // },
            // {
            //     path: getNavigationsValue('kfu-24-teacher.detail'),
            //     element: <DetailPage />
            // }
        ]
    }
]);