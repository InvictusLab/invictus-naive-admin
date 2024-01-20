<script setup lang="ts">
import { HeaderLogo, HeaderTitle, LayoutContent, LayoutSider } from '@/views/layouts/common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    siderWidth?: number
    siderCollapsedWidth?: number
    showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
  }>(),
  { headerHeight: 48 }
)
const dynamicHeaderHeight = computed(() => `${props.headerHeight}px`)
const dynamicContentHeight = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <div class="h-screen">
    <n-layout>
      <n-layout-header
        inverted
        class="invictus-mix-layout-header flex justify-between items-center px-4"
      >
        <div class="flex items-center">
          <HeaderLogo :src="logo"></HeaderLogo>
          <HeaderTitle :title="title"></HeaderTitle>
        </div>
        <slot name="headerRight"></slot>
      </n-layout-header>
      <n-layout has-sider class="invictus-mix-layout-content">
        <LayoutSider
          :width="siderWidth"
          :collapsed-width="siderCollapsedWidth"
          :show-trigger="showSiderTrigger"
          content-style="padding: 24px;"
        ></LayoutSider>
        <LayoutContent content-style="padding: 24px;">
          <slot></slot>
        </LayoutContent>
      </n-layout>
      <!--<n-layout-footer>成府路</n-layout-footer>-->
    </n-layout>
  </div>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(dynamicHeaderHeight);
}

.invictus-mix-layout-content {
  height: v-bind(dynamicContentHeight);
}
</style>
