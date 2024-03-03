<script setup lang="ts">
import { SettingOutlined, CloseOutlined } from '@vicons/antd'

import SwitchLayout from '@/views/layouts/layout-setting/SwitchLayout.vue'
import DrawerContainer from '@/views/layouts/layout-setting/DrawerContainer.vue'
import SwitchTheme from '@/views/layouts/layout-setting/SwitchTheme.vue'
import type { LayoutType } from '@/config/layoutTheme'
import type { ThemeType } from '@/config/invictusTheme'

const props = withDefaults(
  defineProps<{
    floatTop?: number | string
    drawerWidth?: number | string
    layout?: 'mix' | 'side' | 'top'
    layoutStyle?: 'inverted' | 'light' | 'dark'
    layoutList?: LayoutType[]
    layoutStyleList?: LayoutType[]
    themeList?: ThemeType[]
    theme?: string
  }>(),
  {
    floatTop: 240,
    drawerWidth: 300
  }
)

const emit = defineEmits(['update:layout', 'update:layoutStyle', 'update:theme'])

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

const onChangeTheme = (value: string) => {
  emit('update:theme', value)
}
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
      <DrawerContainer title="布局风格配置" v-if="layoutStyleList">
        <n-space size="large">
          <template v-for="item in layoutStyleList" :key="item.id">
            <SwitchLayout
              :layout="item.key"
              :title="item.title"
              :inverted="item.inverted"
              :selected="item.id === layoutStyle"
              :dark="item.dark"
              @click="() => $emit('update:layoutStyle', item.id)"
            >
            </SwitchLayout>
          </template>
        </n-space>
      </DrawerContainer>

      <DrawerContainer title="主题色配置" v-if="themeList">
        <n-space>
          <SwitchTheme
            v-for="item in themeList"
            :color="item.color"
            :checked="item.key === theme"
            :key="item.key"
            @click="onChangeTheme(item.key)"
          >
          </SwitchTheme>
        </n-space>
      </DrawerContainer>

      <n-divider></n-divider>

      <DrawerContainer title="导航模式" v-if="layoutList">
        <n-space size="large">
          <template v-for="item in layoutList" :key="item.key">
            <SwitchLayout
              :layout="item.key"
              :title="item.title"
              :selected="item.key === layout"
              @click="() => $emit('update:layout', item.key)"
            >
            </SwitchLayout>
          </template>
        </n-space>
      </DrawerContainer>
    </n-drawer-content>
    <div
      class="absolute top-[var(--invictus-float-top)] right-[var(--invictus-drawer-width)]"
      :style="cssVars"
    >
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

<style scoped></style>
