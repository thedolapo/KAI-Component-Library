/**
 * UI5 Components/Card
 * Figma: Card — node-id 208913:4166
 */

import React from 'react';
import { Card, CardHeader, Text, List, ListItemStandard } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=208913:4166';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-card--default';

export default {
  title: 'UI5 Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A container card component with an optional `CardHeader`. Use as a surface for grouping ' +
          'related content. Supports interactive, expandable, and header-only variants. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
};

export const Default = {
  render: () => (
    <Card
      header={
        <CardHeader
          titleText="Recent Activities"
          subtitleText="Last 7 days"
          additionalText="4 items"
        />
      }
      style={{ width: 320 }}
    >
      <List>
        <ListItemStandard description="2 hours ago">Design review completed</ListItemStandard>
        <ListItemStandard description="Yesterday">Sprint planning session</ListItemStandard>
        <ListItemStandard description="2 days ago">Component handoff</ListItemStandard>
        <ListItemStandard description="3 days ago">User testing session</ListItemStandard>
      </List>
    </Card>
  ),
};

export const Minimal = {
  render: () => (
    <Card style={{ width: 320, padding: '1rem' }}>
      <Text>A simple card with no header — just content in a surface container.</Text>
    </Card>
  ),
};
