import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ExpandableText
} from '@ui5/webcomponents-react';
import ExpandableTextOverflowMode from '@ui5/webcomponents/dist/types/ExpandableTextOverflowMode.js';
import TextEmptyIndicatorMode from '@ui5/webcomponents/dist/types/TextEmptyIndicatorMode.js';

const meta = {
  title: 'UI5 Components/Expandable Text', component: ExpandableText,
  argTypes: {
    text: { control: 'text' },
    maxCharacters: { control: 'number' },
    children: { control: { disable: true } },
    showOverflowInPopover: { control: { disable: true } },
    //todo: uncomment once white-space can be applied w/o addCustomCSS
    // renderWhitespace: { control: { disable: true } }
  },
  args: {
    emptyIndicatorMode: TextEmptyIndicatorMode.Off,
    overflowMode: ExpandableTextOverflowMode.InPlace,
    text: `             If "renderWhitespace" is set to true, there will be thirteen white spaces in front and after this sentence.             Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat`, maxCharacters,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-expandabletext--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
