<script setup lang="ts">
const appStore = useAppStore()
const { layoutTheme, overridesTheme } = storeToRefs(appStore)

useAutoDark()
const { naiveLocale } = useAutoLang()
</script>

<template>
  <n-config-provider
    :locale="naiveLocale.locale"
    :date-locale="naiveLocale.dateLocale"
    :theme="layoutTheme"
    :theme-overrides="overridesTheme"
  >
    <n-global-style> </n-global-style>
    <app-provider>
      <RouterView />
    </app-provider>
  </n-config-provider>
</template>

<style scoped></style>
