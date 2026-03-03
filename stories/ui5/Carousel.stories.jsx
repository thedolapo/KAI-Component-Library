/**
 * UI5 Components/Carousel
 * Figma: Carousel — node-id 24267:10384
 */

import React from 'react';
import { Carousel } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=24267:10384';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-carousel--default';

export default {
  title: 'UI5 Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A slideshow component for cycling through content items. Supports page indicators and navigation arrows. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    itemsPerPage: { control: { type: 'number', min: 1, max: 5 } },
    cyclic: { control: 'boolean' },
  },
  args: { itemsPerPage: 1, cyclic: false },
};

const slides = [
  { title: 'KAI Design System', text: 'Consistent UI tokens across all 5 themes.' },
  { title: 'UI5 Components', text: '60+ components themed with KAI colour tokens.' },
  { title: 'Chromatic Publishing', text: 'Visual testing and stakeholder review.' },
];

const slideStyle = {
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--kai-container-sap-group-content-background, #fff)',
  border: '1px solid var(--kai-container-sap-group-content-border-color, #d9d9d9)',
  borderRadius: '0.25rem',
  padding: '1.5rem',
  textAlign: 'center',
  fontFamily: '\'72\', Arial, sans-serif',
};

export const Default = {
  render: (args) => (
    <Carousel {...args} style={{ width: 480 }}>
      {slides.map((s) => (
        <div key={s.title} style={slideStyle}>
          <strong style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{s.title}</strong>
          <span style={{ color: 'var(--kai-text-sap-content-label-color, #556b82)' }}>{s.text}</span>
        </div>
      ))}
    </Carousel>
  ),
};
