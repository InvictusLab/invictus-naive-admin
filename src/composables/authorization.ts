import type { RemovableRef } from '@vueuse/core'

export const STORAGE_AUTHORIZE_KEY = 'Authorization'

export const useAuthorization: () => RemovableRef<string | null> = createGlobalState(() =>
  useStorage<null | string>(STORAGE_AUTHORIZE_KEY, null)
)
