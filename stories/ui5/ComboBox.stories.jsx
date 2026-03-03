/**
 * UI5 Components/Drop-Down (ComboBox)
 * Figma: Drop-Down — node-id 182813:5889
 * Also covers: Drop-Down Item (ComboBoxItem)
 */

import React from 'react';
import { ComboBox, ComboBoxItem } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=182813:5889';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-combobox--default';

const countries = ['Germany', 'France', 'United Kingdom', 'Spain', 'Italy', 'Netherlands', 'Sweden', 'Norway'];

export default {
  title: 'UI5 Components/Drop-Down (ComboBox)',
  component: ComboBox,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'An editable dropdown that combines a text input with a suggestions list. ' +
          'Maps to the Klario "Drop-Down" component. Child items are `ComboBoxItem` (Klario: Drop-Down Item). ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    valueState: {
      control: { type: 'select' },
      options: ['None', 'Error', 'Warning', 'Success', 'Information'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
  args: {
    placeholder: 'Select a country',
    valueState: 'None',
    disabled: false,
  },
};

export const Default = {
  render: (args) => (
    <ComboBox {...args} style={{ width: 280 }}>
      {countries.map((c) => (
        <ComboBoxItem key={c} text={c} />
      ))}
    </ComboBox>
  ),
};

export const WithInitialValue = {
  name: 'With Initial Value',
  args: { value: 'Germany' },
  render: (args) => (
    <ComboBox {...args} style={{ width: 280 }}>
      {countries.map((c) => (
        <ComboBoxItem key={c} text={c} />
      ))}
    </ComboBox>
  ),
};
