import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

const theme = create({
  base: 'light',

  // Brand
  brandTitle: 'KAI Design System',
  brandUrl:   'https://klario.com',
  brandImage: '/kai-logo.png',
  brandTarget: '_self',

  // KAI colour palette
  colorPrimary:   'hsl(256, 87%, 56%)',   // --kai-main-sap-brand-color
  colorSecondary: 'hsl(256, 88%, 52%)',   // --kai-main-sap-highlight-color

  // App chrome
  appBg:           '#f8f8f8',
  appContentBg:    '#ffffff',
  appBorderColor:  '#e5e5e5',
  appBorderRadius: 4,

  // Typography (SAP 72 typeface)
  fontBase: '"72", "72full", Arial, Helvetica, sans-serif',
  fontCode: 'monospace',

  // Text
  textColor:        '#1d1d1b',
  textInverseColor: '#ffffff',

  // Toolbar / nav bar
  barTextColor:     '#6b6b6b',
  barSelectedColor: 'hsl(256, 87%, 56%)',
  barBg:            '#ffffff',

  // Input fields
  inputBg:           '#ffffff',
  inputBorder:       '#cccccc',
  inputTextColor:    '#1d1d1b',
  inputBorderRadius: 4,
});

addons.setConfig({ theme });
