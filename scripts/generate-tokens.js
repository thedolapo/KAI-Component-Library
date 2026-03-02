#!/usr/bin/env node
/**
 * Generates src/tokens/colors.css from Klario_HabibDSVariables.json.
 *
 * Usage: node scripts/generate-tokens.js
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ── Load JSON ──────────────────────────────────────────────────────────────

const raw = readFileSync(resolve(ROOT, 'Klario_HabibDSVariables.json'), 'utf8');
const json = JSON.parse(raw);
const collection = json.collections[0];
const variables = collection.variables;
const modes = collection.modes; // ['Klario', 'Morning Horizon', ...]

// ── Grouping map (matches logical order in Colors.jsx) ─────────────────────

const GROUP_MAP = {
  'Brand & Core':           ['Main', 'Accent'],
  'Button':                 ['Button'],
  'Text & Typography':      ['Text', 'Font', 'Link'],
  'Backgrounds & Surfaces': ['Container', 'Application', 'Shell', 'Tile', 'Foreground'],
  'Semantic / Status':      ['Semantic', 'Indication'],
  'Interactive':            ['Input', 'Interaction', 'Scrollbar', 'Slider'],
  'Data Visualization':     ['Chart', 'Legend', 'Progress'],
  'Components':             ['Icon', 'Illustrative', 'Avatar', 'Badge', 'Toolbar',
                             'Tab', 'List', 'ObjectHeader', 'Resource', 'Busy', 'Assistant'],
  'Structure':              ['Focus', 'Shadow', 'HighContrast', 'Internal', 'Additional Variables'],
};

// ── CSS variable naming ────────────────────────────────────────────────────

function pathToCSSVar(pathSegments) {
  return '--kai-' + pathSegments
    .join('/')
    .replace(/\s+/g, '-')
    .replace(/[/_]/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ── Walk JSON tree to collect color tokens ─────────────────────────────────

function walkNode(node, path, accumulator) {
  for (const [key, value] of Object.entries(node)) {
    if (!value || typeof value !== 'object') continue;

    if (value.type === 'color' && value.values) {
      // Leaf color token
      const cssVar = pathToCSSVar([...path, key]);
      accumulator.push({ cssVar, values: value.values });
    } else if (!value.values) {
      // Container node (no .values property) → recurse
      walkNode(value, [...path, key], accumulator);
    }
    // else: non-color leaf (number/string) — skip
  }
}

// ── Collect tokens in group order ──────────────────────────────────────────

const allGroups = {}; // { groupName: [{ cssVar, values }] }
let totalTokens = 0;

for (const [groupName, categoryNames] of Object.entries(GROUP_MAP)) {
  const tokens = [];
  for (const catName of categoryNames) {
    const catData = variables[catName];
    if (!catData) continue;
    walkNode(catData, [catName], tokens);
  }
  allGroups[groupName] = tokens;
  totalTokens += tokens.length;
}

// ── Mode → CSS selector map ────────────────────────────────────────────────

const modeSelectors = {
  'Klario':              ':root',
  'Morning Horizon':     '[data-theme="morning-horizon"]',
  'Evening Horizon':     '[data-theme="evening-horizon"]',
  'High Contrast White': '[data-theme="high-contrast-white"]',
  'High Contrast Black': '[data-theme="high-contrast-black"]',
};

// ── Generate CSS output ────────────────────────────────────────────────────

const lines = [];

lines.push(`/**`);
lines.push(` * KAI Design System Color Tokens`);
lines.push(` * Auto-generated from Klario_HabibDSVariables.json — KlarioHorizon collection`);
lines.push(` * ${totalTokens} color tokens across ${Object.keys(allGroups).length} groups × ${modes.length} themes`);
lines.push(` *`);
lines.push(` * Usage:`);
lines.push(` *   import '../tokens/colors.css';`);
lines.push(` *   document.documentElement.dataset.theme = 'morning-horizon';`);
lines.push(` *`);
lines.push(` * Available data-theme values:`);
lines.push(` *   (none / :root)        = Klario (default)`);
lines.push(` *   morning-horizon`);
lines.push(` *   evening-horizon`);
lines.push(` *   high-contrast-white`);
lines.push(` *   high-contrast-black`);
lines.push(` */`);
lines.push('');

for (const [modeLabel, selector] of Object.entries(modeSelectors)) {
  const divider = '='.repeat(60);
  lines.push(`/* ${divider}`);
  lines.push(`   ${modeLabel.toUpperCase()}${selector === ':root' ? ' (default)' : ''}`);
  lines.push(`   ${divider} */`);
  lines.push(`${selector} {`);

  for (const [groupName, tokens] of Object.entries(allGroups)) {
    if (tokens.length === 0) continue;
    lines.push(`  /* ── ${groupName} (${tokens.length} tokens) ── */`);
    for (const { cssVar, values } of tokens) {
      const value = values[modeLabel] ?? values['Klario'] ?? 'transparent';
      lines.push(`  ${cssVar}: ${value};`);
    }
    lines.push('');
  }

  lines.push('}');
  lines.push('');
}

// ── Write output ───────────────────────────────────────────────────────────

const outputPath = resolve(ROOT, 'src/tokens/colors.css');
mkdirSync(resolve(ROOT, 'src/tokens'), { recursive: true });
writeFileSync(outputPath, lines.join('\n'), 'utf8');

console.log(`✅ Generated ${outputPath}`);
console.log(`   ${totalTokens} color tokens × ${modes.length} themes`);
console.log(`   Groups: ${Object.keys(allGroups).join(', ')}`);
