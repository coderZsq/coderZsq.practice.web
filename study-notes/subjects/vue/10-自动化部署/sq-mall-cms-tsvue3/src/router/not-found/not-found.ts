export default {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@/views/not-found/not-found.vue')
}
