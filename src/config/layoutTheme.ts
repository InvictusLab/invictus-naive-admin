import logo from '@/assets/icons/svg/logo.svg'

export interface LayoutType {
  id: string
  key: 'mix' | 'side' | 'top'
  title: string
  inverted?: boolean
  dark?: boolean
}

export interface LayoutTheme {
  logo?: string
  title?: string
  layout: 'mix' | 'side' | 'top'
  layoutStyle: 'inverted' | 'light' | 'dark'
  headerHeight?: number
  siderWidth?: number
  siderCollapsedWidth?: number
  showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
  collapsed: boolean
}

export const layoutThemeConfig: LayoutTheme = {
  logo: logo,
  title: 'Invictus Admin',
  layout: 'mix',
  layoutStyle: 'light',
  headerHeight: 48,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'bar',
  collapsed: false
}
