import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from '@/App.vue'
import SvgIcon from '@/components/SvgIcon/SvgIndex.vue'
import pinia from '@/stores'
import router from '@/router'
import '@/assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('svg-icon', SvgIcon)
app.use(ElementPlus, { size: 'small' })

app.mount('#app')
