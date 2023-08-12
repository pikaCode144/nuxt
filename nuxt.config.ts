// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    appKey: 'aabbcc',
    public: {
      baseURL: 'http://qidian.cn'
    }
  },
  app: {
    // 也可以使用useHead({})，进行动态添加
    head: {
      title: '四川成都无线电官网',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
      meta: [
        {
          name: 'keywords',
          content: '四川成都无线电官网'
        }
      ],
      link: [
        {
          rel: 'shortcut icon',
          href: 'favicon.ico',
          type: 'image/x-icon'
        }
      ]
    }
  },
  ssr: true,
  router: {
    options: {
      hashMode: true
    }
  },
  css: ['@/assets/styles/main.css', '@/assets/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  },
  modules: ['@invictus.codes/nuxt-vuetify'],
  vuetify: {
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true
    }
  }
})
