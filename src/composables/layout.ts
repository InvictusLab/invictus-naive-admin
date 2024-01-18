import type { RemovableRef } from '@vueuse/core'

import type { Layout } from '@/config/layout'
import { layoutConfig } from '@/config/layout'

export const useLayout: () => RemovableRef<Layout> = createGlobalState(() =>
  useStorage('layout', layoutConfig)
)
