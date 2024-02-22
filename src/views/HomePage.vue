<script setup lang="ts">
import SwitchLayout from '@/views/layouts/layout-setting/SwitchLayout.vue'
</script>

<template>
  <div>
    <n-space>
      <SwitchLayout layout="mix" selected></SwitchLayout>
      <SwitchLayout layout="top"></SwitchLayout>
      <SwitchLayout layout="side"></SwitchLayout>
      <SwitchLayout layout="side" inverted></SwitchLayout>
    </n-space>
  </div>
</template>

<style scoped></style>
