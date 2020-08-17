import React from 'react'
import { Redirect } from 'react-router-dom'

const SQDiscover = React.lazy(() => import('@/pages/discover'))
const SQRecommend = React.lazy(_ => import('../pages/discover/c-pages/recommend'))
const SQRanking = React.lazy(_ => import('../pages/discover/c-pages/ranking'))
const SQSongs = React.lazy(_ => import('../pages/discover/c-pages/songs'))
const SQDjradio = React.lazy(_ => import('../pages/discover/c-pages/djradio'))
const SQArtist = React.lazy(_ => import('../pages/discover/c-pages/artist'))
const SQAlbum = React.lazy(_ => import('../pages/discover/c-pages/album'))
const SQPlayer = React.lazy(_ => import('../pages/player'))

const SQMine = React.lazy(_ => import('@/pages/mine'))
const SQFriend = React.lazy(_ => import('@/pages/friend'))

// import SQDiscover from '@/pages/discover'
// import SQRecommend from '../pages/discover/c-pages/recommend'
// import SQRanking from '../pages/discover/c-pages/ranking'
// import SQSongs from '../pages/discover/c-pages/songs'
// import SQDjradio from '../pages/discover/c-pages/djradio'
// import SQArtist from '../pages/discover/c-pages/artist'
// import SQAlbum from '../pages/discover/c-pages/album'
// import SQPlayer from '../pages/player'

// import SQMine from '@/pages/mine'
// import SQFriend from '@/pages/friend'

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
      },
      {
        path: '/discover/player',
        component: SQPlayer
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
