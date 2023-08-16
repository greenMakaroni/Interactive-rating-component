import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Interactive-rating-component',
  plugins: [react()],
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.jpg', '**/*.svg'],
})
