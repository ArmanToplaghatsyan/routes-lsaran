import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ShowProduct } from '../../pages/ShowProduct';
import { ShowUser } from '../../pages/ShowUser';
import { AddUser } from '../../pages/AddUser';
import { AddProduct } from '../../pages/AddProduct';
import { DetailsProduct } from '../../pages/DetailsProduct/index.';
import { DetailsUser } from '../../pages/DetailsUser';
import { MyError } from '../../pages/MyError';

export const MyRoutes = React.memo(() => {
  const router = useRoutes([
    { path: '/', element: <ShowProduct /> },
    { path: '/showUsers', element: <ShowUser /> },
    { path: '/addUsers', element: <AddUser /> },
    { path: '/addProducts', element: <AddProduct /> },
    { path: '/userDetails/:id', element: <DetailsUser /> },
    { path: '/productDetails/:id', element: <DetailsProduct /> },
    { path: '*', element: <MyError /> },
  ]);
  return router;
});
