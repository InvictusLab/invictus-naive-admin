<script setup lang="ts">
import { CheckOutlined } from '@vicons/antd'

const props = withDefaults(defineProps<{
  layout?: 'mix' | 'side' | 'top',
  inverted?: boolean,
  selected?: boolean
}>(), {
  layout: 'top',
  inverted: false,
  selected: false
})

const headerClass = computed(() => {
  if (props.layout === 'mix' || props.layout === 'top') {
    return [
      'bg-[var(--inverted-color)]'
    ]
  } else if (props.layout === 'side') {
    return [
      'bg-[var(--base-color)]'
    ]
  } else {
    return []
  }
})

const siderClass = computed(() => {
  if (props.layout === 'mix') {
    return [
      'bg-[var(--base-color)]',
      'h-75%',
      'bottom-0'
    ]
  } else if (props.layout === 'side') {
    return [
      'h-100%',
      `bg-[var(--${props.inverted ? 'inverted' : 'base'}-color)]`
    ]
  } else {
    return []
  }
})
</script>

<template>
  <n-el tag="div"
        class="inline-block relative w-44px h-36px b-rd-4px overflow-hidden bg-[var(--invictus-layout-content-bg)] shadow-[var(--invictus-layout-box-shadow)]">
    <div :class="headerClass" class="absolute top-0 h-25% w-100%"></div>
    <div v-if="layout !== 'top'" :class="siderClass" class="absolute w-30%"></div>
    <div v-if="selected" class="absolute bottom--3px right-3px">
      <n-icon size="16">
        <CheckOutlined></CheckOutlined>
      </n-icon>
    </div>
  </n-el>
</template>

<style scoped>

</style>