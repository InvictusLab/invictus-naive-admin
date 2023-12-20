import { fileURLToPath, URL } from 'node:url'
import * as path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))
const dtsPath = path.resolve(srcPath, 'dts')

// https://vitejs.dev/config/
export default defineConfig({
  // Set up multiple environment configuration folders
  // dev: 开发环境，sit: 集成测试环境，uat: 用户测试环境，pre: 预发布环境，prod: 生产环境
  // Prioritization（优先级排序）：.env.[mode].local > .env.[mode] > .env.local > .env
  envDir: path.resolve(__dirname, './env'),

  // Set alias
  resolve: {
    alias: {
      '@': srcPath
    }
  },

  plugins: [
    vue(),
    vueJsx(),

    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(dtsPath, 'auto-imports.d.ts')
    }),

    Components({
      resolvers: [
        // Auto register icon components
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        ElementPlusResolver()
      ],
      dts: path.resolve(dtsPath, 'components.d.ts')
    }),

    Icons({
      autoInstall: true
    }),

    createSvgIconsPlugin({
      // Set the icon folder that needs to be cached
      iconDirs: [path.resolve(srcPath, 'assets/icons/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    }),

    Inspect()
  ]
})
