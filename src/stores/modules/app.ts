import { defineStore } from 'pinia'
import { layoutConfig } from '@/config/layout'

export const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV ? layoutConfig : useLayout()

  const layout = reactive(unref(defaultLayout))
  return { layout }
})
