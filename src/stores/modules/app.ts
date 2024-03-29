import { defineStore } from 'pinia'
import type { LayoutTheme, LayoutType } from '@/config/layoutTheme'
import { layoutThemeConfig } from '@/config/layoutTheme'
import { darkTheme } from '@/config/appTheme'
import { colors, darkColors } from '@/config/invictusTheme'
import type { ThemeType } from '@/config/invictusTheme'

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

  watch(
    () => layout.layoutStyle,
    (value) => {
      if (value === 'dark') {
        toggleDark(true)
      } else {
        toggleDark(false)
      }
    }
  )

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

    list.push({
      id: 'dark',
      key: 'side',
      title: '暗色风格',
      dark: true
    })

    return list
  })

  const layoutTheme = computed(() => {
    if (layout.layoutStyle === 'dark') {
      return darkTheme
    }
    return undefined
  })

  const overridesTheme = computed(() => {
    if (isDark.value) {
      return darkColors[layout.theme ?? 'default']
    } else {
      return colors[layout.theme ?? 'default']
    }
  })

  const updateTheme = (value: string) => {
    layout.theme = value
  }

  const themeList = computed<ThemeType[]>(() => {
    const list: ThemeType[] = []
    const myColors = isDark.value ? darkColors : colors
    for (const colorsKey in myColors) {
      const value = myColors[colorsKey]
      list.push({
        color: value.common?.primaryColor as string,
        key: colorsKey
      })
    }
    return list
  })

  return {
    layout,
    visible,
    layoutList,
    layoutStyleList,
    layoutTheme,
    overridesTheme,
    themeList,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle,
    updateTheme
  }
})
