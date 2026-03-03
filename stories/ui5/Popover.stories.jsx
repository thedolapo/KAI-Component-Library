import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  List,
  ListItemStandard,
  Popover
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/settings.js';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/Popover',
  component: Popover,
  argTypes: {
    children: { control: { disable: true } },
    footer: { control: { disable: true } },
    header: { control: { disable: true } },
  },
  args: {
    children: (
      <List>
        <ListItemStandard additionalText="Fruits" text="Apples" />
        <ListItemStandard additionalText="Fruits" text="Bananas" />
        <ListItemStandard additionalText="Vegetables" text="Potato" />
      </List>
    ),
    headerText: 'Popover Header',
    horizontalAlign: PopoverHorizontalAlign.Center,
    placement: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center,
    className: 'footerPartNoPadding',
    open: isChromatic,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=153790:2116',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-popover--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button
          id={'openPopoverBtn'}
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Popover
        </Button>
        <Popover
          {...args}
          onClose={() => {
            setOpen(false);
          }}
          opener="openPopoverBtn"
          open={open}
        />
      </>
    );
  },
};
