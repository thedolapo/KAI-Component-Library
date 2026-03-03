import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  ButtonBadge
} from '@ui5/webcomponents-react';
import ButtonBadgeDesign from '@ui5/webcomponents/dist/types/ButtonBadgeDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    badge: { control: { disable: true } },
  },
  args: {
    design: ButtonDesign.Default,
    icon: employeeIcon,
    children: 'Button Text',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=91702:11734',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-button--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithBadge = {
  render(args) {
    return (
      <>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.AttentionDot} />}>
          ButtonBadgeDesign.AttentionDot
        </Button>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.InlineText} text="badge" />}>
          ButtonBadgeDesign.InlineText
        </Button>
        <Button {...args} badge={<ButtonBadge design={ButtonBadgeDesign.OverlayText} text="badge" />}>
          ButtonBadgeDesign.OverlayText
        </Button>
      </>
    );
  },
};
