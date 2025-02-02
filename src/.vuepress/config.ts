import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "SORRYWECAN.AINAG.COM",
  description: "Markdown website containing some AI info",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
