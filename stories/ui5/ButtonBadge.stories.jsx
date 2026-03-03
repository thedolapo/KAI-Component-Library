/**
 * UI5 Components/Button Badge
 * Figma: Button Badge — node-id 101171:12621
 */

import React from 'react';
import { Button } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=101171:12621';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-button--default';

export default {
  title: 'UI5 Components/Button Badge',
  component: Button,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A Button with an attached badge count — used to indicate notifications or counts. ' +
          'In UI5 React, this is achieved with the `badgeValue` prop on the `Button` component. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    badgeValue: { control: 'text' },
    design: {
      control: { type: 'select' },
      options: ['Default', 'Emphasized', 'Transparent'],
    },
    icon: { control: 'text' },
  },
  args: {
    children: 'Notifications',
    badgeValue: '5',
    design: 'Default',
    icon: 'bell',
  },
};

export const Default = {
  render: (args) => <Button {...args} />,
};

export const EmphasizedWithBadge = {
  name: 'Emphasized with Badge',
  args: { design: 'Emphasized', children: 'Messages', badgeValue: '12', icon: 'message-popup' },
  render: (args) => <Button {...args} />,
};

export const IconOnly = {
  name: 'Icon Only with Badge',
  args: { children: '', icon: 'bell', badgeValue: '3' },
  render: (args) => <Button {...args} />,
};
