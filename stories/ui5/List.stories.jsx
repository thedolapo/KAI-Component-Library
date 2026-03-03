import React, { useState, useEffect, useRef } from 'react';
import {
  FlexBox,
  FlexBoxJustifyContent,
  List,
  ListItemCustom,
  ListItemGroup,
  ListItemStandard,
  ProgressIndicator,
  Text
} from '@ui5/webcomponents-react';
import ListGrowingMode from '@ui5/webcomponents/dist/types/ListGrowingMode.js';
import ListSelectionMode from '@ui5/webcomponents/dist/types/ListSelectionMode.js';
import ListSeparator from '@ui5/webcomponents/dist/types/ListSeparator.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const meta = {
  title: 'UI5 Components/List',
  component: List,
  argTypes: {
    children: { control: { disable: true } },
    header: { control: { disable: true } },
  },
  args: {
    headerText: 'List with ListItemStandard',
    selectionMode: ListSelectionMode.None,
    separators: ListSeparator.All,
    growing: ListGrowingMode.None,
  },
};

// TODO: check why subcomponents aren't showing up in table in docs

export default meta;

export const Default = {
  render: (args) => {
    return (
      <List {...args}>
        <ListItemStandard additionalText="3" text="List Item 1" />
        <ListItemStandard additionalText="2" text="List Item 2" />
        <ListItemStandard additionalText="1" text="List Item 3" />
      </List>
    );
  },
};

export const ListItemCustomStory = {
  name: 'ListItemCustom',
  args: {
    headerText: 'List with a ListItemCustom',
  },
  render: (args) => {
    return (
      <List {...args}>
        <ListItemCustom>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={{ width: '100%' }}>
            <Text style={{ fontWeight: 'bold' }}>FULLY</Text>
            <Text style={{ color: 'red' }}>CUSTOMIZABLE</Text>
            <Text style={{ color: 'white', backgroundColor: ThemingParameters.sapButton_Emphasized_Background }}>
              CHILDREN
            </Text>
          </FlexBox>
        </ListItemCustom>
        <ListItemCustom>
          <ProgressIndicator value={50} />
        </ListItemCustom>
      </List>
    );
  },
};

export const ListItemGroupStory = {
  name: 'ListItemGroup',
  args: {
    headerText: 'List with a ListItemGroup',
  },
  render: (args) => {
    return (
      <List {...args}>
        <ListItemGroup headerText="ListItemGroup 1">
          <ListItemStandard text="List Item" />
          <ListItemStandard text="List Item" />
        </ListItemGroup>
        <ListItemGroup headerText="ListItemGroup 2">
          <ListItemStandard text="List Item" />
        </ListItemGroup>
      </List>
    );
  },
};
