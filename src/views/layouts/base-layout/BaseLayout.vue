<script setup lang="ts">
import MixLayout from '@/views/layouts/mix-layout/MixLayout.vue'
import SideLayout from '@/views/layouts/side-layout/SideLayout.vue'
import TopLayout from '@/views/layouts/top-layout/TopLayout.vue'
import MobileLayout from '@/views/layouts/mobile-layout/MobileLayout.vue'
import { useQueryBreakpoints } from '@/composables/breakpoints'
import LayoutSetting from '@/views/layouts/layout-setting/LayoutSetting.vue'

const appStore = useAppStore()
const { layout, visible } = storeToRefs(appStore)
const { isMobile, isPad, isDesktop } = useQueryBreakpoints()

watchEffect(() => {
  if (isPad.value) appStore.toggleCollapsed(true)
  else if (isDesktop.value) appStore.toggleCollapsed(false)
  if (isMobile.value) appStore.toggleVisible(false)
})
</script>

<template>
  <MobileLayout v-if="isMobile" v-model:visible="visible" :logo="layout.logo" :title="layout.title">
    <template #headerRight>
      <div>Right Slot</div>
    </template>
    <RouterView></RouterView>
  </MobileLayout>
  <template v-else>
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
  <LayoutSetting></LayoutSetting>
</template>

<style scoped></style>
