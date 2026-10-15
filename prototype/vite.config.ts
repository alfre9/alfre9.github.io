import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { scopeSiteCss } from './scope-site-css';

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [scopeSiteCss()] } },
  server: { port: 5173 },
});
