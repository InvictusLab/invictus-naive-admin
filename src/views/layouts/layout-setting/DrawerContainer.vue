<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="my-14px">
    <div class="mb-14px text-14px font-500">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
