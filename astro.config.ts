import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import metaTags from "astro-meta-tags";
const config: AstroUserConfig = defineConfig({
	site: "https://astro-keystatic-test.vercel.app",
	output: "hybrid",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		robotsTxt(),
		vercel(),
		react(),
		markdoc(),
		keystatic(),
		metaTags(),
	],
});

// https://astro.build/config
export default defineConfig(config);
