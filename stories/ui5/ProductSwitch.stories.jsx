import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ProductSwitch,
  ProductSwitchItem
} from '@ui5/webcomponents-react';
import businessObjectsExperienceIcon from '@ui5/webcomponents-icons/dist/business-objects-experience.js';
import contactsIcon from '@ui5/webcomponents-icons/dist/contacts.js';
import flightIcon from '@ui5/webcomponents-icons/dist/flight.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import wrenchIcon from '@ui5/webcomponents-icons/dist/wrench.js';

const meta = {
  title: 'UI5 Components/Product Switch', component: ProductSwitch,
  argTypes: {
    children: { control: { disable: true } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/fiori-productswitch--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <ProductSwitch {...args}>
        <ProductSwitchItem
          titleText={'ProductSwitchItem'}
          icon={wrenchIcon}
          target="_blank"
          targetSrc="https://ui5.github.io/webcomponents-react/"
        />
        <ProductSwitchItem titleText="Home" subtitleText="Central Home" icon={homeIcon} />
        <ProductSwitchItem
          titleText="Analytical Cloud"
          subtitleText="Analytical Cloud"
          icon={businessObjectsExperienceIcon}
        />
        <ProductSwitchItem titleText="Catalog" subtitleText="Ariba" icon={contactsIcon} />
        <ProductSwitchItem titleText="Travel & Expense" subtitleText="Concur" icon={flightIcon} />
      </ProductSwitch>
    );
  },
};
