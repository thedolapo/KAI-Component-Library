import React, { useState, useEffect, useRef } from 'react';
import {
  Breadcrumbs,
  BreadcrumbsItem
} from '@ui5/webcomponents-react';
import BreadcrumbsDesign from '@ui5/webcomponents/dist/types/BreadcrumbsDesign.js';
import BreadcrumbsSeparatorStyle from '@ui5/webcomponents/dist/types/BreadcrumbsSeparator.js';

const meta = {
  title: 'UI5 Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    design: BreadcrumbsDesign.Standard,
    separators: BreadcrumbsSeparatorStyle.Slash,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=153792:116',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/navigation-breadcrumbs--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <Breadcrumbs {...args}>
        <BreadcrumbsItem>Products</BreadcrumbsItem>
        <BreadcrumbsItem>Hardware</BreadcrumbsItem>
        <BreadcrumbsItem>Notebooks</BreadcrumbsItem>
      </Breadcrumbs>
    );
  },
};
