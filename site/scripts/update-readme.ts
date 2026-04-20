/**
 * Regenerates the repo README tool list from site/src/data/tools.ts.
 * Run: npm run update-readme (from site/). Wired to prebuild so deploys stay in sync.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categories, totalTools } from '../src/data/tools.ts';
import type { Tool } from '../src/data/tools.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const readmePath = join(__dirname, '../../README.md');

const START = '<!-- tools:readme:start -->';
const END = '<!-- tools:readme:end -->';

function hostLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function formatTool(tool: Tool): string {
  const host = hostLabel(tool.url);
  return `**${tool.name}**  \n[${host}](${tool.url})  \n${tool.description}\n\n`;
}

function generatedBody(): string {
  const site = 'https://tools.abl.design';
  const toc = categories.map((c) => `- [${c.label}](${site}/#${c.id})`).join('\n');

  const sections = categories
    .map((c) => {
      const toolsMd = c.tools.map(formatTool).join('');
      return `## ${c.label}\n\n${c.description}\n\n${toolsMd}`;
    })
    .join('\n');

  return `## Categories\n\n**${totalTools}** tools in **${categories.length}** categories\n\n${toc}\n\n${sections}`;
}

function main(): void {
  const readme = readFileSync(readmePath, 'utf8');
  const startIdx = readme.indexOf(START);
  const endIdx = readme.indexOf(END);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error(
      `README must contain ${START} and ${END} markers (in order). Add them around the auto-generated block.`,
    );
  }

  const before = readme.slice(0, startIdx + START.length);
  const after = readme.slice(endIdx);
  const body = generatedBody().trimEnd();
  const next = `${before}\n\n${body}\n\n${after}`;
  writeFileSync(readmePath, next, 'utf8');
  console.log('README updated:', readmePath);
}

main();
