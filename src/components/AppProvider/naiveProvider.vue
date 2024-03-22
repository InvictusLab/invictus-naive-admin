<script setup lang="ts">
import { useGlobalConfigProvider } from '@/composables/globalConfig'

const notification = useNotification()
const message = useMessage()
const dialog = useDialog()
const loadingBar = useLoadingBar()
useGlobalConfigProvider({
  notification,
  message,
  dialog,
  loadingBar
})
</script>

<template>
  <slot></slot>
</template>

<style scoped></style>
