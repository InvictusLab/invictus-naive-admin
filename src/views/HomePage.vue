<script setup lang="ts">
import { useCounter } from '@/stores/modules/counter'

const CounterStore = useCounter()

const { counter, double } = storeToRefs(CounterStore)
</script>

<template>
  <div>
    counter: {{ counter }}
    <br />
    double: {{ double }}
    <n-button @click="CounterStore.increment">increase</n-button>
    <n-button @click="CounterStore.decrement">decrease</n-button>
  </div>
  <!--  <svg-icon name="logo" width="100px" height="100px"></svg-icon>-->
  <div>Home</div>
</template>

<style scoped></style>
