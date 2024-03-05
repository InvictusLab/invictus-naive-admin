import i18n, { defaultLocale, loadLanguageAsync } from '@/locales'
import type { RemovableRef } from '@vueuse/core'

export const useAppLocale: () => RemovableRef<string> = createGlobalState(() =>
  useStorage('locale', defaultLocale)
)

export const useAutoLang = () => {
  const appLocale = useAppLocale()
  const { isSupported, language } = useNavigatorLanguage()
  const setLanguage = async (lang: string) => {
    try {
      await loadLanguageAsync(lang)
      appLocale.value = lang
    } catch (e) {
      throw new Error(`Failed to load language: ${lang}`)
    }
  }
  if (isSupported.value) {
    if (language.value !== defaultLocale) setLanguage(language.value!).then(() => {})

    watch(language, () => {
      setLanguage(language.value!).then(() => {})
    })
  } else {
    if (appLocale.value !== defaultLocale) setLanguage(appLocale.value).then(() => {})
  }
  watch(appLocale, () => {
    if (appLocale.value !== i18n.global.locale.value) setLanguage(appLocale.value).then(() => {})
  })
  const targetLocale = computed(() => i18n.global.getLocaleMessage(appLocale.value).naiveUI || {})

  return {
    targetLocale,
    setLanguage
  }
}
