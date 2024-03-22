import { createRouter, createWebHistory } from 'vue-router'

import staticRoutes from '@/router/staticRoutes'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL ?? '//'),
  routes: [
    ...staticRoutes,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginIndex.vue')
    }
  ]
})

// 路由拦截守卫
router.beforeEach(async (to, from, next) => {
  next()
})

// 路由跳转结束
router.afterEach(() => {})

// 路由跳转失败
router.onError((error) => {
  console.log('路由跳转失败', error.message)
})

export default router
