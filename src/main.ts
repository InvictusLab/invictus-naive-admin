import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import App from '@/App.vue'
import SvgIcon from '@/components/SvgIcon/SvgIndex.vue'
import pinia from '@/stores'
import router from '@/router'
import '@/assets/main.css'

if (import.meta.env.DEV) {
  const env = import.meta.env
  console.log('envs:', env)
}

const app = createApp(App)

app.use(pinia)
app.use(router)

app.component('svg-icon', SvgIcon)

// Setting the CSS style of naive-ui has a higher priority than the reset style of tailwind.
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')
