// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  // Global Css
  css: [
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
    "~/assets/css/global.css",
  ],
  plugins: [
    {
      src: "bootstrap/dist/js/bootstrap.bundle.min.js",
      mode: "client",
    },
  ],
  devtools: { enabled: true },
});
