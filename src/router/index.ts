import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/config/nprogress'

import HomePage from '@/views/HomePage.vue'

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { title: '首页' },
      component: HomePage
    }
  ]
})

// 路由拦截守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})

// 路由跳转结束
router.afterEach(() => {
  NProgress.done()
})

// 路由跳转失败
router.onError((error) => {
  NProgress.done()
  console.log('路由跳转失败', error.message)
})

export default router
