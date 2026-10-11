import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';

const html = await readFile('.next/server/app/index.html', 'utf8');
assert.equal((html.match(/<h1\b/g) || []).length, 1);
for (const text of ['In development', 'LiDAR-powered obstacle awareness.', 'Physical validation is ongoing.', 'Core sensing works offline on the device', 'Green does not establish a safe route.']) assert.ok(html.includes(text), `Missing prerendered text: ${text}`);
for (const id of ['main', 'experience', 'how-it-works', 'development']) assert.ok(html.includes(`id="${id}"`));
assert.match(html, /name="map-view"[^>]*checked=""/);
assert.match(html, /<details[\s>]/);
assert.match(html, /<summary[^>]*aria-label="Section menu"/);
assert.equal(html.includes('rel="canonical"'), false);
for (const asset of ['avoido-device.png', 'map-top.svg', 'map-front.svg']) assert.ok((await readFile(`public/${asset}`)).length > 0);
const noScripts = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<link\b[^>]*as="script"[^>]*>/g, '');
const fallbackHtml = noScripts.replace(/((?:href|src|srcset|imagesrcset)=")([^"]+)"/gi, (_match, attribute, value) => {
  const absolute = value.replace(/(^|, )\/(?!\/)/g, '$1http://127.0.0.1:3000/');
  return `${attribute}${absolute}"`;
});
assert.equal(fallbackHtml.includes('<script'), false);
await writeFile('evidence/no-scripts.html', fallbackHtml);
console.log('Prerendered content, landmarks, default radio state, native menu, assets and unset canonical pass. Script-free initial HTML saved for fallback browser checks.');
