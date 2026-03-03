/**
 * UI5 Components/Icon
 * Figma: Icon — node-id 25058:266
 */

import React from 'react';
import { Icon } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=25058:266';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-icon--default';

const SAMPLE_ICONS = [
  'home', 'settings', 'person-placeholder', 'search', 'add', 'edit', 'delete',
  'bell', 'message-popup', 'calendar', 'filter', 'download', 'upload', 'chart-bar-clustered',
  'accept', 'decline', 'warning2', 'information', 'question-mark',
];

export default {
  title: 'UI5 Components/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Renders an SAP icon from the built-in icon font. Over 1000 icons available. ' +
          'Browse all icons at [SAP Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html). ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    name: { control: 'text' },
    size: { control: 'text' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
  },
  args: {
    name: 'home',
    size: '2rem',
    interactive: false,
    showTooltip: false,
  },
};

export const Default = {
  render: (args) => (
    <Icon {...args} style={{ color: 'var(--kai-main-sap-brand-color, #5f00ff)' }} />
  ),
};

export const IconGrid = {
  name: 'Icon Showcase',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.25rem',
        padding: '1rem',
      }}
    >
      {SAMPLE_ICONS.map((name) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.375rem',
            width: 80,
          }}
        >
          <Icon
            name={name}
            style={{
              fontSize: '2rem',
              color: 'var(--kai-main-sap-brand-color, #5f00ff)',
            }}
          />
          <span
            style={{
              fontSize: '0.6875rem',
              color: 'var(--kai-text-sap-content-label-color, #556b82)',
              textAlign: 'center',
              wordBreak: 'break-word',
              fontFamily: '\'72\', Arial, sans-serif',
            }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
