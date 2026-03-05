import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Button,
  FilterItem,
  FilterItemOption,
  SortItem,
  ViewSettingsDialog
} from '@ui5/webcomponents-react';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/View Settings Dialog', component: ViewSettingsDialog,
  argTypes: {
    filterItems: { control: { disable: true } },
    sortItems: { control: { disable: true } },
  },
  args: {
    open: isChromatic,
    filterItems: (
      <>
        <FilterItem
          text="Position"
          values={
            <>
              <FilterItemOption text="CEO" />
              <FilterItemOption text="CTO" />
              <FilterItemOption text="CIO" />
            </>
          }
        />
        <FilterItem
          text="Department"
          values={
            <>
              <FilterItemOption text="Legal" />
              <FilterItemOption text="Finance" />
              <FilterItemOption text="Development" />
            </>
          }
        />
      </>
    ),
    sortItems: (
      <>
        <SortItem text="Name" />
        <SortItem text="Position" />
        <SortItem text="Company" />
        <SortItem text="Department" />
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/modals-overlays-viewsettingsdialog--default)',
      },
    },

    chromatic: { delay: 999 },
  },
};

export default meta;

export const Default = {
  render: (args) => {
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
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog
          {...args}
          open={open}
          onClose={(e) => {
            setOpen(false);
            args.onClose(e);
          }}
        />
      </>
    );
  },
};
