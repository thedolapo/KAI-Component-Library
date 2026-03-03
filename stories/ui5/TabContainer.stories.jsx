/**
 * UI5 Components/Icon Tab Bar (TabContainer)
 * Figma: Icon Tab Bar — node-id 26979:13148
 */

import React from 'react';
import { TabContainer, Tab, TabSeparator } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=26979:13148';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-tabcontainer--default';

export default {
  title: 'UI5 Components/Icon Tab Bar',
  component: TabContainer,
  parameters: {
    layout: 'padded',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A tab bar for switching between sections of content. Supports icons, counts, and overflow. ' +
          'Maps to the Klario "Icon Tab Bar" component. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
};

export const Default = {
  render: () => (
    <TabContainer style={{ width: '100%' }}>
      <Tab
        text="Overview"
        icon="home"
      >
        <div style={{ padding: '1.5rem', fontFamily: '\'72\', Arial, sans-serif' }}>
          Overview content
        </div>
      </Tab>
      <Tab
        text="Components"
        icon="puzzle-piece"
        additionalText="42"
      >
        <div style={{ padding: '1.5rem', fontFamily: '\'72\', Arial, sans-serif' }}>
          Components content
        </div>
      </Tab>
      <TabSeparator />
      <Tab
        text="Settings"
        icon="settings"
      >
        <div style={{ padding: '1.5rem', fontFamily: '\'72\', Arial, sans-serif' }}>
          Settings content
        </div>
      </Tab>
    </TabContainer>
  ),
};
