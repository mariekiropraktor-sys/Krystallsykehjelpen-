import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// VIKTIG: Bytt "site" til det ekte domenet ditt før du publiserer.
// Dette brukes til sitemap.xml, canonical-lenker og Open Graph-URL-er.
export default defineConfig({
  site: "https://www.krystallsykehjelpen.no",
  integrations: [sitemap()],
});
