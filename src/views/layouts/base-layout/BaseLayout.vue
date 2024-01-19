<script setup lang="ts">
import MixLayoutIndex from '@/views/layouts/mix-layout/MixLayout.vue'

const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <MixLayoutIndex v-if="layout.layout == 'mix'" :logo="layout.logo" :title="layout.title">
    <template #headerRight>
      <div>Right Slot</div>
    </template>
    <RouterView></RouterView>
  </MixLayoutIndex>
</template>

<style scoped></style>
