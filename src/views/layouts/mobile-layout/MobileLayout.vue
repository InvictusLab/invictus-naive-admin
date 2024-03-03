<script setup lang="ts">
import {
  HeaderLogo,
  HeaderTitle,
  LayoutCommon,
  LayoutContent,
  LayoutHeader
} from '@/views/layouts/common'
import { MenuUnfoldOutlined } from '@vicons/antd'

const props = withDefaults(
  defineProps<{
    headerHeight?: number
    logo?: string
    title?: string
    headerInverted?: boolean
    drawerInverted?: boolean
    visible?: boolean
    logoVisible?: boolean
  }>(),
  {
    headerHeight: 48,
    headerInverted: false,
    drawerInverted: false,
    visible: false,
    logoVisible: true
  }
)
const dynamicHeaderHeight = computed(() => `${props.headerHeight}px`)

const emit = defineEmits(['update:visible'])

const onShow = () => {
  emit('update:visible', true)
}
</script>

<template>
  <LayoutCommon class="h-screen">
    <LayoutHeader
      :inverted="headerInverted"
      class="invictus-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <HeaderLogo :src="logo" size="26"></HeaderLogo>
        <n-icon size="24" class="ml-12px" @click="onShow">
          <MenuUnfoldOutlined></MenuUnfoldOutlined>
        </n-icon>
      </div>
      <slot name="headerRight"></slot>
    </LayoutHeader>
    <LayoutContent content-style="padding: 24px;">
      <slot></slot>
    </LayoutContent>
    <!--<n-layout-footer>成府路</n-layout-footer>-->
  </LayoutCommon>
  <n-drawer
    :show="visible"
    :width="240"
    placement="left"
    @update:show="(val) => $emit('update:visible', val)"
  >
    <n-drawer-content body-content-style="padding: 0">
      <n-layout class="h-100%">
        <n-layout-header class="h-100%" inverted>
          <div class="flex items-center justify-center py-12px">
            <HeaderLogo :src="logo" size="26"></HeaderLogo>
            <HeaderTitle :title="title" size="22"></HeaderTitle>
          </div>
        </n-layout-header>
      </n-layout>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.invictus-mix-layout-header {
  height: v-bind(dynamicHeaderHeight);
}
</style>
