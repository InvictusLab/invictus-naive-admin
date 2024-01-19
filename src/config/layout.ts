import logo from '@/assets/icons/svg/logo.svg'

export interface Layout {
  logo?: string
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight?: number
}

export const layoutConfig: Layout = {
  logo: logo,
  title: 'Invictus Admin',
  layout: 'mix',
  headerHeight: 48
}
