import React, { useState } from 'react';
import './fonts.css';
import './typography.css';

// ── Type Scale ─────────────────────────────────────────────────────────────
// Ordered largest → smallest, sourced from Klario_HabibDSVariables.json
// (Font/Size tokens, all values in px)

const TYPE_SCALE = [
  { token: 'sapFontHeader1Size', label: 'Header 1',   px: 48 },
  { token: 'sapFontHeader2Size', label: 'Header 2',   px: 32 },
  { token: 'sapFontHeader3Size', label: 'Header 3',   px: 24 },
  { token: 'sapFontHeader4Size', label: 'Header 4',   px: 20 },
  { token: 'sapFontHeader5Size', label: 'Header 5',   px: 16 },
  { token: 'sapFontLargeSize',   label: 'Large',       px: 16 },
  { token: 'sapFontSize',        label: 'Base (Body)', px: 14 },
  { token: 'sapFontSmallSize',   label: 'Small',       px: 12 },
];

// ── Font Weights ───────────────────────────────────────────────────────────

const WEIGHTS = [
  { token: 'sapFontLightFamily',          label: 'Light',           cssWeight: 300,   family: '72' },
  { token: 'sapFontFamily',               label: 'Regular',         cssWeight: 400,   family: '72' },
  { token: 'sapFontSemiboldFamily',        label: 'Semibold',        cssWeight: 600,   family: '72' },
  { token: 'sapFontSemiboldDuplexFamily',  label: 'Semibold Duplex', cssWeight: 600,   family: '72-SemiboldDuplex' },
  { token: 'sapFontBoldFamily',            label: 'Bold',            cssWeight: 700,   family: '72' },
  { token: 'sapFontBlackFamily',           label: 'Black',           cssWeight: 900,   family: '72' },
];

// ── Font Styles ────────────────────────────────────────────────────────────

const STYLES = [
  { label: 'Italic',           cssWeight: 400, cssStyle: 'italic', family: '72' },
  { label: 'Bold Italic',      cssWeight: 700, cssStyle: 'italic', family: '72' },
  { label: 'Condensed',        cssWeight: 400, cssStyle: 'normal', family: '72Condensed' },
  { label: 'Condensed Bold',   cssWeight: 700, cssStyle: 'normal', family: '72Condensed' },
];

const SPECIMEN_TEXT = 'The quick brown fox jumps over the lazy dog';
const LOREM = 'Clarity, simplicity, and intent — the foundations of great design. Every token, ' +
  'every spacing unit, every colour choice reflects a deliberate decision to create consistency ' +
  'and trust across every touchpoint of the KAI product experience.';

// ── Section Header ─────────────────────────────────────────────────────────

const SectionHeading = ({ id, children }) => (
  <h2 id={id} className="typo-section-title">{children}</h2>
);

// ── Type Scale Table ───────────────────────────────────────────────────────

const TypeScaleSection = ({ weight }) => (
  <section className="typo-section" id="type-scale">
    <SectionHeading id="type-scale">Type Scale</SectionHeading>
    <p className="typo-section-desc">
      All size tokens from <code>Font/Size</code> in the KlarioHorizon collection.
      Base font family is <code>72</code> — SAP's proprietary typeface.
    </p>
    <div className="typo-scale-table">
      {TYPE_SCALE.map(({ token, label, px }) => {
        const rem = (px / 16).toFixed(3).replace(/\.?0+$/, '');
        return (
          <div key={token} className="typo-scale-row">
            <div className="typo-scale-meta">
              <span className="typo-scale-label">{label}</span>
              <span className="typo-scale-token">{token}</span>
              <span className="typo-scale-size">
                {px}px <span className="typo-scale-rem">/ {rem}rem</span>
              </span>
            </div>
            <div
              className="typo-scale-specimen"
              style={{
                fontFamily: "'72', 'Helvetica Neue', sans-serif",
                fontSize: px,
                fontWeight: weight,
                lineHeight: px >= 24 ? 1.2 : 1.4,
              }}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

// ── Font Weights Table ─────────────────────────────────────────────────────

const WeightsSection = () => (
  <section className="typo-section" id="weights">
    <SectionHeading>Font Weights</SectionHeading>
    <p className="typo-section-desc">
      All weight variants included in the 72 typeface family.
    </p>
    <div className="typo-weights-list">
      {WEIGHTS.map(({ token, label, cssWeight, family }) => (
        <div key={token} className="typo-weight-row">
          <div className="typo-weight-meta">
            <span className="typo-weight-label">{label}</span>
            <span className="typo-weight-token">{token}</span>
            <code className="typo-weight-value">{cssWeight}</code>
          </div>
          <div
            className="typo-weight-specimen"
            style={{
              fontFamily: `'${family}', '72', 'Helvetica Neue', sans-serif`,
              fontWeight: cssWeight,
            }}
          >
            {SPECIMEN_TEXT}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ── Font Styles Section ────────────────────────────────────────────────────

const StylesSection = () => (
  <section className="typo-section" id="styles">
    <SectionHeading>Font Styles &amp; Variants</SectionHeading>
    <p className="typo-section-desc">
      Italic and Condensed variants from the 72 font folder.
    </p>
    <div className="typo-weights-list">
      {STYLES.map(({ label, cssWeight, cssStyle, family }) => (
        <div key={label} className="typo-weight-row">
          <div className="typo-weight-meta">
            <span className="typo-weight-label">{label}</span>
            <code className="typo-weight-value">
              {cssWeight} / {cssStyle}
            </code>
          </div>
          <div
            className="typo-weight-specimen"
            style={{
              fontFamily: `'${family}', '72', 'Helvetica Neue', sans-serif`,
              fontWeight: cssWeight,
              fontStyle: cssStyle,
            }}
          >
            {SPECIMEN_TEXT}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ── Paragraph Specimen ─────────────────────────────────────────────────────

const SpecimenSection = () => (
  <section className="typo-section" id="specimen">
    <SectionHeading>Paragraph Specimen</SectionHeading>
    <p className="typo-section-desc">
      72 Regular at 14px (base body size) showing realistic paragraph reading comfort.
    </p>
    <div className="typo-specimen-block">
      <p className="typo-specimen-heading">KAI Design Language</p>
      <p className="typo-specimen-body">{LOREM}</p>
      <p className="typo-specimen-small">
        Version 1.0 · KlarioHorizon · sapFontFamily: "72" · sapFontSize: 14px
      </p>
    </div>
  </section>
);

// ── Side Nav ───────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'type-scale', label: 'Type Scale' },
  { id: 'weights',    label: 'Font Weights' },
  { id: 'styles',     label: 'Styles & Variants' },
  { id: 'specimen',   label: 'Paragraph Specimen' },
];

const TypoSideNav = ({ active }) => (
  <nav className="colors-sidenav" aria-label="Typography sections">
    <p className="colors-sidenav__label">Sections</p>
    <ul className="colors-sidenav__list">
      {NAV_ITEMS.map(({ id, label }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={`colors-sidenav__link${active === id ? ' colors-sidenav__link--active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <span className="colors-sidenav__name">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// ── Typography (root) ──────────────────────────────────────────────────────

export const Typography = ({ previewWeight = 400 }) => {
  const [active] = useState('type-scale');

  return (
    <div className="colors-page">
      <TypoSideNav active={active} />

      <div className="colors-main">
        <header className="colors-header">
          <h1>KAI Design System Typography</h1>
          <p className="colors-subtitle">
            72 — SAP's typeface · 10 variants · 8 size tokens
          </p>
        </header>

        {/* Weight selector for the scale preview */}
        <div className="typo-weight-switcher">
          <span className="typo-weight-switcher__label">Scale preview weight:</span>
          {WEIGHTS.map(({ label, cssWeight }) => (
            <span
              key={cssWeight + label}
              className={`mode-pill${previewWeight === cssWeight ? ' mode-pill--active' : ''}`}
              style={{ cursor: 'default' }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="colors-content">
          <TypeScaleSection weight={previewWeight} />
          <WeightsSection />
          <StylesSection />
          <SpecimenSection />
        </div>
      </div>
    </div>
  );
};

export default Typography;
