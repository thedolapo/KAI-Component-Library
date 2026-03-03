import React, { useState, useEffect, useRef } from 'react';
import {
  Label
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Label Text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23480:10812',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-label--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
