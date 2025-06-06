import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
//puts things in camelcase format
  css: {
    modules: {
      localsCovention: "camelcase,"
    },
  },
});
