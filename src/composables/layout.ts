import type { RemovableRef } from '@vueuse/core'

import type { LayoutTheme } from '@/config/layoutTheme'
import { layoutThemeConfig } from '@/config/layoutTheme'

export const useLayout: () => RemovableRef<LayoutTheme> = createGlobalState(() =>
  useStorage('layout', layoutThemeConfig)
)
