<script setup lang="ts">
import NavLogo from '@/views/layouts/common/HeaderLogo.vue'
import NavTitle from '@/views/layouts/common/HeaderTitle.vue'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
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
          <NavLogo :src="logo"></NavLogo>
          <NavTitle :title="title"></NavTitle>
        </div>
        <slot name="headerRight"></slot>
      </n-layout-header>
      <n-layout has-sider class="invictus-mix-layout-content">
        <n-layout-sider content-style="padding: 24px;"></n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          <slot></slot>
        </n-layout-content>
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
