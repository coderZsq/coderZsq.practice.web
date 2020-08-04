import React from 'react'

import SQDiscover from '@/pages/discover'
import SQRecommend from '../pages/discover/c-pages/recommend'
import SQRanking from '../pages/discover/c-pages/ranking'
import SQSongs from '../pages/discover/c-pages/songs'
import SQDjradio from '../pages/discover/c-pages/djradio'
import SQArtist from '../pages/discover/c-pages/artist'
import SQAlbum from '../pages/discover/c-pages/album'

import SQMine from '@/pages/mine'
import SQFriend from '@/pages/friend'
import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: '/discover',
    component: SQDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend' />
        )
      },
      {
        path: '/discover/recommend',
        component: SQRecommend
      },
      {
        path: '/discover/ranking',
        component: SQRanking
      },
      {
        path: '/discover/songs',
        component: SQSongs
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: SQDjradio
      },
      {
        path: '/discover/artist',
        component: SQArtist
      },
      {
        path: '/discover/album',
        component: SQAlbum
      }
    ]
  },
  {
    path: '/mine',
    component: SQMine
  },
  {
    path: '/friend',
    component: SQFriend
  },
]

export default routes
