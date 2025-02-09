import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from "autoprefixer";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css:{
    postcss: {
      plugins: [
          // require('autoprefixer'),
          // require('@tailwindcss/postcss')
        tailwindcss({
          purge:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
          darkMode: false,
          theme: {
            extend: {
              spacing: {
                97: '26rem',
                98: '28rem',
                '12/10': '120%'
              },
              colors: {
                ob: 'var(--text-accent)',
                'ob-normal': 'var(--text-normal)',
                'ob-trans': 'var(--background-trans)',
                'ob-accent-55': 'var(--bg-accent-55)',
                'ob-secondary': 'var(--text-sub-accent)',
                'ob-bright': 'var(--text-bright)',
                'ob-dim': 'var(--text-dim)',
                'ob-deep': {
                  800: 'var(--background-secondary)',
                  900: 'var(--background-primary)'
                }
              },
              boxShadow: {
                ob: 'var(--accent-shadow)'
              }
            }
          },
        }),
        // autoprefixer({ // 自动添加前缀
        //   overrideBrowserslist: [
        //     "Android 4.1",
        //     "iOS 7.1",
        //     "Chrome > 31",
        //     "ff > 31",
        //     "ie >= 8"
        //     //'last 2 versions', // 所有主流浏览器最近2个版本
        //   ],
        //   grid: true
        // }),
      ]
    }
  }
})
