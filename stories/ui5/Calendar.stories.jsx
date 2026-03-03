/**
 * UI5 Components/Calendar
 * Figma: Calendar — node-id 12845:11140
 */

import React from 'react';
import { Calendar } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=12845:11140';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-calendar--default';

export default {
  title: 'UI5 Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A standalone date picker calendar component. Supports single, range, and multiple selection modes. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    selectionMode: {
      control: { type: 'select' },
      options: ['Single', 'Multiple', 'Range'],
    },
    hideWeekNumbers: { control: 'boolean' },
  },
  args: {
    selectionMode: 'Single',
    hideWeekNumbers: false,
  },
};

export const Default = {
  render: (args) => <Calendar {...args} />,
};

export const RangeSelection = {
  name: 'Range Selection',
  args: { selectionMode: 'Range' },
  render: (args) => <Calendar {...args} />,
};
