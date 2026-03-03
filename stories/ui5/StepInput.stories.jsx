import React, { useState, useEffect, useRef } from 'react';
import {
  StepInput
} from '@ui5/webcomponents-react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const meta = {
  title: 'UI5 Components/Step Input',
  component: StepInput,
  argTypes: {
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=148569:1733',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-stepinput--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
