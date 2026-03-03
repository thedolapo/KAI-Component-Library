import React, { useState, useEffect, useRef } from 'react';
import {
  ColorPalette,
  ColorPaletteItem
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js';

const meta = {
  title: 'UI5 Components/Color Palette',
  component: ColorPalette,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23527:10491',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-colorpalette--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <ColorPalette {...args}>
        <ColorPaletteItem value="darkblue" />
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="#444444" />
        <ColorPaletteItem value="rgb(0,200,0)" />
        <ColorPaletteItem value="green" />
        <ColorPaletteItem value="darkred" />
        <ColorPaletteItem value="yellow" />
        <ColorPaletteItem value="blue" />
        <ColorPaletteItem value="cyan" />
        <ColorPaletteItem value="orange" />
        <ColorPaletteItem value="#5480e7" />
        <ColorPaletteItem value="#ff6699" />
      </ColorPalette>
    );
  },
};
