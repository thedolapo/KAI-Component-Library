/**
 * Charts — Design System/Charts
 *
 * Demonstrates DonutChart from @ui5/webcomponents-react-charts using
 * KAI colour tokens as chart segment colours.
 *
 * Uses @ui5/webcomponents-react-charts under the Apache License 2.0.
 * https://github.com/SAP/ui5-webcomponents-react/blob/main/LICENSE.txt
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DonutChart } from '@ui5/webcomponents-react-charts';
import './charts.css';

// ── KAI colour token arrays ─────────────────────────────────────────────

const ORDERED_COLORS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
  (n) => `var(--kai-chart-ordered-sap-chart-ordered-color-${n})`
);

const SEMANTIC_COLORS = [
  'var(--kai-chart-semantic-sap-chart-good)',
  'var(--kai-chart-semantic-sap-chart-bad)',
  'var(--kai-chart-semantic-sap-chart-critical)',
  'var(--kai-chart-semantic-sap-chart-neutral)',
];

// ── Sample datasets ─────────────────────────────────────────────────────

const ORDERED_DATA = [
  { label: 'Design',       value: 28 },
  { label: 'Engineering',  value: 34 },
  { label: 'Marketing',    value: 14 },
  { label: 'Product',      value: 12 },
  { label: 'Operations',   value: 8 },
  { label: 'Other',        value: 4 },
];

const SEMANTIC_DATA = [
  { label: 'On Track',    value: 54 },
  { label: 'At Risk',     value: 23 },
  { label: 'Blocked',     value: 14 },
  { label: 'Completed',   value: 9 },
];

// ── Theme → data-theme attribute map ───────────────────────────────────

const THEME_MAP = {
  'Klario':               '',
  'Morning Horizon':      'morning-horizon',
  'Evening Horizon':      'evening-horizon',
  'High Contrast White':  'high-contrast-white',
  'High Contrast Black':  'high-contrast-black',
};

const MODES = Object.keys(THEME_MAP);

// ── Swatch helper ───────────────────────────────────────────────────────

function LegendItem({ cssVar, label }) {
  return (
    <span className="legend-item">
      <span
        className="legend-swatch"
        style={{ background: `var(${cssVar})` }}
      />
      {cssVar}
    </span>
  );
}

LegendItem.propTypes = {
  cssVar: PropTypes.string.isRequired,
  label: PropTypes.string,
};

// ── Charts component ────────────────────────────────────────────────────

export function Charts({ mode }) {
  const [activeMode, setActiveMode] = useState(mode || 'Klario');

  useEffect(() => {
    if (mode) setActiveMode(mode);
  }, [mode]);

  useEffect(() => {
    const theme = THEME_MAP[activeMode] ?? '';
    document.documentElement.setAttribute('data-theme', theme);
  }, [activeMode]);

  return (
    <div className="charts-page">
      <div className="charts-header">
        <h1>Charts</h1>
        <p>
          DonutChart from <code>@ui5/webcomponents-react-charts</code> rendered with
          KAI colour tokens. The chart segments use CSS variable references so colours
          update automatically when the theme changes.
        </p>

        <div className="mode-switcher" role="group" aria-label="Theme mode">
          {MODES.map((m) => (
            <button
              key={m}
              className={`mode-pill${activeMode === m ? ' active' : ''}`}
              onClick={() => setActiveMode(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="charts-grid">
        {/* ── Ordered palette chart ── */}
        <div className="chart-card">
          <h2>Ordered Palette</h2>
          <p className="chart-subtitle">
            12-colour categorical palette —{' '}
            <code>--kai-chart-ordered-sap-chart-ordered-color-1…12</code>
          </p>

          <DonutChart
            dataset={ORDERED_DATA}
            dimension={{ accessor: 'label' }}
            measure={{
              accessor: 'value',
              colors: ORDERED_COLORS.slice(0, ORDERED_DATA.length),
            }}
            centerLabel="Departments"
            style={{ height: 320 }}
            noLegend={false}
          />

          <div className="token-legend">
            {ORDERED_DATA.map((d, i) => (
              <LegendItem
                key={d.label}
                cssVar={`--kai-chart-ordered-sap-chart-ordered-color-${i + 1}`}
                label={d.label}
              />
            ))}
          </div>
        </div>

        {/* ── Semantic palette chart ── */}
        <div className="chart-card">
          <h2>Semantic Palette</h2>
          <p className="chart-subtitle">
            Status colours — good, bad, critical, neutral
          </p>

          <DonutChart
            dataset={SEMANTIC_DATA}
            dimension={{ accessor: 'label' }}
            measure={{
              accessor: 'value',
              colors: SEMANTIC_COLORS,
            }}
            centerLabel="Status"
            style={{ height: 320 }}
            noLegend={false}
          />

          <div className="token-legend">
            {[
              '--kai-chart-semantic-sap-chart-good',
              '--kai-chart-semantic-sap-chart-bad',
              '--kai-chart-semantic-sap-chart-critical',
              '--kai-chart-semantic-sap-chart-neutral',
            ].map((v) => (
              <LegendItem key={v} cssVar={v} />
            ))}
          </div>
        </div>
      </div>

      <footer className="charts-attribution">
        Charts powered by{' '}
        <a
          href="https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-donutchart--default"
          target="_blank"
          rel="noreferrer"
        >
          @ui5/webcomponents-react-charts
        </a>{' '}
        (Apache 2.0). Colour tokens from the KAI Design System.
      </footer>
    </div>
  );
}

Charts.propTypes = {
  mode: PropTypes.oneOf(MODES),
};

export default Charts;
