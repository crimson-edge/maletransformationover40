import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://maletransformationover40.com',
  integrations: [tailwind()],
  output: 'static',
  outDir: './dist',
  build: {
    assets: 'assets'
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/inter', '@fontsource/space-grotesk']
    }
  }
});