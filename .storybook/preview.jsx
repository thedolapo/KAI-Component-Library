import React from 'react';
import '../src/tokens/colors.css';      // 919 KAI token definitions (5 themes)
import '../src/tokens/sap-bridge.css'; // maps --sap* → --kai-* for UI5 components
import '../stories/fonts.css';          // 72 typeface @font-face declarations

/**
 * Theme → data-theme attribute map.
 * Matches the mode argType options used across Design System stories.
 */
const THEME_MAP = {
  'Klario':               '',
  'Morning Horizon':      'morning-horizon',
  'Evening Horizon':      'evening-horizon',
  'High Contrast White':  'high-contrast-white',
  'High Contrast Black':  'high-contrast-black',
};

/**
 * Global decorator: propagates the `mode` arg to document.documentElement
 * as a data-theme attribute so that CSS variable overrides cascade to ALL
 * stories — including UI5 components via the SAP bridge.
 */
export const decorators = [
  (Story, context) => {
    const mode = context.args?.mode;
    const theme =
      mode !== undefined && THEME_MAP[mode] !== undefined
        ? THEME_MAP[mode]
        : '';
    document.documentElement.setAttribute('data-theme', theme);
    return <Story />;
  },
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          // UI5 web components use shadow DOM — axe-core cannot inspect slots directly
          { id: 'color-contrast', enabled: false },
        ],
      },
    },
  },
};

export default preview;
