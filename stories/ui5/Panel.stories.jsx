/**
 * UI5 Components/Panel
 * Figma: Panel — node-id 24070:10554
 */

import React from 'react';
import { Panel, Text } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=24070:10554';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-panel--default';

export default {
  title: 'UI5 Components/Panel',
  component: Panel,
  parameters: {
    layout: 'padded',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A collapsible container with a header. Groups related content in an expandable section. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    headerText: { control: 'text' },
    collapsed: { control: 'boolean' },
    fixed: { control: 'boolean' },
  },
  args: {
    headerText: 'Filter Options',
    collapsed: false,
    fixed: false,
  },
};

export const Default = {
  render: (args) => (
    <Panel {...args} style={{ width: 480 }}>
      <div style={{ padding: '1rem', fontFamily: '\'72\', Arial, sans-serif' }}>
        <Text>Panel content goes here. This panel is expandable/collapsible by clicking the header.</Text>
      </div>
    </Panel>
  ),
};

export const Collapsed = {
  args: { collapsed: true, headerText: 'Advanced Filters (collapsed)' },
  render: (args) => (
    <Panel {...args} style={{ width: 480 }}>
      <div style={{ padding: '1rem', fontFamily: '\'72\', Arial, sans-serif' }}>
        <Text>This content is hidden when the panel is collapsed.</Text>
      </div>
    </Panel>
  ),
};
