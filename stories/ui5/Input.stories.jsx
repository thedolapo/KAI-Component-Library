import React, { useState, useEffect, useRef } from 'react';
import {
  Icon,
  Input,
  SuggestionItem,
  SuggestionItemGroup
} from '@ui5/webcomponents-react';
import InputType from '@ui5/webcomponents/dist/types/InputType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Input',
  component: Input,
  argTypes: {
    children: { control: { disable: true } },
    icon: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    type: InputType.Text,
    valueState: ValueState.None,
    icon: <Icon name={employeeIcon} />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=148569:1061',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-input--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithSuggestionItem = {
  name: 'with SuggestionItem',
  args: {
    showSuggestions: true,
    placeholder: 'type anything to show suggestions',
    icon: null,
  },
  render: (args) => {
    return (
      <Input {...args} style={{ width: '400px' }}>
        <SuggestionItemGroup headerText="A Group">
          <SuggestionItem text="United States" additionalText={'USA'} />
          <SuggestionItem text="Bulgaria" />
        </SuggestionItemGroup>
        <SuggestionItemGroup headerText="Another Group Items">
          <SuggestionItem text="Argentina" />
          <SuggestionItem text="Germany" />
          <SuggestionItem text="Iceland" />
          <SuggestionItem text="Moldova" />
        </SuggestionItemGroup>
      </Input>
    );
  },
};
