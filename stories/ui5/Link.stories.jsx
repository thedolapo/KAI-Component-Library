/**
 * UI5 Components/Link
 * Figma: Link — node-id 462:823
 */

import React from 'react';
import { Link } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=462:823';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-link--default';

export default {
  title: 'UI5 Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'An interactive text link. Supports internal navigation, external URLs, and subtle/inverted designs. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    design: {
      control: { type: 'select' },
      options: ['Default', 'Subtle', 'Emphasized'],
    },
    target: {
      control: { type: 'select' },
      options: ['_self', '_blank', '_parent', '_top'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    children: 'Open link',
    href: '#',
    design: 'Default',
    target: '_self',
    disabled: false,
  },
};

export const Default = {
  render: (args) => <Link {...args} />,
};

export const AllDesigns = {
  name: 'All Designs',
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', fontFamily: '\'72\', Arial, sans-serif' }}>
      <Link href="#" design="Default">Default link</Link>
      <Link href="#" design="Subtle">Subtle link</Link>
      <Link href="#" design="Emphasized">Emphasized link</Link>
    </div>
  ),
};
