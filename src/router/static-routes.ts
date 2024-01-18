import type { RouteRecordRaw } from 'vue-router'

const StaticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/app',
    name: 'System',
    component: () => import('@/views/app/AppIndex.vue')
  }
]

export default StaticRoutes
