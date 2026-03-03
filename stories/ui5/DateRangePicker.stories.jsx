/**
 * UI5 Components/Date Range Picker
 * Figma: Date (Range) Picker — node-id 160531:1372
 */

import React from 'react';
import { DateRangePicker } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=160531:1372';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-daterangepicker--default';

export default {
  title: 'UI5 Components/Date Range Picker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'An input field that opens a calendar for selecting a start and end date range. ' +
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
    placeholder: 'Select date range',
    valueState: 'None',
    disabled: false,
    readonly: false,
  },
};

export const Default = {
  render: (args) => <DateRangePicker {...args} style={{ width: 300 }} />,
};

export const WithValue = {
  name: 'With Pre-filled Value',
  args: { value: 'Mar 1, 2026 - Mar 31, 2026' },
  render: (args) => <DateRangePicker {...args} style={{ width: 300 }} />,
};
