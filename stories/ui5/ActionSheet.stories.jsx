import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ActionSheet,
  Button
} from '@ui5/webcomponents-react';
import PopoverHorizontalAlign from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign.js';
import PopoverPlacement from '@ui5/webcomponents/dist/types/PopoverPlacement.js';
import PopoverVerticalAlign from '@ui5/webcomponents/dist/types/PopoverVerticalAlign.js';
import acceptIcon from '@ui5/webcomponents-icons/dist/accept.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import deleteIcon from '@ui5/webcomponents-icons/dist/delete.js';
import emailIcon from '@ui5/webcomponents-icons/dist/email.js';
import forwardIcon from '@ui5/webcomponents-icons/dist/forward.js';

const meta = {
  title: 'UI5 Components/Action Sheet', component: ActionSheet,
  argTypes: {
    children: {
      control: { disable: true },
    },
    footer: {
      control: { disable: true },
    },
    header: {
      control: { disable: true },
    },
    accessibilityAttributes: { table: { category: 'Accessibility props' } },
  },
  args: {
    horizontalAlign: PopoverHorizontalAlign.Center,
    placement: PopoverPlacement.End,
    verticalAlign: PopoverVerticalAlign.Center, open,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-actionsheet--default)',
      },
    },

    chromatic: { disableSnapshot: true },
  },
};

export default meta;

export const Default = {
  render(args) {
    const buttonRef = useRef(null);
    const [actionSheetOpen, setActionSheetOpen] = useState(args.open);
    useEffect(() => {
      setActionSheetOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          onClick={() => {
            setActionSheetOpen(true);
          }}
          ref={buttonRef}
        >
          Open ActionSheet
        </Button>
        <ActionSheet
          {...args}
          opener={buttonRef.current}
          open={actionSheetOpen}
          onClose={(e) => {
            args.onClose(e);
            setActionSheetOpen(false);
          }}
        >
          <Button icon={acceptIcon}>Accept</Button>
          <Button icon={declineIcon}>Reject</Button>
          <Button icon={emailIcon}>Email</Button>
          <Button icon={forwardIcon}>Forward</Button>
          <Button icon={deleteIcon}>Delete</Button>
          <Button>Other</Button>
        </ActionSheet>
      </>
    );
  },
};
