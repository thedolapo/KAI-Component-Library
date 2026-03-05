import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ScatterChart
} from '@ui5/webcomponents-react-charts';
import {
  scatterColorDataSet
} from './ChartDemoProps.js';
import {
  legendConfig,
  scatterComplexDataSet,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Scatter Chart', component: ScatterChart,
  argTypes: {
    children: {
      control: { disable: true },
    },
  },
  args: {
    dataset: scatterComplexDataSet,
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        axis: 'x',
      },
      {
        accessor: 'sessions',
        label: 'Sessions',
        formatter: (val) => `${val}k`,
        axis: 'y',
      },
      {
        accessor: 'volume',
        axis: 'z',
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
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-scatterchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    dataset: scatterColorDataSet,
    measures: [
      {
        accessor: 'users',
        label: 'Users',
        axis: 'x',
      },
      {
        accessor: 'sessions',
        label: 'Sessions',
        axis: 'y',
      },
      {
        accessor: 'volume',
        axis: 'z',
      },
    ],
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
