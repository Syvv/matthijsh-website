/// <reference types="vitest" />

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  },
})