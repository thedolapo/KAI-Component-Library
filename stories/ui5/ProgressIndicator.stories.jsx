import React, { useState, useEffect, useRef } from 'react';
import {
  ProgressIndicator
} from '@ui5/webcomponents-react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const meta = {
  title: 'UI5 Components/Progress Indicator',
  component: ProgressIndicator,
  argTypes: {},
  args: {
    valueState: ValueState.None,
    value: 50,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=578:5150',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-progressindicator--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
