import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import remarkBracketedLink from "./src/utils/remark-bracketed-link.mjs";
import admonitionToAside from "./src/utils/admonition-to-aside";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkBracketedLink, admonitionToAside],
  },
  integrations: [
    starlight({
      title: "LeoRoese Blog",
      customCss: ["./src/tailwind.css"],
      defaultLocale: "en",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Notes",
          autogenerate: {
            directory: "notes",
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
