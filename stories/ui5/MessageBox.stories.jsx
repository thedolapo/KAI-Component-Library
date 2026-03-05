import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Button,
  MessageBox,
  MessageBoxAction,
  MessageBoxType
} from '@ui5/webcomponents-react';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/Message Box', component: MessageBox,
  argTypes: {
    header: {
      control: { disable: true },
    },
    actions: {
      control: { disable: true },
    },
    icon: {
      control: { disable: true },
    },
  },
  args: {
    open: isChromatic,
    type: MessageBoxType.Confirm,
    children: 'You can close the MessageBox by pressing "Escape" or selecting one of the footer buttons.',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-messagebox--default)',
      },
    },

    chromatic: { delay: 1000 },
  },
};

export default meta;

export const Default = {
  render(args) {
    const [open, setOpen] = useState(args.open);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>
    );
  },
};

export const WithCustomActions = {
  args: {
    actions: [
      MessageBoxAction.OK,
      'Custom Action',
      MessageBoxAction.Cancel,
      <Button key="0" id="custom-action">
        Custom Button
      </Button>,
    ],
  },
  render(args) {
    const [open, setOpen] = useState(false);
    const onButtonClick = () => {
      setOpen(true);
    };
    const handleClose = (action, escPressed) => {
      if (action === 'Custom Action') {
        // do something on "Custom Action" button click
      }
      setOpen(false);
      args.onClose(action, escPressed);
    };
    return (
      <>
        <Button onClick={onButtonClick}>Open Messagebox</Button>
        <MessageBox {...args} open={open} onClose={handleClose} />
      </>
    );
  },
};
