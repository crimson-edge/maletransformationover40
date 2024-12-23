import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maletransformation.me',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('admin') && !page.includes('private') && !page.includes('api'),
      customPages: [
        'https://maletransformation.me/',
        'https://maletransformation.me/about',
        'https://maletransformation.me/blog',
        'https://maletransformation.me/contact',
        'https://maletransformation.me/privacy',
        'https://maletransformation.me/terms'
      ],
      changefreq: 'weekly',
      priority: 0.7
    })
  ],
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