import React from 'react';
import { Redirect } from 'react-router-dom';

const SQHome = React.lazy(() => import('@/pages/home'));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: SQHome,
  },
];

export default routes;
