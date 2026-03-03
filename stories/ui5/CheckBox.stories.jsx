/**
 * UI5 Components/Check Box
 * Figma: Check Box — node-id 154589:1148
 */

import React from 'react';
import { CheckBox } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=154589:1148';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-checkbox--default';

export default {
  title: 'UI5 Components/Check Box',
  component: CheckBox,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A checkbox input allowing single or multiple selections. Supports indeterminate state. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    text: { control: 'text' },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    valueState: {
      control: { type: 'select' },
      options: ['None', 'Error', 'Warning', 'Success', 'Information'],
    },
  },
  args: {
    text: 'Accept terms and conditions',
    checked: false,
    indeterminate: false,
    disabled: false,
    valueState: 'None',
  },
};

export const Default = {
  render: (args) => <CheckBox {...args} />,
};

export const Checked = {
  args: { checked: true, text: 'Selected option' },
  render: (args) => <CheckBox {...args} />,
};

export const Indeterminate = {
  args: { indeterminate: true, text: 'Select all (partial)' },
  render: (args) => <CheckBox {...args} />,
};

export const States = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <CheckBox text="Default" />
      <CheckBox text="Checked" checked />
      <CheckBox text="Indeterminate" indeterminate />
      <CheckBox text="Disabled" disabled />
      <CheckBox text="Error state" valueState="Error" />
    </div>
  ),
};
