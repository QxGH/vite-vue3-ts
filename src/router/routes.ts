import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home.vue')
      }, {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/order.vue')
      }
    ]
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue')
  },

]

export default routes;