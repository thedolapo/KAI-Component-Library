import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ComposedChart
} from '@ui5/webcomponents-react-charts';
import {
  bigDataSet,
  complexDataSet,
  legendConfig,
  simpleDataSet,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Composed Chart', component: ComposedChart,
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
        formatter: (d) => `${d} 2019`, interval,
      },
    ],
    measures: [
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'bar',
      },
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        type: 'area',
      },
      {
        accessor: 'volume',
        label: 'Vol.',
        formatter: (val) => `${val} sessions`,
        type: 'line',
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
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-composedchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    dataset: simpleDataSet,
    dimensions: [{ accessor: 'name' }],
    measures: [{ accessor: 'users', color: 'red', type: 'bar' }],
  },
};

export const WithDataLabels = {
  args: {
    measures: [
      {
        accessor: 'users',
        type: 'area',
      },
      {
        accessor: 'sessions',
        type: 'bar',
        opacity: 0.6,
      },
      {
        accessor: 'volume',
        type: 'line',
      },
    ],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions',
      },
    },
  },
};

export const WithFormatter = {
  args: {
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        type: 'bar',
        label: 'number of users',
        stackId: 'A', width,
      },
      {
        accessor: 'sessions',
        type: 'bar',
        stackId: 'A', width,
      },
      {
        accessor: 'volume',
        type: 'line', width,
      },
    ],
  },
};

export const WithReferenceLine = {
  args: {
    chartConfig: {
      zoomingTool: true,
      referenceLine: {
        color: 'red',
        label: 'MAX', value,
      },
    }, dataset,
    measures: [
      {
        accessor: 'users',
        type: 'bar', width,
      },
      {
        accessor: 'sessions',
        type: 'line',
      },
      {
        accessor: 'volume',
        type: 'line',
      },
    ],
  },
};

export const WithHighlightedMeasures = {
  args: {
    dimensions: [
      {
        accessor: 'name',
        formatter: (d) => `${d} 2019`, interval,
      },
    ],
    measures: [
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'bar',
        highlightColor: (value) => {
          if (value > 400) {
            return 'red';
          }
        },
      },
      {
        accessor: 'users',
        label: 'Users',
        formatter: (val) => val.toLocaleString(),
        type: 'area',
      },
      {
        accessor: 'volume',
        label: 'Vol.',
        formatter: (val) => `${val} sessions`,
        type: 'line',
      },
    ],
  },
};

export const WithFormattedSecondaryAxis = {
  args: {
    measures: [
      {
        accessor: 'volume',
        type: 'line',
      },
      {
        accessor: 'sessions',
        type: 'bar',
        opacity: 0.6,
        formatter: (e) => '$' + e,
      },
    ],
    chartConfig: {
      zoomingTool: true,
      secondYAxis: {
        dataKey: 'sessions',
      },
    },
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
