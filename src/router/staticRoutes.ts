import type { RouteRecordRaw } from 'vue-router'

import { Layout } from '@/views/layouts'

const StaticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeIndex.vue'),
        meta: {
          title: 'Home'
        }
      }
    ]
  }
]

export default StaticRoutes
