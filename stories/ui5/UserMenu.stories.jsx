import React, { useState, useEffect, useRef } from 'react';
import {
  Avatar,
  ShellBar,
  UserMenu,
  UserMenuAccount,
  UserMenuItem
} from '@ui5/webcomponents-react';

const meta = {
  title: 'UI5 Components/User Menu',
  component: UserMenu,
  argTypes: {
    children: { control: { disable: true } },
    opener: { control: { disable: true } },
    accounts: { control: { disable: true } },
  },
  args: {
    accounts: (
      <>
        <UserMenuAccount
          avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
          titleText="Alaina Chevalier"
          subtitleText="aliana.chevalier@sap.com"
          description="Delivery Manager, SAP SE"
          selected
        ></UserMenuAccount>
        <UserMenuAccount
          avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
          titleText="Alaina Chevalier I"
          subtitleText="aliana.chevalier1@sap.com"
          description="Delivery Manager, SAP SE"
        ></UserMenuAccount>
        <UserMenuAccount
          avatarSrc="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
          titleText="Alaina Chevalier II"
          subtitleText="aliana.chevalier2@sap.com"
          description="Delivery Manager, SAP SE"
        ></UserMenuAccount>
      </>
    ),
    children: (
      <>
        <UserMenuItem icon="action-settings" text="Setting" data-id="setting"></UserMenuItem>
        <UserMenuItem icon="globe" text="Product-specific account action" data-id="account-action1"></UserMenuItem>
        <UserMenuItem icon="official-service" text="Legal Information">
          <UserMenuItem icon="private" text="Private Policy" data-id="privacy-policy"></UserMenuItem>
          <UserMenuItem icon="accelerated" text="Terms of Use" data-id="terms-of-use"></UserMenuItem>
        </UserMenuItem>
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=286950:9396',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/fiori-usermenu--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    const userMenuRef = useRef(null);
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);
    return (
      <>
        <ShellBar
          primaryTitle={'Corporate Portal'}
          logo={<img src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg" alt="SAP Logo" />}
          profile={
            <Avatar>
              <img
                src="https://ui5.github.io/webcomponents/images/avatars/woman_avatar_3.png"
                alt={'Avatar of the current user'}
              />
            </Avatar>
          }
          onProfileClick={(event) => {
            userMenuRef.current.opener = event.detail.targetRef;
            userMenuRef.current.open = true;
            setOpen(true);
          }}
        />
        <UserMenu
          ref={userMenuRef}
          {...args}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
      </>
    );
  },
};
