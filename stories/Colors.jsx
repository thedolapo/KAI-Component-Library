import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import colorTokens from '../Klario_HabibDSVariables.json';
import './colors.css';

// ── Constants ──────────────────────────────────────────────────────────────

const MODES = [
  'Klario',
  'Morning Horizon',
  'Evening Horizon',
  'High Contrast White',
  'High Contrast Black',
];

// Top-level group → JSON category mapping, in priority order
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

// (Sub-category order follows the Figma/JSON export order — no manual re-sorting)

// ── Utilities ──────────────────────────────────────────────────────────────

export function groupSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function pathToCSSVar(pathSegments) {
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

/**
 * Walk a JSON node tree, collecting color tokens.
 * subCategory is only set when there is a genuine intermediate grouping level
 * (i.e. path has ≥ 3 segments: [category, subCat, ...tokenName]).
 * Flat tokens (category → tokenName directly) have subCategory = null.
 */
function walkNode(node, path, categoryRoot, accumulator) {
  for (const [key, value] of Object.entries(node)) {
    if (!value || typeof value !== 'object') continue;

    if (value.type === 'color' && value.values) {
      const fullPath = [...path, key];
      // Only use a sub-category label when there is a real intermediate level
      // fullPath = [category, subCat, ..., tokenName] → length ≥ 3
      const subCategory = fullPath.length >= 3 ? fullPath[1] : null;
      accumulator.push({
        cssVar: pathToCSSVar(fullPath),
        path: fullPath,
        values: value.values,
        subCategory,
      });
    } else if (!value.values) {
      walkNode(value, [...path, key], categoryRoot, accumulator);
    }
  }
}

/**
 * Returns { groupName → { subCategory → token[] } }
 * Sub-category order is the JSON source order (Figma export order), not alphabetical.
 */
export function extractGroupedColors(variables) {
  const grouped = {};
  for (const [groupName, categoryNames] of Object.entries(GROUP_MAP)) {
    const allTokens = [];
    // Track insertion order of sub-categories from JSON
    const subOrder = [];

    for (const catName of categoryNames) {
      const catData = variables[catName];
      if (!catData) continue;
      walkNode(catData, [catName], catName, allTokens);
    }

    // Bucket by sub-category in first-seen (JSON) order.
    // Tokens with subCategory=null are all grouped under '__flat__'.
    const bySub = {};
    for (const token of allTokens) {
      const key = token.subCategory ?? '__flat__';
      if (!bySub[key]) {
        bySub[key] = [];
        subOrder.push(key);
      }
      bySub[key].push(token);
    }

    // Preserve JSON source order — no re-sorting
    const orderedSubs = Object.fromEntries(subOrder.map((s) => [s, bySub[s]]));

    grouped[groupName] = {
      total: allTokens.length,
      subCategories: orderedSubs,
    };
  }
  return grouped;
}

function copyText(text, onSuccess) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(fallback);
  } else {
    fallback();
  }
  function fallback() {
    const el = Object.assign(document.createElement('textarea'), {
      value: text,
      style: 'position:fixed;opacity:0',
    });
    document.body.appendChild(el);
    el.select();
    try { document.execCommand('copy'); } catch (_) {}
    document.body.removeChild(el);
    onSuccess();
  }
}

// ── ColorCard ──────────────────────────────────────────────────────────────

const ColorCard = ({ cssVar, tokenData, mode }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  const colorValue = tokenData.values?.[mode] ?? tokenData.values?.['Klario'] ?? 'transparent';
  const tokenName = tokenData.path?.[tokenData.path.length - 1] ?? cssVar;
  const fullPath   = tokenData.path?.join(' / ') ?? cssVar;

  const handleCopy = useCallback(() => {
    copyText(colorValue, () => {
      clearTimeout(timerRef.current);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 1400);
    });
  }, [colorValue]);

  return (
    <div
      className={`color-card${copied ? ' color-card--copied' : ''}`}
      onClick={handleCopy}
      role="button"
      tabIndex={0}
      title={`Click to copy ${colorValue}`}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCopy()}
      aria-label={`Copy ${colorValue}`}
    >
      <div className="color-card__swatch" style={{ background: colorValue }} />
      <div className="color-card__info">
        <p className="color-card__name" title={fullPath}>{tokenName}</p>
        <p className="color-card__var">{cssVar}</p>
        <p className="color-card__value">
          {copied ? <span className="color-card__copied">✓ Copied!</span> : colorValue}
        </p>
      </div>
    </div>
  );
};

// ── ColorGroup ─────────────────────────────────────────────────────────────

export const ColorGroup = ({ title, groupData, mode }) => {
  const id = groupSlug(title);
  if (!groupData || groupData.total === 0) return null;

  const { total, subCategories } = groupData;
  const subEntries = Object.entries(subCategories);

  // Only show sub-category dividers when there are ≥ 2 meaningful sub-groups
  // AND each sub-group came from a real intermediate path level (detected in walkNode)
  const showSubs = subEntries.length >= 2 &&
    subEntries.some(([, tokens]) => tokens.length >= 2);

  return (
    <section className="color-group" id={id}>
      <div className="color-group-header">
        <h2 className="color-group-title">{title}</h2>
        <span className="color-group-count">{total} tokens</span>
      </div>

      {showSubs
        ? subEntries.map(([subName, tokens]) => (
            <div key={subName} className="color-subgroup">
              <h3 className="color-subgroup-title">
                {subName}
                <span className="color-subgroup-count">{tokens.length}</span>
              </h3>
              <div className="color-grid">
                {tokens.map(({ cssVar, path, values }) => (
                  <ColorCard key={cssVar} cssVar={cssVar} tokenData={{ path, values }} mode={mode} />
                ))}
              </div>
            </div>
          ))
        : (
          <div className="color-grid">
            {subEntries.flatMap(([, tokens]) => tokens).map(({ cssVar, path, values }) => (
              <ColorCard key={cssVar} cssVar={cssVar} tokenData={{ path, values }} mode={mode} />
            ))}
          </div>
        )
      }
    </section>
  );
};

// ── ModeSwitcher ───────────────────────────────────────────────────────────

export const ModeSwitcher = ({ mode, onChange }) => (
  <div className="mode-switcher" role="group" aria-label="Color theme mode">
    {MODES.map((m) => (
      <button
        key={m}
        className={`mode-pill${mode === m ? ' mode-pill--active' : ''}`}
        onClick={() => onChange(m)}
        aria-pressed={mode === m}
        type="button"
      >
        {m}
      </button>
    ))}
  </div>
);

// ── SideNav ────────────────────────────────────────────────────────────────

const SideNav = ({ groups, activeGroup }) => (
  <nav className="colors-sidenav" aria-label="Color sections">
    <p className="colors-sidenav__label">Sections</p>
    <ul className="colors-sidenav__list">
      {groups.map(([name, data]) => {
        if (!data || data.total === 0) return null;
        const slug = groupSlug(name);
        const isActive = activeGroup === slug;
        return (
          <li key={name}>
            <a
              href={`#${slug}`}
              className={`colors-sidenav__link${isActive ? ' colors-sidenav__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="colors-sidenav__name">{name}</span>
              <span className="colors-sidenav__count">{data.total}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

// ── Colors (root) ──────────────────────────────────────────────────────────

export const Colors = ({ mode: modeProp = 'Klario' }) => {
  const [mode, setMode] = useState(modeProp);
  const [query, setQuery] = useState('');
  const [activeGroup, setActiveGroup] = useState('brand-core');
  const mainRef = useRef(null);

  useEffect(() => { setMode(modeProp); }, [modeProp]);

  const allVariables = useMemo(() => colorTokens.collections[0]?.variables ?? {}, []);
  const groupedColors = useMemo(() => extractGroupedColors(allVariables), [allVariables]);
  const groupEntries = useMemo(() => Object.entries(groupedColors), [groupedColors]);
  const totalTokens = useMemo(() => groupEntries.reduce((n, [, d]) => n + (d.total || 0), 0), [groupEntries]);

  // Filter groups by search query
  const q = query.trim().toLowerCase();
  const filteredEntries = useMemo(() => {
    if (!q) return groupEntries;
    return groupEntries.map(([name, data]) => {
      if (!data) return [name, data];
      const filteredSubs = {};
      let filteredTotal = 0;
      for (const [sub, tokens] of Object.entries(data.subCategories)) {
        const matched = tokens.filter(
          (t) =>
            t.cssVar.includes(q) ||
            (t.path && t.path.join(' ').toLowerCase().includes(q)) ||
            (t.values && Object.values(t.values).some((v) => v.toLowerCase().includes(q))),
        );
        if (matched.length) {
          filteredSubs[sub] = matched;
          filteredTotal += matched.length;
        }
      }
      return [name, { total: filteredTotal, subCategories: filteredSubs }];
    }).filter(([, d]) => d && d.total > 0);
  }, [groupEntries, q]);

  const matchCount = filteredEntries.reduce((n, [, d]) => n + (d?.total || 0), 0);

  // IntersectionObserver: highlight active section in side nav
  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const sections = groupEntries
      .filter(([, d]) => d.total > 0)
      .map(([name]) => root.querySelector(`#${groupSlug(name)}`))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveGroup(visible[0].target.id);
      },
      { root, rootMargin: '-5% 0px -55% 0px', threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [groupEntries]);

  return (
    <div className="colors-page">
      <SideNav groups={groupEntries} activeGroup={activeGroup} />

      <div className="colors-main" ref={mainRef}>

        {/* ── Sticky topbar — solid white, never transparent ── */}
        <div className="colors-topbar">
          <header className="colors-header">
            <h1>KAI Design System Colors</h1>
            <p className="colors-subtitle">
              {totalTokens} color tokens · {groupEntries.length} groups · 5 themes
            </p>
          </header>
          <ModeSwitcher mode={mode} onChange={setMode} />
        </div>

        {/* ── Search bar ── */}
        <div className="colors-search-bar">
          <input
            className="colors-search-input"
            type="search"
            placeholder="Search tokens, CSS variables, or HSL values…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search color tokens"
          />
          {q && (
            <span className="colors-search-count">
              {matchCount} result{matchCount !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        {/* ── Color groups ── */}
        <div className="colors-content">
          {filteredEntries.map(([groupName, groupData]) => (
            <ColorGroup
              key={groupName}
              title={groupName}
              groupData={groupData}
              mode={mode}
            />
          ))}
          {q && filteredEntries.length === 0 && (
            <p className="colors-no-results">
              No tokens match <strong>"{query}"</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

Colors.propTypes = { mode: PropTypes.oneOf(MODES) };
Colors.defaultProps = { mode: 'Klario' };
export default Colors;
