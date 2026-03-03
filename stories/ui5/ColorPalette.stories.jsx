/**
 * UI5 Components/Color Palette
 * Figma: Color Palette — node-id 23527:10491
 */

import React from 'react';
import { ColorPalette, ColorPaletteItem } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23527:10491';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-colorpalette--default';

// KAI brand palette for the picker
const KAI_COLORS = [
  'hsl(256, 87%, 56%)',
  'hsl(256, 88%, 52%)',
  'hsl(13, 100%, 55%)',
  'hsl(137, 50%, 38%)',
  'hsl(0, 91%, 58%)',
  'hsl(26, 100%, 45%)',
  'hsl(187, 94%, 25%)',
  'hsl(178, 95%, 32%)',
  'hsl(296, 100%, 43%)',
  'hsl(37, 100%, 39%)',
  'hsl(210, 21%, 45%)',
  'hsl(210, 37%, 12%)',
];

export default {
  title: 'UI5 Components/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A compact colour picker showing predefined swatches. Pre-populated with KAI brand palette colours. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
};

export const KAIPalette = {
  name: 'KAI Palette',
  render: () => (
    <ColorPalette>
      {KAI_COLORS.map((color) => (
        <ColorPaletteItem key={color} value={color} />
      ))}
    </ColorPalette>
  ),
};
