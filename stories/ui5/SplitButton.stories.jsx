import React, { useState, useEffect, useRef } from 'react';
import {
  SplitButton
} from '@ui5/webcomponents-react';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Split Button',
  component: SplitButton,
  argTypes: {
    children: { control: { type: 'text' } },
  },
  args: {
    design: ButtonDesign.Default,
    icon: employeeIcon,
    children: 'SplitButton',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=188746:10977',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-splitbutton--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
