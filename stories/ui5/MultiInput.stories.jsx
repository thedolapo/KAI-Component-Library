import React, { useState, useEffect, useRef } from 'react';
import {
  MultiInput,
  Token
} from '@ui5/webcomponents-react';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const meta = {
  title: 'UI5 Components/Multi Input',
  component: MultiInput,
  argTypes: {
    tokens: { control: { disable: true } },
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    type: InputType.Text,
    valueState: ValueState.None,
    style: { width: '400px' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=212341:2966',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-multiinput--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <MultiInput
        {...args}
        tokens={
          <>
            <Token text="Argentina" />
            <Token text="Bulgaria" />
            <Token text="England" />
            <Token text="Finland" />
            <Token text="Germany" />
            <Token text="Hungary" />
            <Token text="Italy" />
            <Token text="Luxembourg" />
            <Token text="Mexico" />
            <Token text="Philippines" />
            <Token text="Sweden" />
            <Token text="USA" />
          </>
        }
      />
    );
  },
};
