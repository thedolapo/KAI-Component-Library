import React, { useState, useEffect, useRef } from 'react';
import {
  Avatar,
  AvatarGroup
} from '@ui5/webcomponents-react';
import AvatarGroupType from '@ui5/webcomponents/dist/types/AvatarGroupType.js';

const meta = {
  title: 'UI5 Components/Avatar Group',
  component: AvatarGroup,
  argTypes: {
    children: { control: { disable: true } },
    overflowButton: { control: { disable: true } },
  },
  args: {
    type: AvatarGroupType.Group,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=110157:18344',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-avatargroup--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    return (
      <AvatarGroup {...args}>
        <Avatar icon="employee" />
        <Avatar initials="JD" />
        <Avatar>
          <img src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_5.png" alt="Avatar1" />
        </Avatar>
        <Avatar>
          <img src="https://ui5.github.io/webcomponents/images/avatars/man_avatar_3.png" alt="Avatar2" />
        </Avatar>
      </AvatarGroup>
    );
  },
};
