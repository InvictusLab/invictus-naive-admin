<script setup lang="ts">
import {
  HeaderLogo,
  HeaderTitle,
  LayoutCommon,
  LayoutContent,
  LayoutHeader
} from '@/views/layouts/common'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    inverted?: boolean
  }>(),
  { headerHeight: 48, inverted: false }
)
const dynamicHeaderHeight = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <LayoutCommon class="h-screen">
    <LayoutHeader
      :inverted="inverted"
      class="invictus-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <HeaderLogo :src="logo"></HeaderLogo>
        <HeaderTitle :title="title"></HeaderTitle>
      </div>
      <slot name="headerRight"></slot>
    </LayoutHeader>
    <LayoutContent content-style="padding: 24px;">
      <slot></slot>
    </LayoutContent>
    <!--<n-layout-footer>成府路</n-layout-footer>-->
  </LayoutCommon>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(dynamicHeaderHeight);
}
</style>
