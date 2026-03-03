/**
 * UI5 Components/Color Picker
 * Figma: Color Picker — node-id 23541:11036
 */

import React from 'react';
import { ColorPicker } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23541:11036';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-colorpicker--default';

export default {
  title: 'UI5 Components/Color Picker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A full colour picker with hue/saturation/lightness controls, hex input, and opacity slider. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    value: { control: 'color' },
  },
  args: {
    value: 'hsl(256, 87%, 56%)',
  },
};

export const Default = {
  render: (args) => <ColorPicker {...args} />,
};
