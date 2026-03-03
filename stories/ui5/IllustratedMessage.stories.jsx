/**
 * UI5 Components/Illustrated Message
 * Figma: Illustrated Message — node-id 80967:12113
 */

import React from 'react';
import { IllustratedMessage, Button } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=80967:12113';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-illustratedmessage--default';

const ILLUSTRATION_TYPES = [
  'NoData', 'NoSearchResults', 'NoEntries', 'NoNotifications', 'BeforeSearch',
  'ErrorScreen', 'UnableToLoad', 'AddColumn', 'AddPeople',
];

export default {
  title: 'UI5 Components/Illustrated Message',
  component: IllustratedMessage,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'An empty-state illustration with title, description, and optional action button. ' +
          'Use for no-data, error, and search-result states. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ILLUSTRATION_TYPES,
    },
    titleText: { control: 'text' },
    subtitleText: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['Auto', 'Dot', 'Spot', 'Dialog', 'Scene'],
    },
  },
  args: {
    name: 'NoData',
    titleText: 'No items found',
    subtitleText: 'Try adjusting your filters or search terms.',
    size: 'Auto',
  },
};

export const Default = {
  render: (args) => (
    <IllustratedMessage {...args}>
      <Button slot="additionalContent" design="Emphasized">Create Item</Button>
    </IllustratedMessage>
  ),
};

export const NoSearchResults = {
  args: {
    name: 'NoSearchResults',
    titleText: 'No search results',
    subtitleText: 'Check your spelling or try a different search term.',
  },
  render: (args) => <IllustratedMessage {...args} />,
};
