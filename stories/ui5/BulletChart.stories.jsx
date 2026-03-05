import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  BulletChart
} from '@ui5/webcomponents-react-charts';
import {
  complexBulletDataset,
  legendConfig,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Bullet Chart', component: BulletChart,
  argTypes: {
    dataset: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
  args: {
    dataset: complexBulletDataset,
    layout: 'horizontal',
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
        type: 'primary',
      },
      {
        accessor: 'users',
        label: 'Users',
        type: 'additional',
      },
      {
        accessor: 'volume',
        label: 'Volume',
        formatter: (val) => val.toLocaleString(),
        type: 'comparison',
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
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-bulletchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomSize = {
  args: {
    layout: 'vertical',
    dimensions: [{ accessor: 'name', formatter: (element) => element.slice(0, 3) }],
    measures: [
      {
        accessor: 'users',
        formatter: (element) => `${element / 10}`,
        type: 'additional',
        label: 'Number of users', width,
      },
      {
        accessor: 'sessions',
        type: 'primary', width,
        opacity: 0.5,
      },
      {
        accessor: 'volume',
        type: 'comparison', width,
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
        type: 'primary',
      },
      {
        accessor: 'users',
        label: 'Users',
        type: 'additional',
        highlightColor: (value) => {
          if (value > 100) {
            return 'red';
          }
        },
      },
      {
        accessor: 'volume',
        label: 'Volume',
        formatter: (val) => val.toLocaleString(),
        type: 'comparison',
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
