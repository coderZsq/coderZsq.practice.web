import React from 'react';
import { Redirect } from 'react-router-dom';

const SQHomePage = React.lazy(() => import('@/pages/home'));
const SQArticlePage = React.lazy(() => import('@/pages/article'));
const SQEditorPage = React.lazy(() => import('@/pages/editor'));

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
    path: '/editor/:id',
    component: SQEditorPage,
  },
  {
    path: '/editor',
    component: SQEditorPage,
  },
];

export default routes;
