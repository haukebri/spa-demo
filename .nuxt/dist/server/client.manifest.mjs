export default {
  "_nuxt-link.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "nuxt-link.js",
    "name": "nuxt-link",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "_vue.65b7bcda.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "vue.65b7bcda.js",
    "name": "vue.65b7bcda",
    "imports": [
      "node_modules/nuxt/dist/app/entry.js"
    ]
  },
  "node_modules/nuxt/dist/app/components/error-404.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "error-404.js",
    "name": "error-404",
    "src": "node_modules/nuxt/dist/app/components/error-404.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "_vue.65b7bcda.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": [
      "error-404.css"
    ]
  },
  "error-404.css": {
    "file": "error-404.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "node_modules/nuxt/dist/app/components/error-500.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "error-500.js",
    "name": "error-500",
    "src": "node_modules/nuxt/dist/app/components/error-500.vue",
    "isDynamicEntry": true,
    "imports": [
      "_vue.65b7bcda.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": [
      "error-500.css"
    ]
  },
  "error-500.css": {
    "file": "error-500.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "node_modules/nuxt/dist/app/entry.js": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "entry.js",
    "name": "entry",
    "src": "node_modules/nuxt/dist/app/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "node_modules/nuxt/dist/app/components/error-404.vue",
      "node_modules/nuxt/dist/app/components/error-500.vue"
    ]
  },
  "pages/about.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "about.js",
    "name": "about",
    "src": "pages/about.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": [
      "about.css"
    ]
  },
  "about.css": {
    "file": "about.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  },
  "pages/index.vue": {
    "resourceType": "script",
    "module": true,
    "prefetch": true,
    "preload": true,
    "file": "index.js",
    "name": "index",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "_nuxt-link.js",
      "node_modules/nuxt/dist/app/entry.js"
    ],
    "css": [
      "index.css"
    ]
  },
  "index.css": {
    "file": "index.css",
    "resourceType": "style",
    "prefetch": true,
    "preload": true
  }
}