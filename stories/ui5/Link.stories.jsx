import React, { useState, useEffect, useRef } from 'react';
import {
  Link
} from '@ui5/webcomponents-react';
import LinkDesign from '@ui5/webcomponents/dist/types/LinkDesign.js';
import WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';

const meta = {
  title: 'UI5 Components/Link',
  component: Link,
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    design: LinkDesign.Default,
    wrappingType: WrappingType.None,
    children: 'Link Text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=462:823',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-link--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
