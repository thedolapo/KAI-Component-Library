import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Button,
  NavigationLayout,
  ShellBar,
  SideNavigation,
  SideNavigationGroup,
  SideNavigationItem,
  SideNavigationSubItem,
  Text,
  Title
} from '@ui5/webcomponents-react';
import menuIcon from '@ui5/webcomponents-icons/dist/menu.js';
import '@ui5/webcomponents-icons/dist/home.js';
import '@ui5/webcomponents-icons/dist/group.js';
import '@ui5/webcomponents-icons/dist/locate-me.js';
import '@ui5/webcomponents-icons/dist/calendar.js';
import '@ui5/webcomponents-icons/dist/history.js';
import '@ui5/webcomponents-icons/dist/source-code.js';
import '@ui5/webcomponents-icons/dist/background.js';
import '@ui5/webcomponents-icons/dist/activity-assigned-to-goal.js';
import '@ui5/webcomponents-icons/dist/action-settings.js';
import '@ui5/webcomponents-icons/dist/chain-link.js';
import '@ui5/webcomponents-icons/dist/document-text.js';
import '@ui5/webcomponents-icons/dist/compare.js';
import '@ui5/webcomponents-icons/dist/locked.js';

const meta = {
  title: 'UI5 Components/Navigation Layout', component: NavigationLayout,
  argTypes: {
    header: { control: { disable: true } },
    sideContent: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  args: {
    mode: NavigationLayoutMode.Auto,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-navigationlayout--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    const [selectedContent, setSelectedContent] = useState('Home');
    const [mode, setMode] = useState(args.mode);
    const navigationLayoutRef = useRef(null);
    const handleSelectionChange = (e) => {
      setSelectedContent(e.detail.item.text);
    };

    useEffect(() => {
      setMode(args.mode);
    }, [args.mode]);

    return (
      <div style={{ position: 'relative', height: '800px' }}>
        <NavigationLayout
          {...args}
          ref={navigationLayoutRef}
          mode={mode}
          header={
            <ShellBar
              startButton={
                <Button
                  icon={menuIcon}
                  onClick={() => {
                    if (navigationLayoutRef.current?.isSideCollapsed()) {
                      setMode(NavigationLayoutMode.Expanded);
                    } else {
                      setMode(NavigationLayoutMode.Collapsed);
                    }
                  }}
                />
              }
              primaryTitle="UI5 Web Components for React"
              secondaryTitle="The Best Run SAP"
            />
          }
          sideContent={
            <SideNavigation slot="sideContent" onSelectionChange={handleSelectionChange}>
              <SideNavigationItem text="Home" icon="home" />
              <SideNavigationGroup text="Group 1" expanded>
                <SideNavigationItem text="Item 1" icon="locate-me" expanded>
                  <SideNavigationSubItem text="Sub Item 1" />
                  <SideNavigationSubItem text="Sub Item 2" />
                </SideNavigationItem>
                <SideNavigationItem text="Item 2" icon="calendar" expanded>
                  <SideNavigationSubItem text="Sub Item 3" />
                  <SideNavigationSubItem text="Sub Item 4" />
                </SideNavigationItem>
                <SideNavigationItem text="Item 3" icon="activity-assigned-to-goal" expanded>
                  <SideNavigationSubItem text="Sub Item 5" />
                  <SideNavigationSubItem text="Sub Item 6" />
                </SideNavigationItem>
              </SideNavigationGroup>
              <SideNavigationGroup text="Group 2" expanded>
                <SideNavigationItem text="Item 4" icon="history" />
                <SideNavigationItem text="Item 5" icon="source-code" />
                <SideNavigationItem text="Item 6" icon="background" />
              </SideNavigationGroup>

              <SideNavigationItem
                slot="fixedItems"
                text="Legal"
                href="https://www.sap.com/about/legal/impressum.html"
                target="_blank"
                icon="compare"
              />
              <SideNavigationItem
                slot="fixedItems"
                text="Privacy"
                href="https://www.sap.com/about/legal/privacy.html"
                target="_blank"
                icon="locked"
              />
              <SideNavigationItem
                slot="fixedItems"
                text="Terms of Use"
                href="https://www.sap.com/terms-of-use"
                target="_blank"
                icon="document-text"
              />
            </SideNavigation>
          }
        >
          <div style={{ padding: '1rem' }}>
            <div>
              <Title>{selectedContent}</Title>
              <br />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </div>
          </div>
        </NavigationLayout>
      </div>
    );
  },
};
