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
    path: '/system',
    name: 'System',
    component: () => import('@/views/system/SystemIndex.vue')
  }
]

export default StaticRoutes
