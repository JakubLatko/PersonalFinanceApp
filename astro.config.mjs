import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  devToolbar:{
    enabled:false,
  },
  output: 'server',
  adapter: netlify(),
  sassOptions: {
    quietDeps: true,
  }
});
