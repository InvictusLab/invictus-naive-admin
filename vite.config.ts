import { fileURLToPath, URL } from 'node:url'
import * as path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))
const dtsPath = path.resolve(srcPath, 'dts')

// https://vitejs.dev/config/
export default defineConfig({
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
          prefix: 'Icon',
        }),
      ],
      dts: path.resolve(dtsPath, 'auto-imports.d.ts')
    }),

    Components({
      resolvers: [
        // Auto register icon components
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        // Auto register Element Plus components
        ElementPlusResolver()
      ],
      dts: path.resolve(dtsPath, 'components.d.ts'),
    }),

    Icons({
      autoInstall: true,
    }),

    Inspect(),
  ],
})
