import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  Icon,
  Input,
  Label,
  Title
} from '@ui5/webcomponents-react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Flex Box', component: FlexBox,
  argTypes: {
    as: { control: { disable: true } },
  },
  args: {
    justifyContent: FlexBoxJustifyContent.Start,
    alignItems: FlexBoxAlignItems.Stretch,
    direction: FlexBoxDirection.Row,
    wrap: FlexBoxWrap.NoWrap,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-flexbox--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    return (
      <FlexBox {...args}>
        <Title>Item 1</Title>
        <Icon name={employeeIcon} title="Item 2" />
        <Label>Item 3</Label>
        <Input placeholder="Item 4" />
        <Label>Item 5</Label>
        <Label>Item 6</Label>
      </FlexBox>
    );
  },
};
