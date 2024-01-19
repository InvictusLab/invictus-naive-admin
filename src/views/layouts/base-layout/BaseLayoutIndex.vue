<script setup lang="ts">
import MixLayoutIndex from '@/views/layouts/mix-layout/MixLayoutIndex.vue'

const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <MixLayoutIndex v-if="layout.layout == 'mix'">
    <RouterView></RouterView>
  </MixLayoutIndex>
</template>

<style scoped></style>
