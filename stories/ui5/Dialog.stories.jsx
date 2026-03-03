import React, { useState, useEffect, useRef } from 'react';
import {
  Bar,
  Button,
  Dialog,
  List,
  ListItemStandard
} from '@ui5/webcomponents-react';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/Dialog',
  component: Dialog,
  argTypes: {
    footer: { control: { disable: true } },
    header: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  args: {
    children: (
      <List>
        <ListItemStandard additionalText="Fruits" text="Apples" />
        <ListItemStandard additionalText="Fruits" text="Bananas" />
        <ListItemStandard additionalText="Vegetables" text="Potato" />
      </List>
    ),
    headerText: 'Dialog Header',
    open: isChromatic,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=1101:2509',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-dialog--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          {...args}
          data-sap-ui-fastnavgroup="true"
          className="contentPartNoPadding footerPartNoPadding"
          open={dialogOpen}
          onClose={(e) => {
            args.onClose(e);
            setDialogOpen(false);
          }}
          footer={
            <Bar
              design="Footer"
              endContent={
                <Button
                  data-sap-ui-fastnavgroup="true"
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                >
                  Close
                </Button>
              }
            />
          }
        />
      </>
    );
  },
};
