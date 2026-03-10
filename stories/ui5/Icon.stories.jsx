import React, { useState, useEffect, useRef } from 'react';
import {
  Icon
} from '@ui5/webcomponents-react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Icon',
  component: Icon,
  argTypes: {},
  args: {
    name: employeeIcon,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=25058:266',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-icon--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
