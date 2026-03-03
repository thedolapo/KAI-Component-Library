import React, { useState, useEffect, useRef } from 'react';
import {
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  SideNavigationSubItem
} from '@ui5/webcomponents-react';
import calendarIcon from '@ui5/webcomponents-icons/dist/calendar.js';
import chainLinkIcon from '@ui5/webcomponents-icons/dist/chain-link.js';
import groupIcon from '@ui5/webcomponents-icons/dist/group.js';
import historyIcon from '@ui5/webcomponents-icons/dist/history.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import locateMeIcon from '@ui5/webcomponents-icons/dist/locate-me.js';

const meta = {
  title: 'UI5 Components/Side Navigation',
  component: SideNavigation,
  argTypes: {
    children: { control: { disable: true } },
    fixedItems: { control: { disable: true } },
    header: { control: { disable: true } },
  },
  args: {
    fixedItems: (
      <>
        <SideNavigationItem
          text="External Link"
          icon={chainLinkIcon}
          href="https://www.sap.com/index.html"
          target="_blank"
        />
        <SideNavigationItem text="History" icon={historyIcon} />
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=283218:5322',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/fiori-sidenavigation--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <SideNavigation {...args}>
        <SideNavigationItem text="Home" icon={homeIcon} />
        <SideNavigationItem text="People" expanded icon={groupIcon}>
          <SideNavigationSubItem text="From My Team" />
          <SideNavigationSubItem text="From Other Teams" />
        </SideNavigationItem>
        <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
        <SideNavigationItem text="Events" icon={calendarIcon}>
          <SideNavigationSubItem text="Local" />
          <SideNavigationSubItem text="Others" />
        </SideNavigationItem>
      </SideNavigation>
    );
  },
};

export const Grouped = {
  render: (args) => {
    return (
      <SideNavigation {...args}>
        <SideNavigationGroup text="Group 1" expanded>
          <SideNavigationItem text="Home" icon={homeIcon} />
          <SideNavigationItem text="People" expanded icon={groupIcon}>
            <SideNavigationSubItem text="From My Team" />
            <SideNavigationSubItem text="From Other Teams" />
          </SideNavigationItem>
        </SideNavigationGroup>
        <SideNavigationGroup text="Group 2">
          <SideNavigationItem text="Locations" icon={locateMeIcon} selected />
          <SideNavigationItem text="Events" icon={calendarIcon}>
            <SideNavigationSubItem text="Local" />
            <SideNavigationSubItem text="Others" />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigation>
    );
  },
};
