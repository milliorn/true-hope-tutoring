// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: "/true-hope-tutoring/", this is for github pages
//   plugins: [ react(), tailwindcss() ],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// @ts-expect-error: force load until Tailwind fixes .d.mts exports for TS
const tailwindcss = (await import('@tailwindcss/vite')).default;

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
