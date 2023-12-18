import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

const config: AstroUserConfig = defineConfig({
	site: "http://www.example.com",
	output: "hybrid",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		robotsTxt(),
		cloudflare(),
		react(),
		markdoc(),
		keystatic(),
	],
});

// https://astro.build/config
export default defineConfig(config);