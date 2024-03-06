<script lang="ts" setup>
const appLocale = useAppLocale()

const onSwitch = (lang: string) => {
  appLocale.value = lang
}
</script>

<template>
  <div>
    <n-space>
      <n-input />
      <n-button @click="onSwitch('zh-CN')"> 中文 </n-button>
      <n-button @click="onSwitch('en-US')"> English </n-button>
    </n-space>
  </div>
</template>

<style scoped></style>
