import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const sitemapPath = resolve(process.cwd(), "public", "sitemap.xml");
const today = new Date().toISOString().slice(0, 10);

const sitemapContent = await readFile(sitemapPath, "utf8");

let updatedContent;

if (/<lastmod>.*?<\/lastmod>/.test(sitemapContent)) {
  updatedContent = sitemapContent.replace(
    /<lastmod>.*?<\/lastmod>/,
    `<lastmod>${today}</lastmod>`
  );
} else {
  updatedContent = sitemapContent.replace(
    /(<loc>.*?<\/loc>)/,
    `$1\n    <lastmod>${today}</lastmod>`
  );
}

if (updatedContent !== sitemapContent) {
  await writeFile(sitemapPath, updatedContent, "utf8");
  console.log(`sitemap lastmod updated: ${today}`);
} else {
  console.log("sitemap lastmod already up to date");
}
