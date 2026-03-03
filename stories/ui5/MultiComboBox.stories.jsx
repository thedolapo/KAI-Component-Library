/**
 * UI5 Components/Multi Combobox
 * Figma: Multi Combobox — node-id 212722:56342
 */

import React from 'react';
import { MultiComboBox, MultiComboBoxItem } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=212722:56342';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-multicombobox--default';

const skills = [
  'Design Systems', 'Figma', 'React', 'TypeScript', 'CSS', 'Accessibility',
  'User Research', 'Prototyping', 'Storybook', 'Animation',
];

export default {
  title: 'UI5 Components/Multi Combobox',
  component: MultiComboBox,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A multi-select combobox that allows selecting multiple items and shows them as tokens. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    valueState: {
      control: { type: 'select' },
      options: ['None', 'Error', 'Warning', 'Success', 'Information'],
    },
  },
  args: {
    placeholder: 'Select skills',
    disabled: false,
    valueState: 'None',
  },
};

export const Default = {
  render: (args) => (
    <MultiComboBox {...args} style={{ width: 360 }}>
      {skills.map((s) => (
        <MultiComboBoxItem key={s} text={s} />
      ))}
    </MultiComboBox>
  ),
};

export const WithPreSelected = {
  name: 'With Pre-selected Items',
  render: (args) => (
    <MultiComboBox {...args} style={{ width: 360 }}>
      {skills.map((s) => (
        <MultiComboBoxItem
          key={s}
          text={s}
          selected={['Design Systems', 'Figma', 'React'].includes(s)}
        />
      ))}
    </MultiComboBox>
  ),
};
