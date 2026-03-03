/**
 * UI5 Components/Breadcrumbs
 * Figma: Breadcrumb — node-id 153792:116
 */

import React from 'react';
import { Breadcrumbs, BreadcrumbsItem } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=153792:116';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/navigation-breadcrumbs--default';

export default {
  title: 'UI5 Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Provides navigation breadcrumb trail showing the current page location within the app hierarchy. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['Standard', 'NoCurrentPage'],
    },
    separatorStyle: {
      control: { type: 'select' },
      options: ['Slash', 'BackSlash', 'DoubleGreaterThan', 'DoubleSlash', 'GreaterThan', 'None'],
    },
  },
  args: {
    design: 'Standard',
    separatorStyle: 'Slash',
  },
};

export const Default = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem href="/products">Products</BreadcrumbsItem>
      <BreadcrumbsItem href="/products/design">Design System</BreadcrumbsItem>
      <BreadcrumbsItem>Components</BreadcrumbsItem>
    </Breadcrumbs>
  ),
};
