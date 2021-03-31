import React from 'react';
import { Redirect } from 'react-router-dom';

const SQHomePage = React.lazy(() => import('@/pages/home'));
const SQArticlePage = React.lazy(() => import('@/pages/article'));
const SQEditPage = React.lazy(() => import('@/pages/edit'));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: SQHomePage,
  },
  {
    path: '/article/:id',
    component: SQArticlePage,
  },
  {
    path: '/edit',
    component: SQEditPage,
  },
];

export default routes;
