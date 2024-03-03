<script setup lang="ts">
import { colors } from '@/config/invictusTheme'

const appStore = useAppStore()

const onSwitch = (theme: string) => {
  appStore.updateTheme(theme)
}
</script>

<template>
  <div>
    <n-space>
      <n-button type="primary" v-for="(value, key) in colors" :key="key" @click="onSwitch(key)">
        {{ key }}
      </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
