/**
 * UI5 Components/List + List Item (ListItemStandard)
 * Figma: List — node-id 155542:3876 | List Item — node-id 155542:3564
 */

import React from 'react';
import { List, ListItemStandard, ListItemCustom, Icon } from '@ui5/webcomponents-react';

const FIGMA_LIST =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=155542:3876';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-list--default';

export default {
  title: 'UI5 Components/List',
  component: List,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_LIST },
    docs: {
      description: {
        component:
          'A list component for displaying items in a vertical arrangement. ' +
          'Supports selection modes, item descriptions, icons, and interactive items. ' +
          'Child items are `ListItemStandard` (Klario: List Item). ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    selectionMode: {
      control: { type: 'select' },
      options: ['None', 'Single', 'SingleStart', 'MultiSelect', 'Delete'],
    },
    headerText: { control: 'text' },
  },
  args: {
    selectionMode: 'None',
    headerText: 'Team Members',
  },
};

const members = [
  { name: 'Alice Johnson', role: 'Lead Designer', icon: 'person-placeholder' },
  { name: 'Bob Kim', role: 'Frontend Engineer', icon: 'person-placeholder' },
  { name: 'Carol Smith', role: 'Product Manager', icon: 'person-placeholder' },
  { name: 'David Okafor', role: 'UX Researcher', icon: 'person-placeholder' },
];

export const Default = {
  render: (args) => (
    <List {...args} style={{ width: 380 }}>
      {members.map((m) => (
        <ListItemStandard
          key={m.name}
          description={m.role}
          icon={m.icon}
        >
          {m.name}
        </ListItemStandard>
      ))}
    </List>
  ),
};

export const WithSelection = {
  name: 'Multi-Select',
  args: { selectionMode: 'MultiSelect', headerText: 'Select team members' },
  render: (args) => (
    <List {...args} style={{ width: 380 }}>
      {members.map((m) => (
        <ListItemStandard key={m.name} description={m.role}>
          {m.name}
        </ListItemStandard>
      ))}
    </List>
  ),
};
