import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  MenuSeparator
} from '@ui5/webcomponents-react';
import addDocumentIcon from '@ui5/webcomponents-icons/dist/add-document.js';
import boldTextIcon from '@ui5/webcomponents-icons/dist/bold-text.js';
import italicTextIcon from '@ui5/webcomponents-icons/dist/italic-text.js';
import lockedIcon from '@ui5/webcomponents-icons/dist/locked.js';
import textAlignCenterIcon from '@ui5/webcomponents-icons/dist/text-align-center.js';
import textAlignLeftIcon from '@ui5/webcomponents-icons/dist/text-align-left.js';
import textAlignRightIcon from '@ui5/webcomponents-icons/dist/text-align-right.js';
import underlineTextIcon from '@ui5/webcomponents-icons/dist/underline-text.js';
const isChromatic = false;

const meta = {
  title: 'UI5 Components/Menu',
  component: Menu,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    open: isChromatic,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=307148:4033',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/navigation-menu--default)',
      },
    },
    chromatic: { delay: 1000 },
  },
};

export default meta;

export const Default = {
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          opener={btnRef.current}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder" />
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>
    );
  },
};

export const WithSubMenu = {
  name: 'with Submenu',
  render: (args) => {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          opener={btnRef.current}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New File" icon="add-document" />
          <MenuItem text="New Folder" icon="add-folder" disabled />
          <MenuSeparator />
          <MenuItem text="Open" icon="open-folder">
            <MenuItem text="Open Locally" icon="open-folder">
              <MenuItem text="Open C" />
              <MenuItem text="Open D" />
              <MenuItem text="Open E" />
            </MenuItem>
            <MenuItem text="Open from Cloud" icon="cloud" />
          </MenuItem>
          <MenuItem text="Close" />
          <MenuSeparator />
          <MenuItem text="Preferences" icon="action-settings" />
          <MenuItem text="Exit" icon="journey-arrive" />
        </Menu>
      </>
    );
  },
};

export const WithMenuItemGroup = {
  name: 'with MenuItemGroup',
  render(args) {
    const [open, setOpen] = useState(args.open);
    const btnRef = useRef(null);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          ref={btnRef}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Show Menu
        </Button>
        <Menu
          {...args}
          open={open}
          opener={btnRef.current}
          onClose={(e) => {
            args.onClose(e);
            setOpen(false);
          }}
        >
          <MenuItem text="New Paragraph" icon={addDocumentIcon} />
          <MenuItem text="New Text" />
          <MenuSeparator />
          <MenuItemGroup checkMode="Single">
            <MenuItem text="Left Alignment" icon={textAlignLeftIcon} checked />
            <MenuItem text="Center Alignment" icon={textAlignCenterIcon} checked />
            <MenuItem text="Right Alignment" icon={textAlignRightIcon} checked />
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItemGroup checkMode="Multiple">
            <MenuItem text="Bold" icon={boldTextIcon} checked>
              <Button id="newLock2" slot="endContent" icon={lockedIcon} design="Transparent" />
            </MenuItem>
            <MenuItem text="Italic" icon={italicTextIcon} additionalText="Cursive Text" checked />
            <MenuItem text="Underline" icon={underlineTextIcon} checked />
          </MenuItemGroup>
          <MenuSeparator />
          <MenuItem text="Exit" />
        </Menu>
      </>
    );
  },
};
