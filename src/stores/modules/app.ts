import { defineStore } from 'pinia'
import { layoutConfig } from '@/config/layout'

export const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV ? layoutConfig : useLayout()
  const layout = reactive(unref(defaultLayout))
  const visible = ref(false)
  const toggleVisible = (value: boolean) => {
    visible.value = value
  }
  const toggleCollapsed = (value: boolean) => {
    layout.collapsed = value
  }

  return {
    layout,
    visible,
    toggleVisible,
    toggleCollapsed
  }
})
