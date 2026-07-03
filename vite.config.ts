import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resources: resolve(__dirname, 'resources.html'),
        join: resolve(__dirname, 'join.html'),
        updates: resolve(__dirname, 'updates.html'),
      },
    },
  },
})
