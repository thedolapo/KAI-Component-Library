import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  LineChart
} from '@ui5/webcomponents-react-charts';
import {
  bigDataSet,
  complexDataSet,
  legendConfig,
  secondaryDimensionDataSet,
  simpleDataSet,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Line Chart', component: LineChart,
  args: {
    dimensions: [
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`, interval: 0,
      },
    ],
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        lineConfig: { type: 'linear' },
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        formatter: (val) => `${val} sessions`, hideDataLabel: true,
      },
      {
        accessor: 'volume',
        label: 'Vol.',
      },
    ], dataset: simpleDataSet,
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
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-linechart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    dimensions: [{ accessor: 'name' }],
    measures: [{ accessor: 'users', color: 'red' }], dataset: complexDataSet,
  },
};

export const WithSecondaryDimension = {
  args: {
    dimensions: [{ accessor: 'name' }, { accessor: 'dimension' }],
    measures: [{ accessor: 'users', color: 'red' }], dataset: complexDataSet,
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

export const WithFormatter = {
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
  },
};

export const LoadingPlaceholder = {
  args: {
    dataset: [],
  },
};

export const WithReferenceLine = {
  args: {
    dimensions: [{ accessor: 'name' }],
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX', value: 650,
      },
    },
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
    ], dataset: simpleDataSet,
  },
};

export const WithLinearGradient = {
  render: (args) => (
    <LineChart {...args}>
      <defs>
        <linearGradient id="colorUsers" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
      </defs>
    </LineChart>
  ),
  args: {
    dataset: bigDataSet,
    dimensions: [{ accessor: 'name' }],
    measures: [
      {
        accessor: 'users', width: 2,
        color: 'url(#colorUsers)',
      },
    ],
  },
};

export const WithCustomTooltipConfig = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig = {
  args: legendConfig,
};
