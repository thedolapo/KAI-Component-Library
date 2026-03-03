import React, { useState, useEffect, useRef } from 'react';
import {
  Avatar,
  AvatarBadge
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/employee.js';
import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import editIcon from '@ui5/webcomponents-icons/dist/edit.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import sysEnter2Icon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';

const meta = {
  title: 'UI5 Components/Avatar',
  component: Avatar,
  argTypes: {
    children: { control: { disable: true } },
    badge: { control: { disable: true } },
  },
  args: {
    icon: 'employee',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=573:3809',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-avatar--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithImage = {
  args: {
    fallbackIcon: 'employee',
    icon: undefined,
  },
  render: (args) => (
    <Avatar {...args}>
      <img alt="Person" src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png" />
    </Avatar>
  ),
};

export const WithBadge = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
      <Avatar {...args} initials="JD" colorScheme="Accent5" badge={<AvatarBadge icon={editIcon} state="None" />} />
      <Avatar
        {...args}
        icon="employee"
        colorScheme="Accent10"
        badge={<AvatarBadge icon={alertIcon} state="Critical" />}
      />
      <Avatar {...args} badge={<AvatarBadge icon={sysEnter2Icon} state="Positive" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/man_avatar_1.png" alt="Person" />
      </Avatar>
      <Avatar {...args} shape="Square" badge={<AvatarBadge icon={errorIcon} state="Negative" />}>
        <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png" alt="Person" />
      </Avatar>
    </div>
  ),
};

export const CustomStyling = {
  args: {
    style: { width: '250px', height: '250px', border: '1px solid var(--sapField_BorderColor)' },
  },
  render: (args) => (
    <Avatar {...args}>
      <img
        src="https://ui5.github.io/webcomponents/images/avatars/Lamp_avatar_01.jpg"
        alt="Lamp"
        style={{ objectFit: 'contain' }}
      />
    </Avatar>
  ),
};
