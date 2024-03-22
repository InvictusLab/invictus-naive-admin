import { defaultLocale, loadLanguageAsync } from '@/locales'
import type { RemovableRef } from '@vueuse/core'

export const useAppLocale: () => RemovableRef<string> = createGlobalState(() =>
  useStorage('locale', defaultLocale)
)

export const useAutoLang = () => {
  const appLocale = useAppLocale()

  const { locale, getLocaleMessage } = useI18n()

  const setLanguage = async (lang: string) => {
    try {
      await loadLanguageAsync(lang)
      appLocale.value = lang
      locale.value = lang
    } catch (e) {
      throw new Error(`Failed to load language: ${lang}`)
    }
  }

  const { isSupported, language } = useNavigatorLanguage()

  if (isSupported.value) {
    if (language.value && language.value !== defaultLocale)
      setLanguage(language.value).then(() => {})

    watch(language, (lang) => {
      if (lang) setLanguage(lang).then(() => {})
    })
  }

  watch(appLocale, (lang) => {
    if (lang && lang !== locale.value) setLanguage(lang).then(() => {})
  })

  setLanguage(appLocale.value).then(() => {})

  const naiveLocale = computed(() => getLocaleMessage(appLocale.value).naiveUI || {})

  return {
    naiveLocale
  }
}
