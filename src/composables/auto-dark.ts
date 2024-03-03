export const isDark = useDark()

export const toggleDark = useToggle(isDark)

export const useAutoDark = () => {
  const isPrefersDark = usePreferredDark()
  const appStore = useAppStore()
  watch(
    isPrefersDark,
    (isDark) => {
      console.log('isDark', isDark)
      if (isDark) {
        appStore.updateLayoutStyle('dark')
      } else {
        appStore.updateLayoutStyle('light')
      }
      toggleDark(isDark)
    },
    { immediate: true }
  )
}
