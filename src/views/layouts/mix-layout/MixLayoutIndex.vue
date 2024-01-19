<script setup lang="ts">
const props = withDefaults(defineProps<{ headerHeight?: number }>(), { headerHeight: 48 })
const dynamicHeaderHeight = computed(() => `${props.headerHeight}px`)
const dynamicContentHeight = computed(() => `calc(100vh - ${props.headerHeight}px)`)
</script>

<template>
  <div class="h-screen">
    <n-layout>
      <n-layout-header class="invictus-mix-layout-header">颐和园路</n-layout-header>
      <n-layout has-sider class="invictus-mix-layout-content">
        <n-layout-sider content-style="padding: 24px;"> 海淀桥</n-layout-sider>
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

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
