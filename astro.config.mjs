import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: "LeoRoese Blog",
    customCss: ["./src/tailwind.css"],
    defaultLocale: "en",
    logo: {
      src: "./src/assets/logo.svg",
      replacesTitle: true
    },
    social: {
      github: "https://github.com/withastro/starlight"
    },
    sidebar: [{
      label: "Outlines",
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "How to use",
        link: "/outlines/how-to-use/"
      }]
    }, {
      label: "Notes",
      autogenerate: {
        directory: "notes"
      }
    }]
  }), tailwind({
    applyBaseStyles: false
  }), react()]
});