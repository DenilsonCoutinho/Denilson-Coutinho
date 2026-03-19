import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    allowedHosts: [
      "206b-2804-7f5-921e-eeee-846-fe4e-96f6-47b1.ngrok-free.app"
    ]
  },
  plugins: [
    tailwindcss(),
  ],
})