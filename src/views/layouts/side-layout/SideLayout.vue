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
    inverted?: boolean
    collapsed?: boolean
  }>(),
  { headerHeight: 48, inverted: false, collapsed: false }
)
defineEmits(['update:collapsed'])
const dynamicHeaderHeight = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <n-layout has-sider class="h-screen">
    <LayoutSider
      :inverted="inverted"
      :collapsed="collapsed"
      :width="siderWidth"
      :collapsed-width="siderCollapsedWidth"
      :show-trigger="showSiderTrigger"
      @update:collapsed="($event: boolean) => $emit('update:collapsed', $event)"
    >
      <div class="flex items-center justify-center mt-24px">
        <HeaderLogo :src="logo" size="30"></HeaderLogo>
        <HeaderTitle v-if="!collapsed" :title="title" size="22"></HeaderTitle>
      </div>
    </LayoutSider>
    <n-layout style="--n-color: var(--invictus-layout-content-bg)">
      <n-layout-header class="invictus-mix-layout-header flex justify-between items-center px-4">
        <slot name="headerLeft">
          <div></div>
        </slot>
        <slot name="headerRight">
          <div></div>
        </slot>
      </n-layout-header>
      <LayoutContent content-style="padding: 24px;">
        <slot></slot>
      </LayoutContent>
      <!--      <n-layout-footer>成府路</n-layout-footer>-->
    </n-layout>
  </n-layout>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(dynamicHeaderHeight);
}
</style>
