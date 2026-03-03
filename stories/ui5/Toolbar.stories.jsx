import React, { useState, useEffect, useRef } from 'react';
import {
  Popover,
  Toolbar,
  ToolbarButton,
  ToolbarSelect,
  ToolbarSelectOption,
  ToolbarSeparator,
  ToolbarSpacer
} from '@ui5/webcomponents-react';
import ToolbarAlign from '@ui5/webcomponents/dist/types/ToolbarAlign.js';

const meta = {
  title: 'UI5 Components/Toolbar',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    alignContent: ToolbarAlign.Start,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=183497:6467',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-toolbar--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => (
    <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
  ),
};

export const OpenPopover = {
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef(null);
    return (
      <>
        <Toolbar {...args}>
          <ToolbarButton
            onClick={(e) => {
              e.preventDefault();
              const { targetRef } = e.detail;
              if (popoverRef.current) {
                popoverRef.current.opener = targetRef;
                setPopoverOpen(true);
              }
            }}
            text="Open Popover"
          />
        </Toolbar>
        <Popover
          open={popoverOpen}
          ref={popoverRef}
          onClose={() => {
            setPopoverOpen(false);
          }}
        >
          Content
        </Popover>
      </>
    );
  },
};
