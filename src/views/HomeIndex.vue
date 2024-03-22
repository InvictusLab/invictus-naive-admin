<script lang="ts" setup>
const appLocale = useAppLocale()

const onSwitch = (lang: string) => {
  appLocale.value = lang
}

import request from '@/utils/request'

const onGet = async () => {
  const res = await useGet(
    'https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/200'
  )
  console.log(res)
}

const onPost = async () => {
  await usePost('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/post')
}

const onPut = async () => {
  await usePut('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/put')
}

const onDelete = async () => {
  await useDelete('https://mock.lingyu.org.cn/mock/642b5d1e939061307ed09d1b/example/test/delete')
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
  <div>
    <n-button @click="onGet">get</n-button>
    <n-button @click="onPost">post</n-button>
    <n-button @click="onPut">put</n-button>
    <n-button @click="onDelete">delete</n-button>
  </div>
</template>

<style scoped></style>
