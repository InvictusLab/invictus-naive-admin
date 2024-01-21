<script setup lang="ts">
import MixLayout from '@/views/layouts/mix-layout/MixLayout.vue'
import SideLayout from '@/views/layouts/side-layout/SideLayout.vue'
import TopLayout from '@/views/layouts/top-layout/TopLayout.vue'

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
  <TopLayout v-if="layout.layout == 'top'" :logo="layout.logo" :title="layout.title">
    <template #headerRight>
      <div>Right Slot</div>
    </template>
    <RouterView></RouterView>
  </TopLayout>
</template>

<style scoped></style>
