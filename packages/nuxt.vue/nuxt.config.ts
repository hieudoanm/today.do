import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        "data-theme": "nothing", // 👈 set DaisyUI theme
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/fonts"],
  vite: { plugins: [tailwindcss()] },
  css: ["~/css/global.css"],
});
