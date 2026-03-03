/**
 * UI5 Components/Message Strip
 * Figma: Message Strip — node-id 278668:35
 */

import React from 'react';
import { MessageStrip } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=278668:35';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-messagestrip--default';

export default {
  title: 'UI5 Components/Message Strip',
  component: MessageStrip,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'An inline notification strip for contextual messages. Supports Information, Positive, Negative, and Warning types. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    design: {
      control: { type: 'select' },
      options: ['Information', 'Positive', 'Negative', 'Warning', 'ColorSet1', 'ColorSet2'],
    },
    children: { control: 'text' },
    hideCloseButton: { control: 'boolean' },
    hideIcon: { control: 'boolean' },
  },
  args: {
    design: 'Information',
    children: 'This is an informational message.',
    hideCloseButton: false,
    hideIcon: false,
  },
};

export const Default = {
  render: (args) => <MessageStrip {...args} style={{ width: 400 }} />,
};

export const AllTypes = {
  name: 'All Types',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: 400 }}>
      {['Information', 'Positive', 'Negative', 'Warning'].map((d) => (
        <MessageStrip key={d} design={d}>
          {d} message — action completed or attention required.
        </MessageStrip>
      ))}
    </div>
  ),
};
