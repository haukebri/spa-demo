// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  ssr: false,
  routeRules: {
    '/': {prerender: false},
    '/index.html': {prerender: false},
    '/200.html': {prerender: false},
    '/404.html': {prerender: false},
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `_nuxt/[name].js`,
          chunkFileNames: `_nuxt/[name].js`,
          assetFileNames: `_nuxt/[name].[ext]`,
        },
      },
    },
  },
});
