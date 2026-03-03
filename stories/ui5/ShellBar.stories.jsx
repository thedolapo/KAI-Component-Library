import React, { useState, useEffect, useRef } from 'react';
import {
  Avatar,
  Button,
  FlexBox,
  Label,
  ShellBar,
  ShellBarBranding,
  ShellBarItem,
  ShellBarSearch,
  ShellBarSpacer,
  Switch,
  Tag,
  Text
} from '@ui5/webcomponents-react';
const image = 'https://ui5.github.io/webcomponents/images/avatars/woman_avatar_1.png';
import menu2Icon from '@ui5/webcomponents-icons/dist/menu2.js';
import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import sysHelpIcon from '@ui5/webcomponents-icons/dist/sys-help.js';

const meta = {
  title: 'UI5 Components/Shell Bar',
  component: ShellBar,
  argTypes: {
    children: { control: { disable: true } },
    logo: { control: { disable: true } },
    menuItems: { control: { disable: true } },
    profile: { control: { disable: true } },
    searchField: { control: { disable: true } },
    startButton: { control: { disable: true } },
  },
  args: {
    primaryTitle: 'Shell Bar',
    notificationsCount: '10',
    showNotifications: true,
    logo: <img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />,
    profile: (
      <Avatar>
        <img src={image} alt="person-placeholder" />
      </Avatar>
    ),
    startButton: <Button icon={menu2Icon} tooltip="Menu" accessibleName="Menu" />,
    searchField: <ShellBarSearch showClearIcon placeholder="Search Apps, Products" />,
    children: <ShellBarItem text={'Help'} icon={sysHelpIcon} />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=285220:12143',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/fiori-shellbar--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const AllFeatures = {
  args: {
    showProductSwitch: true,
    startButton: (
      <>
        <Button icon={menu2Icon} tooltip="Menu" accessibleName="Menu" />
        <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />
      </>
    ),
    content: (
      <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
        <ShellBarSpacer />
        <FlexBox gap="0 5px" alignItems="Center">
          <Switch />
          <Label>Try Beta Version</Label>
        </FlexBox>
      </>
    ),
  },
};

export const EmbeddedBackNavigation = {
  args: {
    startButton: <Button icon={navBackIcon} tooltip="Back" accessibleName="Back" />,
  },
};

export const TrialExample = {
  args: {
    content: (
      <>
        <Tag design="Set2" colorScheme="7">
          Trial
        </Tag>
        <Text>30 days remaining</Text>
      </>
    ),
  },
};

export const ProductiveInstances = {
  args: {
    content: (
      <Tag design="Set2" colorScheme="10">
        Region EMEA
      </Tag>
    ),
  },

  render(args) {
    return (
      <>
        <ShellBar {...args} />
        <ShellBar
          {...args}
          content={
            <Tag design="Set2" colorScheme="10">
              Region APJ
            </Tag>
          }
        />
      </>
    );
  },
};

export const NonProductiveInstances = {
  args: {
    content: (
      <>
        <Tag design="Set2" colorScheme="8">
          Q System
        </Tag>
        <Text>Region EMEA</Text>
      </>
    ),
  },

  render(args) {
    return (
      <>
        <ShellBar {...args} />
        <ShellBar
          {...args}
          content={
            <>
              <Tag design="Set2" colorScheme="8">
                Q System
              </Tag>
              <Text>Region APJ</Text>
            </>
          }
        />
      </>
    );
  },
};

export const ShellBarBrandingStory = {
  name: 'with ShellBarBranding',
  args: {
    branding: (
      <ShellBarBranding
        logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />}
        href="https://ui5.github.io/webcomponents-react/v2/?path=/docs/layouts-floorplans-shellbar--docs"
        target="_blank"
        onClick={(e) => {
          console.log('ShellBarBranding clicked', e);
        }}
      >
        ShellBar Branding
      </ShellBarBranding>
    ),
  },
  render(args) {
    return <ShellBar {...args} />;
  },
};
