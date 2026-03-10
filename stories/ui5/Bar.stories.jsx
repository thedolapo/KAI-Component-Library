import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bar,
  Button,
  Input,
  Link,
  Title
} from '@ui5/webcomponents-react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';

const meta = {
  title: 'UI5 Components/Bar', component: Bar,
  argTypes: {
    startContent: { control: { disable: true } },
    children: { control: { disable: true } },
    endContent: { control: { disable: true } },
  },
  args: {
    design: BarDesign.Header,
    startContent: <span>Start Content</span>,
    children: <span>Center Content</span>,
    endContent: <span>End Content</span>,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-bar--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomElements = {
  render(args) {
    return (
      <Bar
        {...args}
        startContent={
          <>
            <Button icon={navBackIcon} design={ButtonDesign.Transparent} />
            <img
              src="https://raw.githubusercontent.com/UI5/webcomponents-react/main/assets/Logo-Sticker.png"
              alt="logo"
              style={{ marginLeft: '6px', width: '120px' }}
            />
          </>
        }
        endContent={
          <>
            <Input placeholder="Search" />
            <Link style={{ marginLeft: '6px' }} href="https://github.com/UI5/webcomponents-react" target="_blank">
              GitHub
            </Link>
          </>
        }
      >
        <Title>Bar</Title>
      </Bar>
    );
  },
};
