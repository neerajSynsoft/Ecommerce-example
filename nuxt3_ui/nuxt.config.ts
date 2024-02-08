// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/app.css'],
  modules: [
  '@nuxt/ui',
  '@pinia/nuxt',
  "nuxt-server-utils",
  '@vee-validate/nuxt',
  '@nuxtjs/i18n',
  '@samk-dev/nuxt-vcalendar',
],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  vue: {
    defineModel: true,
    propsDestructure: true
  },
  runtimeConfig: {
    mongoUrls: [ process.env.MONGODB_URI ?? "" , 
    process.env.MONGODB_URI1 ?? "",
    process.env.MONGODB_URI2 ?? "",
    process.env.MONGODB_URI3 ?? "",
    process.env.MONGODB_URI4 ?? "",
    process.env.MONGODB_URI5 ?? "",
    ]
  },
  nitro: { },
  // imports: {
  //   presets: [
  //     {
  //       from: 'vue-i18n',
  //       imports: ['useI18n']
  //     }
  //   ]
  // }
  // colorMode: {
  //   preference: 'light'
  // }
})
