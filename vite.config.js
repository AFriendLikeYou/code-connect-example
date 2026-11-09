import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Dieselben Svelte-Komponenten laufen zweimal: als Svelte (index.html) und als Web
// Components (web-components.html). Die Dateien in src/wc/ werden zu Custom Elements
// kompiliert; das CSS jeder Komponente kommt mit ihr mit, auch in den Shadow DOM.
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: { css: 'injected' },
      dynamicCompileOptions: ({ filename }) =>
        filename.includes('/src/wc/') ? { customElement: true } : undefined,
    }),
  ],
  build: {
    rollupOptions: {
      input: { main: 'index.html', wc: 'web-components.html' },
    },
  },
});
