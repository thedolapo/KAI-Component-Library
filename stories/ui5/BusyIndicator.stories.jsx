/**
 * UI5 Components/Busy Indicator
 * Figma: Busy Indicator — node-id 23575:10459
 */

import React from 'react';
import { BusyIndicator } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23575:10459';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-busyindicator--default';

export default {
  title: 'UI5 Components/Busy Indicator',
  component: BusyIndicator,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Indicates a background process is running. Can wrap content to overlay it during loading. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L'],
    },
    active: { control: 'boolean' },
    text: { control: 'text' },
  },
  args: {
    size: 'M',
    active: true,
    text: 'Loading…',
  },
};

export const Default = {
  render: (args) => <BusyIndicator {...args} />,
};

export const WrappingContent = {
  name: 'Wrapping Content',
  args: { active: true, text: 'Saving changes…' },
  render: (args) => (
    <BusyIndicator {...args}>
      <div
        style={{
          padding: '2rem',
          background: 'var(--kai-container-sap-group-content-background, #fff)',
          border: '1px solid var(--kai-container-sap-group-content-border-color, #d9d9d9)',
          borderRadius: '0.25rem',
          width: 320,
        }}
      >
        Content is being saved to the server.
      </div>
    </BusyIndicator>
  ),
};
