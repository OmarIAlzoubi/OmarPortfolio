import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const output = path.resolve("out");
const prefix = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
const site = process.env.NEXT_PUBLIC_SITE_URL;
const resumePdfFile = "resume/Omar_Al-Zoubi_AI_Engineer.pdf";
for (const file of ["index.html", "resume/index.html", resumePdfFile, "404.html", "robots.txt", "sitemap.xml", ".nojekyll", "images/projects/noor-prototype.jpg"]) {
  assert.ok(existsSync(path.join(output, file)), `Missing export: ${file}`);
}
for (const file of readdirSync("public/images/certificates").filter((name) => /\.(?:png|jpe?g|webp)$/i.test(name))) {
  assert.ok(existsSync(path.join(output, "images/certificates", file)), `Missing certificate image: ${file}`);
}
assert.ok(!existsSync(path.join(output, "api")), "An API route was exported");
function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((item) => {
    const entry = path.join(directory, item.name);
    return item.isDirectory() ? files(entry) : [entry];
  });
}
for (const file of files(output)) {
  assert.ok(!/\.(?:env|py|db|npy)$|(?:^|[\\/])\.env/.test(file), `Private file in export: ${file}`);
  if (!/\.(?:html|js)$/.test(file)) continue;
  const text = readFileSync(file, "utf8");
  assert.ok(!/\/api\/chat|PORTFOLIO_CHAT_API_KEY|PORTFOLIO_CHAT_ENDPOINT|Open Omar’s portfolio assistant/.test(text), `Chat code in ${file}`);
  if (!file.endsWith(".html")) continue;
  assert.ok(!/class="chat-(?:dock|launcher|panel)/.test(text), "Chat UI in export");
  for (const match of text.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
    const url = new URL(match[1], "https://verify.invalid");
    assert.ok(!prefix || url.pathname.startsWith(`${prefix}/`), `Unprefixed URL: ${match[1]}`);
    const asset = decodeURIComponent(url.pathname.slice(prefix.length)).replace(/^\/+/, "");
    const destination = path.join(output, asset);
    assert.ok(existsSync(destination) || existsSync(path.join(destination, "index.html")), `Broken local URL: ${match[1]}`);
  }
}
const home = readFileSync(path.join(output, "index.html"), "utf8");
const resume = readFileSync(path.join(output, "resume/index.html"), "utf8");
const nextAssets = `${prefix}/_next/`;
assert.ok(home.includes(`href="${nextAssets}`), "Stylesheet URL is missing the Next.js asset path");
assert.ok(home.includes(`src="${nextAssets}`), "JavaScript URL is missing the Next.js asset path");
assert.ok(home.includes(`src="${prefix}/images/projects/noor-prototype.jpg"`), "NOOR image path is incorrect");
assert.ok(home.includes("without-chat"), "Lite layout is missing");
const resumePdfUrl = `${prefix}/${resumePdfFile}`;
for (const [name, html] of [["home", home], ["résumé", resume]]) {
  let resumeActions = 0;
  for (const [, attributes, contents] of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
    const label = contents.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&");
    if (!/(?:résumé|resume|download pdf)/i.test(label)) continue;
    resumeActions += 1;
    const href = attributes.match(/\bhref="([^"]+)"/)?.[1];
    assert.equal(href, resumePdfUrl, `Résumé action on ${name} must use ${resumePdfUrl}`);
  }
  assert.ok(resumeActions, `No résumé PDF action was found on ${name}`);
  assert.ok(html.includes('href="https://linkedin.com/in/-omar-alzoubi-"'), `LinkedIn URL is incorrect on ${name}`);
}
if (site) {
  const origin = new URL(site).origin;
  const base = `${origin}${prefix}/`;
  assert.ok(home.includes(`rel="canonical" href="${base}"`), "Home canonical is incorrect");
  assert.ok(resume.includes(`rel="canonical" href="${base}resume/"`), "Résumé canonical is incorrect");
  const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
  assert.ok(sitemap.includes(`<loc>${base}</loc>`) && sitemap.includes(`<loc>${base}resume/</loc>`), "Sitemap paths are incorrect");
  assert.ok(readFileSync(path.join(output, "robots.txt"), "utf8").includes(`${base}sitemap.xml`), "Robots sitemap is incorrect");
}
console.log(`Verified Lite export at ${prefix || "/"}: local assets, résumé, metadata, no chat/API/private files.`);
