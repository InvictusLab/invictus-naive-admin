<script setup lang="ts">
import {
  HeaderLogo,
  HeaderTitle,
  LayoutContent,
  LayoutSider,
  LayoutHeader
} from '@/views/layouts/common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    siderWidth?: number
    siderCollapsedWidth?: number
    showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
    collapsed?: boolean
  }>(),
  { headerHeight: 48, collapsed: false }
)
defineEmits(['update:collapsed'])
const dynamicHeaderHeight = computed(() => `${props.headerHeight}px`)
const dynamicContentHeight = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <div class="h-screen">
    <n-layout>
      <LayoutHeader
        inverted
        class="invictus-mix-layout-header flex justify-between items-center px-4"
      >
        <div class="flex items-center">
          <HeaderLogo :src="logo"></HeaderLogo>
          <HeaderTitle :title="title"></HeaderTitle>
        </div>
        <slot name="headerRight"></slot>
      </LayoutHeader>
      <n-layout has-sider class="invictus-mix-layout-content">
        <LayoutSider
          :collapsed="collapsed"
          :width="siderWidth"
          :collapsed-width="siderCollapsedWidth"
          :show-trigger="showSiderTrigger"
          @update:collapsed="($event: any) => $emit('update:collapsed', $event)"
        >
        </LayoutSider>
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
