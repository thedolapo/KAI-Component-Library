/**
 * UI5 Components/Label
 * Figma: Label — node-id 23480:10812
 */

import React from 'react';
import { Label, Input } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23480:10812';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-label--default';

export default {
  title: 'UI5 Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A form label with optional required indicator and colon. Associate with inputs using the `for` prop. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    required: { control: 'boolean' },
    showColon: { control: 'boolean' },
  },
  args: {
    children: 'Field label',
    required: false,
    showColon: false,
  },
};

export const Default = {
  render: (args) => <Label {...args} />,
};

export const WithInput = {
  name: 'With Input Field',
  args: { children: 'Email Address', required: true, showColon: true },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
      <Label {...args} for="email-input" />
      <Input id="email-input" placeholder="name@company.com" type="Email" style={{ width: 280 }} />
    </div>
  ),
};
