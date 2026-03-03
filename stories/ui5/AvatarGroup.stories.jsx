/**
 * UI5 Components/Avatar Group
 * Figma: Avatar Group — node-id 110157:18344
 */

import React from 'react';
import { AvatarGroup, Avatar } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=110157:18344';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-avatargroup--default';

export default {
  title: 'UI5 Components/Avatar Group',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Displays a group of avatars with overflow count when they exceed a defined limit. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['Group', 'Individual'],
    },
  },
  args: { type: 'Group' },
};

const avatars = [
  { initials: 'KA', colorScheme: 'Accent1' },
  { initials: 'JD', colorScheme: 'Accent2' },
  { initials: 'MB', colorScheme: 'Accent3' },
  { initials: 'SR', colorScheme: 'Accent4' },
  { initials: 'TW', colorScheme: 'Accent5' },
];

export const Default = {
  render: (args) => (
    <AvatarGroup {...args}>
      {avatars.map((a) => (
        <Avatar key={a.initials} initials={a.initials} colorScheme={a.colorScheme} />
      ))}
    </AvatarGroup>
  ),
};

export const Individual = {
  args: { type: 'Individual' },
  render: (args) => (
    <AvatarGroup {...args}>
      {avatars.map((a) => (
        <Avatar key={a.initials} initials={a.initials} colorScheme={a.colorScheme} />
      ))}
    </AvatarGroup>
  ),
};
