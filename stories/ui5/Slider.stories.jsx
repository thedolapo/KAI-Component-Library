import React, { useState, useEffect, useRef } from 'react';
import {
  Slider
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/Slider',
  component: Slider,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=104968:23760',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-slider--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
