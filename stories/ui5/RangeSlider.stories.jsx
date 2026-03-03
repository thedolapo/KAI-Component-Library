import React, { useState, useEffect, useRef } from 'react';
import {
  RangeSlider
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/Range Slider',
  component: RangeSlider,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=104968:17343',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-rangeslider--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
