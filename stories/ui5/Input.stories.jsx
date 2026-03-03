/**
 * UI5 Components/Input
 * Figma: Input — node-id 148569:1061
 */

import React from 'react';
import { Input, Label, Icon } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=148569:1061';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-input--default';

export default {
  title: 'UI5 Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A text input field with optional icon, suggestions, and value states. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['Text', 'Email', 'Number', 'Password', 'Search', 'Tel', 'URL'],
    },
    valueState: {
      control: { type: 'select' },
      options: ['None', 'Error', 'Warning', 'Success', 'Information'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    placeholder: 'Enter text',
    type: 'Text',
    valueState: 'None',
    disabled: false,
    readonly: false,
    required: false,
  },
};

export const Default = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', alignItems: 'flex-start' }}>
      <Label for="default-input">Label</Label>
      <Input {...args} id="default-input" style={{ width: 280 }} />
    </div>
  ),
};

export const WithIcon = {
  name: 'With Icon',
  args: { placeholder: 'Search…' },
  render: (args) => (
    <Input {...args} style={{ width: 280 }}>
      <Icon name="search" slot="icon" />
    </Input>
  ),
};

export const States = {
  name: 'All Value States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {['None', 'Error', 'Warning', 'Success', 'Information'].map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <Label>{s}</Label>
          <Input placeholder={`${s} state`} valueState={s} style={{ width: 280 }} />
        </div>
      ))}
    </div>
  ),
};
