import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ColumnChart
} from '@ui5/webcomponents-react-charts';
import {
  complexDataSet,
  legendConfig,
  secondaryDimensionDataSet,
  simpleDataSet,
  stackedNormalizedConfig,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Column Chart', component: ColumnChart,
  argTypes: {
    dataset: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
  args: {
    dataset: complexDataSet,
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
        formatter: (val) => `${val} sessions`, hideDataLabel: true,
      },
      {
        accessor: 'volume',
        label: 'Vol.',
      },
    ],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-columnchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    measures: [{ accessor: 'users', color: 'red' }], dataset: complexDataSet,
  },
};

export const WithSecondaryDimension = {
  args: {
    dimensions: [{ accessor: 'name' }, { accessor: 'dimension' }],
    measures: [{ accessor: 'users', color: 'red' }], dataset: complexDataSet,
  },
};

export const WithStacks = {
  args: {
    measures: [
      {
        accessor: 'users',
        stackId: 'A',
      },
      {
        accessor: 'sessions',
        stackId: 'A',
      },
      {
        accessor: 'volume',
      },
    ], dataset,
  },
};

export const WithNormalizedStacks = {
  args: stackedNormalizedConfig,
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
    chartConfig: {
      referenceLine: {
        color: 'red',
        label: 'MAX', value: 650,
      },
    },
  },
};

export const WithHighlightedMeasure = {
  args: {
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        formatter: (val) => `${val} sessions`, hideDataLabel: true,
      },
      {
        accessor: 'volume',
        label: 'Vol.',
        highlightColor: (value) => {
          if (value > 750) {
            return 'red';
          }
        },
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
