import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: "1jj5gu3c",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/studio",
    }),
  ],
});
