import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external connections for Render
    port: parseInt(process.env.PORT) || 5173, // Use Render's PORT variable or fallback to 5173
  },
  build: {
    outDir: 'frontend/build', // Custom output directory
  },
});
