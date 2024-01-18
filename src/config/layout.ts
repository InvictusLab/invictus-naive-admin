export interface Layout {
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight?: number
}

export const layoutConfig: Layout = {
  title: 'Invictus Admin',
  layout: 'mix',
  headerHeight: 48
}
