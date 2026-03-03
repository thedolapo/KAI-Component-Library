/**
 * UI5 Components/Date Time Picker
 * Figma: Date Time Picker — node-id 194619:6583
 */

import React from 'react';
import { DateTimePicker } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=194619:6583';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-datetimepicker--default';

export default {
  title: 'UI5 Components/Date Time Picker',
  component: DateTimePicker,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'An input field that opens a combined calendar + clock picker for selecting date and time. ' +
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
    placeholder: 'Select date and time',
    valueState: 'None',
    disabled: false,
  },
};

export const Default = {
  render: (args) => <DateTimePicker {...args} style={{ width: 300 }} />,
};
