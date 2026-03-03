import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Toast
} from '@ui5/webcomponents-react';
import ToastPlacement from '@ui5/webcomponents/dist/types/ToastPlacement.js';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/Toast',
  component: Toast,
  args: {
    placement: ToastPlacement.BottomCenter,
    children: 'Toast Text',
    open: isChromatic,
  },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=126132:18899',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-toast--default)',
      },
    },
    chromatic: { delay: 1000 },
  },
};

export default meta;

export const Default = {
  render(args) {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    const showToast = () => {
      setOpen(true);
    };

    const onClose = (e) => {
      setOpen(false);
      args.onClose(e);
    };
    return (
      <div style={{ height: '300px' }}>
        <Toast open={open} duration={args.duration} placement={args.placement} onClose={onClose}>
          {args.children}
        </Toast>
        <Button onClick={showToast}>Show Toast</Button>
      </div>
    );
  },
};
