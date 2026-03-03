import React, { useState, useEffect, useRef } from 'react';
import {
  BusyIndicator,
  Select,
  Text
} from '@ui5/webcomponents-react';
import BusyIndicatorSize from '@ui5/webcomponents/dist/types/BusyIndicatorSize.js';

const meta = {
  title: 'UI5 Components/Busy Indicator',
  component: BusyIndicator,
  argTypes: { children: { control: { disable: true } } },
  args: {
    size: BusyIndicatorSize.M,
    delay: 1000,
    active: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=23575:10459',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-busyindicator--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithChildren = {
  render(args) {
    return (
      <>
        <BusyIndicator {...args}>
          <Select />
        </BusyIndicator>
        <hr />
        <BusyIndicator {...args}>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </BusyIndicator>
      </>
    );
  },
};
