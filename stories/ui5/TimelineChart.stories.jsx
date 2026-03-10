import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  TimelineChart
} from '@ui5/webcomponents-react-charts';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const dummyDiscreteDataSet = [
  {
    label: 'Task 1',
    tasks: [
      { id: 0, start: 0, duration: 5, color: ThemingParameters.sapChart_OrderedColor_1 },
      { id: 1, start: 8, duration: 4, color: ThemingParameters.sapChart_OrderedColor_2 },
    ],
  },
  {
    label: 'Task 2',
    tasks: [
      { id: 2, start: 2, duration: 6, color: ThemingParameters.sapChart_OrderedColor_3 },
    ],
  },
  {
    label: 'Task 3',
    tasks: [
      { id: 3, start: 5, duration: 10, color: ThemingParameters.sapChart_OrderedColor_4 },
    ],
  },
  {
    label: 'Task 4',
    tasks: [
      { id: 4, start: 0, duration: 3, color: ThemingParameters.sapChart_OrderedColor_5 },
      { id: 5, start: 12, duration: 8, color: ThemingParameters.sapChart_OrderedColor_6 },
    ],
  },
];

const meta = {
  title: 'UI5 Components/Charts/Timeline Chart', component: TimelineChart,
  argTypes: {
    dataset: {
      control: { disable: true },
    },
  },
  args: { dataset: dummyDiscreteDataSet },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-timelinechart--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    totalDuration: 36,
    isDiscrete: true,
    start: 0,
    showConnection: true,
  },
};

export const LoadingPlaceholder = {
  render() {
    return <TimelineChart />;
  },
};
