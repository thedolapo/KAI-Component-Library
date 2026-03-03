import React, { useState, useEffect, useRef } from 'react';
import { IllustratedMessage } from '@ui5/webcomponents-react';

// Illustration names from @ui5/webcomponents-fiori IllustrationMessageType
const IllustrationMessageType = {
  BeforeSearch: 'BeforeSearch',
  NoData: 'NoData',
  NoEntries: 'NoEntries',
  NoNotifications: 'NoNotifications',
  NoSavedItems: 'NoSavedItems',
  NoSearchResults: 'NoSearchResults',
  NoTasks: 'NoTasks',
  UnableToLoad: 'UnableToLoad',
  UnableToUpload: 'UnableToUpload',
  AddColumn: 'AddColumn',
  AddPeople: 'AddPeople',
  BalloonSky: 'BalloonSky',
  Connection: 'Connection',
  EmptyCalendar: 'EmptyCalendar',
  EmptyList: 'EmptyList',
  EmptyPlanning: 'EmptyPlanning',
  ErrorScreen: 'ErrorScreen',
  FilterTable: 'FilterTable',
  GroupTable: 'GroupTable',
  NegativeFeedback: 'NegativeFeedback',
  NewMail: 'NewMail',
  PageNotFound: 'PageNotFound',
  ReloadScreen: 'ReloadScreen',
  ResizingColumn: 'ResizingColumn',
  SearchEarth: 'SearchEarth',
  SearchFolder: 'SearchFolder',
  SuccessCheckMark: 'SuccessCheckMark',
  SuccessHighFive: 'SuccessHighFive',
  SuccessScreen: 'SuccessScreen',
  SurveyAndVoting: 'SurveyAndVoting',
  Tent: 'Tent',
  UploadCollection: 'UploadCollection',
};

const meta = {
  title: 'UI5 Components/Illustrated Message',
  component: IllustratedMessage,
  args: {
    name: IllustrationMessageType.BeforeSearch,
  },
  argTypes: {
    children: { control: false },
    subtitle: { control: false },
    name: {
      control: 'select',
      options: Object.values(IllustrationMessageType),
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=80967:12113',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/ui-elements-illustratedmessage--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
