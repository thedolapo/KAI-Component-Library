/**
 * UI5 Components/Menu
 * Figma: Menu — node-id 307148:4033
 */

import React, { useRef } from 'react';
import { Menu, MenuItem, Button } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=307148:4033';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/navigation-menu--default';

export default {
  title: 'UI5 Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A contextual dropdown menu with support for nested sub-menus and icon items. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
};

function MenuDemo() {
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button
        ref={btnRef}
        design="Default"
        icon="menu2"
        onClick={(e) => menuRef.current?.showAt(e.target)}
      >
        Open Menu
      </Button>

      <Menu
        ref={menuRef}
        headerText="Actions"
        onItemClick={(e) => console.log('clicked:', e.detail.item.text)}
      >
        <MenuItem text="Edit" icon="edit" />
        <MenuItem text="Copy" icon="copy" />
        <MenuItem text="Share" icon="share-2">
          <MenuItem text="Copy Link" icon="chain-link" />
          <MenuItem text="Send Email" icon="email" />
        </MenuItem>
        <MenuItem text="Delete" icon="delete" />
      </Menu>
    </div>
  );
}

export const Default = {
  render: () => <MenuDemo />,
};
