import React, { useState, useEffect, useRef } from 'react';
import {
  TextArea
} from '@ui5/webcomponents-react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const meta = {
  title: 'UI5 Components/Text Area',
  component: TextArea,
  argTypes: {
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=245075:4278',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-textarea--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
