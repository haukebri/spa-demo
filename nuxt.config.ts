// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  ssr: false,
  experimental:{
    appManifest: false,
  },

  id:'app',
  rootId:'app',

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
