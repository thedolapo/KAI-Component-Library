import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  RadarChart
} from '@ui5/webcomponents-react-charts';
import {
  complexDataSet,
  legendConfig,
  simpleDataSet,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Radar Chart', component: RadarChart,
  args: {
    dimensions: [
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`,
      },
    ],
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        formatter: (val) => `${val} sessions`, hideDataLabel,
      },
      {
        accessor: 'volume',
        label: 'Vol.',
      },
    ], dataset,
  },
  argTypes: {
    dataset: {
      control: { disable: true },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-radarchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    dimensions: [{ accessor: 'name' }],
    measures: [{ accessor: 'users', color: 'red' }], dataset,
  },
};

export const WithDataLabels = {
  args: {
    dimensions: [{ accessor: 'name' }],
    measures: [
      {
        accessor: 'users',
      },
      {
        accessor: 'sessions',
      },
      {
        accessor: 'volume',
      },
    ],
  },
};

export const Polygon = {
  args: {
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        label: 'number of users',
      },
      {
        accessor: 'sessions',
      },
      {
        accessor: 'volume',
      },
    ],
    chartConfig: { polarGridType: 'polygon' },
  },
};

export const LoadingPlaceholder = {
  args: {
    dataset: [],
  },
};

export const WithCustomTooltipConfig = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig = {
  args: legendConfig,
};
