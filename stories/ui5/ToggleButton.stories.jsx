import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ToggleButton
} from '@ui5/webcomponents-react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';

const meta = {
  title: 'UI5 Components/Toggle Button', component: ToggleButton,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    design: ButtonDesign.Default,
    icon: 'employee',
    children: 'ToggleButton Text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-togglebutton--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
