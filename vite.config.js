import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  plugins: [
    sveltekit(),
    tailwindcss(),
    FullReload(['content/**/*'])
  ],
});