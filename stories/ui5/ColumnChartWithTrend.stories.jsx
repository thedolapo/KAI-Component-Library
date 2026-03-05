import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ColumnChartWithTrend
} from '@ui5/webcomponents-react-charts';
import {
  complexDataSet,
  legendConfig,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Column Chart With Trend', component: ColumnChartWithTrend,
  args: {
    style: { height: '400px' }, dataset,
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
        type: 'line',
      },
      {
        accessor: 'sessions',
        label: 'Active Sessions',
        type: 'bar',
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
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-columnchartwithtrend--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const LoadingPlaceholder = {
  args: {
    dataset: [],
  },
};

export const WithCustomLegendConfig = {
  args: legendConfig,
};

export const WithCustomTooltipConfig = {
  args: tooltipConfig,
};
