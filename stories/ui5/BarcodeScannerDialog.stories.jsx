import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  BarcodeScannerDialog,
  Button
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/Barcode Scanner Dialog', component: BarcodeScannerDialog,
  argTypes: {},
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-barcodeScannerdialog--default)',
      },
    },
  },
};

export default meta;
// TODO: check story for outdated info
export const Default = {
  render(args) {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Open BarcodeScannerDialog
        </Button>
        <BarcodeScannerDialog
          {...args}
          open={open}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        />
      </>
    );
  },
};
