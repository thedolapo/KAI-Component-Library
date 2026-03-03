/**
 * UI5 Components/Dialog
 * Figma: Dialog — node-id 1101:2509
 */

import React, { useRef } from 'react';
import { Dialog, Button, Bar } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=1101:2509';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-dialog--default';

export default {
  title: 'UI5 Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A modal dialog that blocks interaction with the rest of the page. Supports header, content, and footer slots. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
};

function DialogDemo() {
  const dialogRef = useRef(null);
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button design="Emphasized" onClick={() => dialogRef.current?.show()}>
        Open Dialog
      </Button>
      <Dialog
        ref={dialogRef}
        headerText="Confirm Action"
        footer={
          <Bar
            endContent={
              <>
                <Button design="Emphasized" onClick={() => dialogRef.current?.close()}>
                  Confirm
                </Button>
                <Button onClick={() => dialogRef.current?.close()}>Cancel</Button>
              </>
            }
          />
        }
      >
        <div style={{ padding: '1rem', fontFamily: '\'72\', Arial, sans-serif' }}>
          Are you sure you want to proceed with this action? This cannot be undone.
        </div>
      </Dialog>
    </div>
  );
}

export const Default = {
  render: () => <DialogDemo />,
};
