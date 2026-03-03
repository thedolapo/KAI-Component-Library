/**
 * UI5 Components/Avatar
 * Figma: Avatar — node-id 573:3809
 * https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=573:3809
 */

import React from 'react';
import { Avatar } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=573:3809';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-avatar--default';

export default {
  title: 'UI5 Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Displays a user avatar with an image, initials, or icon. ' +
          'Supports multiple sizes and shapes. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['XS', 'S', 'M', 'L', 'XL'],
    },
    shape: {
      control: { type: 'select' },
      options: ['Circle', 'Square'],
    },
    initials: { control: 'text' },
    icon: { control: 'text' },
  },
  args: {
    size: 'M',
    shape: 'Circle',
    initials: 'KA',
  },
};

export const WithInitials = {
  name: 'With Initials',
  render: (args) => <Avatar {...args} />,
};

export const WithIcon = {
  name: 'With Icon',
  args: { icon: 'person-placeholder', initials: '' },
  render: (args) => <Avatar {...args} />,
};

export const Sizes = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
        <Avatar key={s} size={s} initials="KA" />
      ))}
    </div>
  ),
};
