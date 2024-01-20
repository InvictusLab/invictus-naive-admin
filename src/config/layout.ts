import logo from '@/assets/icons/svg/logo.svg'

export interface Layout {
  logo?: string
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight?: number
  siderWidth?: number
  siderCollapsedWidth?: number
  showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
}

export const layoutConfig: Layout = {
  logo: logo,
  title: 'Invictus Admin',
  layout: 'side',
  headerHeight: 48,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'bar'
}
