import { defineStore } from 'pinia'
import type { LayoutTheme, LayoutType } from '@/config/layoutTheme'
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

  const updateLayout = (value: LayoutType['key']) => {
    layout.layout = value
  }

  const updateLayoutStyle = (value: LayoutTheme['layoutStyle']) => {
    layout.layoutStyle = value
  }

  const layoutList = computed<LayoutType[]>(() => {
    return [
      {
        id: 'side',
        key: 'side',
        title: '侧边布局'
      },
      {
        id: 'top',
        key: 'top',
        title: '顶部布局'
      },
      {
        id: 'mix',
        key: 'mix',
        title: '混合布局'
      }
    ]
  })

  const layoutStyleList = computed<LayoutType[]>(() => {
    const list: LayoutType[] = [
      {
        id: 'light',
        key: 'side',
        title: '亮色风格'
      }
    ]

    if (layout.layout !== 'mix') {
      list.push({
        id: 'inverted',
        key: 'side',
        inverted: true,
        title: '反转色风格'
      })
    } else {
      if (layout.layoutStyle !== 'dark') {
        updateLayoutStyle('light')
      }
    }

    return list
  })

  const layoutTheme = computed(() => {
    if (layout.layoutStyle === 'dark') {
      return darkTheme
    }
    return undefined
  })

  return {
    layout,
    visible,
    layoutList,
    layoutStyleList,
    layoutTheme,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle
  }
})
