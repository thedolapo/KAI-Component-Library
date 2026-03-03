import React, { useState, useEffect, useRef } from 'react';
import {
  SegmentedButton,
  SegmentedButtonItem
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/Segmented Button',
  component: SegmentedButton,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    accessibleName: 'Segmented Button Example',
    children: (
      <>
        <SegmentedButtonItem>Button 1</SegmentedButtonItem>
        <SegmentedButtonItem selected>Button 2</SegmentedButtonItem>
        <SegmentedButtonItem>Button 3</SegmentedButtonItem>
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=91702:11987',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-segmentedbutton--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
