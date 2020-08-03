import SQDiscover from '@/pages/discover'
import SQMine from '@/pages/mine'
import SQFriend from '@/pages/friend'

const routes = [
  {
    path: '/',
    exact: true,
    component: SQDiscover
  },
  {
    path: '/mine',
    component: SQMine
  },
  {
    path: '/friend',
    component: SQFriend
  }
]

export default routes