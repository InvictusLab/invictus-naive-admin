import { defineStore } from 'pinia'
import type { LayoutTheme } from '@/config/layoutTheme'
import { darkTheme } from 'naive-ui'
import { layoutThemeConfig } from '@/config/layoutTheme'

export const useAppStore = defineStore('app', () => {
  const defaultLayout = import.meta.env.DEV ? layoutThemeConfig : useLayout()
  const layout = reactive(unref(defaultLayout))
  const visible = ref(false)
  const toggleVisible = (value: boolean) => {
    visible.value = value
  }
  const toggleCollapsed = (value: boolean) => {
    layout.collapsed = value
  }

  const updateLayoutStyle = (val: LayoutTheme['layoutStyle']) => {
    layout.layoutStyle = val
  }

  const layoutTheme = computed(() => {
    if (layout.layoutStyle === 'dark') {
      return darkTheme
    }
    return undefined
  })

  return {
    layout,
    visible,
    layoutTheme,
    toggleVisible,
    toggleCollapsed,
    updateLayoutStyle,
  }
})
