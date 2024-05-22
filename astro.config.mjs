import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.SITE_URL || "https://www.hiuptuition.com",
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: "1jj5gu3c",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/studio",
    }),
    sitemap(),
  ],
});
