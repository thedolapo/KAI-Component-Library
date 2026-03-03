/**
 * UI5 Components/Button
 * Figma: Button — node-id 91702:11734
 *
 * Note: This is the UI5 React Button (KAI-themed via sap-bridge.css).
 * The "Example/Button" story is the custom Klario button component.
 */

import React from 'react';
import { Button } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=91702:11734';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-button--default';

export default {
  title: 'UI5 Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'UI5 React Button themed with KAI colour tokens via the SAP bridge CSS. ' +
          'Supports Emphasized (primary), Default (secondary), Transparent, Positive, Negative, and Attention designs. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['Default', 'Emphasized', 'Positive', 'Negative', 'Attention', 'Transparent'],
    },
    children: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    design: 'Emphasized',
    children: 'Button',
    disabled: false,
  },
};

export const Emphasized = {
  args: { design: 'Emphasized', children: 'Primary Action' },
  render: (args) => <Button {...args} />,
};

export const Default = {
  args: { design: 'Default', children: 'Secondary Action' },
  render: (args) => <Button {...args} />,
};

export const AllDesigns = {
  name: 'All Designs',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
      {['Emphasized', 'Default', 'Transparent', 'Positive', 'Negative', 'Attention'].map((d) => (
        <Button key={d} design={d}>{d}</Button>
      ))}
    </div>
  ),
};

export const WithIcon = {
  name: 'With Icon',
  args: { design: 'Default', icon: 'add', children: 'Add Item' },
  render: (args) => <Button {...args} />,
};
