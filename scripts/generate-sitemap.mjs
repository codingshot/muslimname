#!/usr/bin/env node
/**
 * Generates sitemap.xml from static routes and data.
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://muslimname.me";

const staticRoutes = [
  "",
  "/names",
  "/generator",
  "/western-names",
  "/legal-guide",
  "/contribute",
  "/terms",
  "/privacy",
  "/profile",
  "/blogs",
];

function loadData() {
  const namesPath = join(__dirname, "../src/data/names.ts");
  const blogsPath = join(__dirname, "../src/data/blogs.ts");
  const mappingPath = join(__dirname, "../src/data/nameMapping.ts");
  const namesContent = readFileSync(namesPath, "utf-8");
  const blogsContent = readFileSync(blogsPath, "utf-8");
  const mappingContent = readFileSync(mappingPath, "utf-8");

  const nameSlugs = [...namesContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const blogSlugs = [...blogsContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const mappingKeys = [...mappingContent.matchAll(/\n\s+"([a-z0-9\u4e00-\u9fff\-]+)"\s*:\s*\{\s*muslimNames/gu)].map((m) => m[1]);

  return {
    nameSlugs: [...new Set(nameSlugs)],
    blogSlugs: [...new Set(blogSlugs)],
    mappingKeys: [...new Set(mappingKeys)],
  };
}

function url(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function main() {
  const { nameSlugs, blogSlugs, mappingKeys } = loadData();

  const urls = [
    ...staticRoutes.map((r) => ({ loc: url(r), priority: r === "" ? "1.0" : "0.8", changefreq: "weekly" })),
    ...nameSlugs.map((s) => ({ loc: url(`/name/${s}`), priority: "0.7", changefreq: "monthly" })),
    ...mappingKeys.map((k) => ({ loc: url(`/western-names/${k}`), priority: "0.6", changefreq: "monthly" })),
    ...blogSlugs.map((s) => ({ loc: url(`/blogs/${s}`), priority: "0.8", changefreq: "monthly" })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today()}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  const outPath = join(__dirname, "../public/sitemap.xml");
  writeFileSync(outPath, xml, "utf-8");
  console.log(`Wrote sitemap.xml with ${urls.length} URLs`);
}

main();
