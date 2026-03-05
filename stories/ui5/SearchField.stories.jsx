import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  SearchItem,
  SearchItemGroup,
  SearchItemShowMore,
  SearchScope
} from '@ui5/webcomponents-react';
import globeIcon from '@ui5/webcomponents-icons/dist/globe.js';
import historyIcon from '@ui5/webcomponents-icons/dist/history.js';
import searchIcon from '@ui5/webcomponents-icons/dist/search.js';

const meta = {
  title: 'UI5 Components/Search Field', component: Search,
  argTypes: {
    children: { control: { disable: true } },
    illustration: { control: { disable: true } },
    scopes: { control: { disable: true } },
    messageArea: { control: { disable: true } },
    action: { control: { disable: true } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-searchfield--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

const scopeData = [
  { name: 'Laptop', scope: 'products' },
  { name: 'Leave Requests', scope: 'apps' },
  { name: 'Log work', scope: 'apps' },
  { name: 'Manage Products', scope: 'apps' },
  { name: 'Mobile Phones', scope: 'products' },
  { name: 'Tablet', scope: 'products' },
];

export const WithScopeAndItems = {
  args: {
    showClearIcon: true,
    placeholder: 'Search Apps, Products',
    scopeValue: 'all',
    scopes: (
      <>
        <SearchScope text="All" value="all" />
        <SearchScope text="Apps" value="apps" />
        <SearchScope text="Products" value="products" />
      </>
    ),
  },
  render(args) {
    const [filterData, setFilterData] = useState(scopeData);

    const handleScopeChange = (e) => {
      args.onScopeChange(e);
      const { scope } = e.detail;
      if (scope.text === 'All') {
        setFilterData(scopeData);
      } else {
        setFilterData(
          scopeData.filter((item) => {
            return item.scope === scope.text.toLowerCase();
          }),
        );
      }
    };

    return (
      <Search {...args} onScopeChange={handleScopeChange}>
        {filterData.map((item) => {
          return <SearchItem key={item.name} text={item.name} scopeName={item.scope} />;
        })}
      </Search>
    );
  },
};

const allItems = [
  { text: 'Search Item 1', icon: historyIcon },
  { text: 'Search Item 2', icon: searchIcon },
  { text: 'Search Item 3', icon: historyIcon },
  { text: 'Search Item 4', icon: historyIcon },
  { text: 'Search Item 5', icon: searchIcon },
  { text: 'Search Item 6', icon: globeIcon },
];
const visibleItems = allItems.slice(0, 3);
const hiddenItems = allItems.slice(3);

export const ShowMoreItem = {
  args: {
    showClearIcon: true,
    placeholder: 'Placeholder',
  },
  render(args) {
    const [showHiddenItems, setShowHiddenItems] = useState(false);

    return (
      <Search {...args}>
        <SearchItemGroup headerText="Group Header 1">
          {visibleItems.map((item) => {
            return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
          })}
          {!showHiddenItems && (
            <SearchItemShowMore
              itemsToShowCount={hiddenItems.length}
              onClick={() => {
                setShowHiddenItems(true);
              }}
            />
          )}
          {showHiddenItems &&
            hiddenItems.map((item) => {
              return <SearchItem key={item.text} text={item.text} icon={item.icon} />;
            })}
        </SearchItemGroup>
        <SearchItemGroup headerText="Group Header 2">
          <SearchItem text="Search Item 1" icon={historyIcon} />
          <SearchItem text="Search Item 2" icon={historyIcon} />
          <SearchItem text="Search Item 3" icon={globeIcon} />
        </SearchItemGroup>
      </Search>
    );
  },
};
