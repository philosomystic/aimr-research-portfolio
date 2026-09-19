// Retain the original concept figures; compose only the current HAIDR identity labels.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const dir = resolve('aimr-portfolio-v2.0-post-qa/portfolio-web-shell-v0.1-v2.0/assets/prospective-research');
const font = 'Georgia, Times New Roman, serif';
function patch(id, x, y, w, h, colors) {
  const [tl, tr, bl, br] = colors;
  return `<defs>
  <linearGradient id="${id}-top"><stop stop-color="${tl}"/><stop offset="1" stop-color="${tr}"/></linearGradient>
  <linearGradient id="${id}-bottom"><stop stop-color="${bl}"/><stop offset="1" stop-color="${br}"/></linearGradient>
  <linearGradient id="${id}-fade" x2="0" y2="1"><stop stop-color="black"/><stop offset="1" stop-color="white"/></linearGradient>
  <mask id="${id}-blend"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-fade)"/></mask>
  </defs>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-top)"/>
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id}-bottom)" mask="url(#${id}-blend)"/>`;
}
function compose(name, title, labels) {
  // Embed the original bytes to preserve both the artwork and its compact size.
  const data = readFileSync(resolve(dir, `${name}.webp`)).toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1536" height="1024" viewBox="0 0 1536 1024" role="img" aria-labelledby="title desc">
  <title id="title">${title} — Human–AI Developmental Research Program (HAIDR)</title>
  <desc id="desc">Original concept illustration with the current project identity. Illustrative displays are not empirical results.</desc>
  <image width="1536" height="1024" xlink:href="data:image/webp;base64,${data}"/>
  <g fill="#0b2130" font-family="${font}">${labels}</g>
</svg>\n`;
  writeFileSync(resolve(dir, `${name}-pathways.svg`), svg);
}

compose('developmental-dashboard', 'Developmental Dashboard', `
  ${patch('brand', 130, 16, 307, 91, ['#b8bdc9', '#c5cbd4', '#c7c7c7', '#d2d0ce'])}
  <text x="140" y="38" font-size="16">HUMAN–AI DEVELOPMENTAL</text>
  <text x="140" y="62" font-size="17">RESEARCH PROGRAM</text>
  <text x="140" y="86" font-size="13">HAIDR</text>
  ${patch('screen', 395, 271, 96, 44, ['#e0e0e0', '#e3e3e3', '#e0e0e0', '#e3e3e3'])}
  <text x="405" y="298" font-size="16">HAIDR</text>`);

compose('wayfinder', 'Wayfinder', `
  ${patch('brand-left', 102, 20, 83, 86, ['#dddad2', '#e5e3dd', '#dfdcd4', '#e6e3db'])}
  ${patch('brand-right', 185, 20, 166, 86, ['#d2d1ca', '#c0ccd4', '#dcd8d0', '#d5d7d4'])}
  <text x="108" y="50" font-size="21">HAIDR</text>
  <text x="108" y="74" font-size="11" letter-spacing="1.5">DEVELOPMENTAL</text>
  <text x="108" y="92" font-size="11" letter-spacing="1.5">LEARNING ENVIRONMENTS</text>`);

compose('research-methodology-acquisition', 'AI-Mediated Research Methodology Acquisition', `
  ${patch('brand', 143, 911, 370, 70, ['#f6f4f0', '#f5f3ef', '#f8f7f3', '#f8f7f3'])}
  <text x="148" y="942" font-size="19">HUMAN–AI DEVELOPMENTAL</text>
  <text x="148" y="969" font-size="15">RESEARCH PROGRAM (HAIDR)</text>`);
