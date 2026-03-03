import React, { useState, useEffect, useRef } from 'react';
import {
  FlexBox,
  FlexBoxWrap,
  Icon,
  Tag,
  Text
} from '@ui5/webcomponents-react';
import TagDesign from '@ui5/webcomponents/dist/types/TagDesign.js';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';

const meta = {
  title: 'UI5 Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } },
  },
  args: {
    children: 'Tag Text',
    icon: <Icon name={employeeIcon} />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=159914:12392',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-tag--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const AllColors = {
  render() {
    return (
      <FlexBox wrap={FlexBoxWrap.Wrap} style={{ gap: '0.5rem' }}>
        <Text style={{ flexGrow: 1, width: '100%' }}>Value States:</Text>
        {Object.values(TagDesign)
          .filter((item) => !item.startsWith('Set'))
          .map((vs) => (
            <Tag key={vs} design={vs}>
              {vs}
            </Tag>
          ))}
        <Text style={{ flexGrow: 1, width: '100%' }}>Set1:</Text>
        {new Array(10).fill('').map((_, index) => (
          <Tag key={index} design="Set1" colorScheme={`${index + 1}`}>
            colorScheme: "{index + 1}"
          </Tag>
        ))}
        <Text style={{ flexGrow: 1, width: '100%' }}>Set2:</Text>
        {new Array(10).fill('').map((_, index) => (
          <Tag key={index} design="Set2" colorScheme={`${index + 1}`}>
            colorScheme: "{index + 1}"
          </Tag>
        ))}
      </FlexBox>
    );
  },
};
