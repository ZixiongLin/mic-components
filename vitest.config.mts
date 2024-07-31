import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals:true,
    setupFiles: ["/app/setup-test.ts"]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    },
  },
  
})