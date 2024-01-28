<script setup lang="ts">
import { SettingOutlined, CloseOutlined } from '@vicons/antd'

const props = withDefaults(defineProps<{
  floatTop?: number | string
  drawerWidth?: number | string
}>(), {
  floatTop: 240,
  drawerWidth: 300
})

const show = ref(false)

const handleClick = (val: boolean) => {
  show.value = val
}

const cssVars = computed(() => {
  return {
    '--invictus-float-top': `${props.floatTop}px`,
    '--invictus-drawer-width': `${props.drawerWidth}px`
  }
})
</script>

<template>
  <teleport to="body">
    <div class="fixed top-[var(--invictus-float-top)] right-0" :style="cssVars">
      <n-button
        size="large"
        type="primary"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="handleClick(true)"
      >
        <template #icon>
          <n-icon size="24">
            <SettingOutlined></SettingOutlined>
          </n-icon>
        </template>
      </n-button>
    </div>
  </teleport>
  <n-drawer :width="drawerWidth" v-model:show="show">
    <n-drawer-content>
      这里是内容区域
    </n-drawer-content>
    <div class="absolute top-[var(--invictus-float-top)] right-[var(--invictus-drawer-width)]" :style="cssVars">
      <n-button
        size="large"
        type="primary"
        class="b-rd-tr-0! b-rd-br-0!"
        @click="handleClick(false)"
      >
        <template #icon>
          <n-icon size="24">
            <CloseOutlined></CloseOutlined>
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>

<style scoped>

</style>