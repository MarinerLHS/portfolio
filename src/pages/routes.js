import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from './Home';

const routersMap = [
  {
    paths: '/',
    element: <HomePage />,
  },
];

export const Routes = () => useRoutes(routersMap);
