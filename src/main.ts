import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import App from '@/App.vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import pinia from '@/stores'
import router from '@/router'
import '@/assets/main.css'

if (import.meta.env.DEV) {
  const env = import.meta.env
  console.log('envs:', env)
}

// Setting the CSS style of naive-ui has a higher priority than the reset style of tailwind.
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)

app.component('svg-icon', SvgIcon)
app.use(pinia)
app.use(router)

app.mount('#app')
