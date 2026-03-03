import React, { useState, useEffect, useRef } from 'react';
import {
  Icon,
  MessageStrip
} from '@ui5/webcomponents-react';
import MessageStripDesign from '@ui5/webcomponents/dist/types/MessageStripDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Message Strip',
  component: MessageStrip,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } },
  },
  args: {
    design: MessageStripDesign.Information,
    children: 'MessageStrip Text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=278668:35',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-messagestrip--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithIcon = {
  args: {
    icon: <Icon name={employeeIcon} />,
  },
};
