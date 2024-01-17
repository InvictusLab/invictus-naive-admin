<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <n-config-provider>
    <app-provider>
      <RouterView />
    </app-provider>
  </n-config-provider>
</template>

<style scoped></style>
