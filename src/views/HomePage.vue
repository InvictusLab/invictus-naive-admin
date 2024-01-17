<script setup lang="ts">
const message = useMessage()
const dialog = useDialog()
const notification = useNotification()
const loadingBar = useLoadingBar()

const onMessage = () => {
  message.success('This is a success message')
}

const onDialog = () => {
  dialog.info({
    title: 'This is a info dialog',
    content: 'This is a info dialog'
  })
}

const onNotification = () => {
  notification.success({
    title: 'This is a success notification',
    content: 'This is a success notification'
  })
}

const onLoading = () => {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 1000)
}
</script>

<template>
  <div>
    <n-space>
      <n-space>
        <n-button @click="onMessage"> Message </n-button>
        <n-button @click="onDialog"> Dialog </n-button>
        <n-button @click="onNotification"> Notification </n-button>
        <n-button @click="onLoading"> Loading </n-button>
      </n-space>
    </n-space>
  </div>
</template>

<style scoped></style>
