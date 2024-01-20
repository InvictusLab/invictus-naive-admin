<script setup lang="ts">
import MixLayout from '@/views/layouts/mix-layout/MixLayout.vue'
import SideLayout from '@/views/layouts/side-layout/SideLayout.vue'

const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <MixLayout
    v-if="layout.layout == 'mix'"
    v-model:collapsed="layout.collapsed"
    :logo="layout.logo"
    :title="layout.title"
    :show-sider-trigger="layout.showSiderTrigger"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
  >
    <template #headerRight>
      <div>Right Slot</div>
    </template>
    <RouterView></RouterView>
  </MixLayout>
  <SideLayout
    v-if="layout.layout == 'side'"
    v-model:collapsed="layout.collapsed"
    :logo="layout.logo"
    :title="layout.title"
    :show-sider-trigger="layout.showSiderTrigger"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
  >
    <template #headerRight>
      <div>Right Slot</div>
    </template>
    <RouterView></RouterView>
  </SideLayout>
</template>

<style scoped></style>
