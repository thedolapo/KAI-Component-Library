import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  DonutChart
} from '@ui5/webcomponents-react-charts';
import {
  simpleDataSetWithSmallValues
} from './ChartDemoProps.js';
import {
  legendConfig,
  simpleDataSet,
  tooltipConfig
} from './ChartDemoProps.js';

const meta = {
  title: 'UI5 Components/Charts/Donut Chart', component: DonutChart,
  argTypes: {
    dataset: {
      control: { disable: true },
    },
    children: {
      control: { disable: true },
    },
  },
  args: {
    dataset: simpleDataSet,
    dimension: {
      accessor: 'name',
    },
    measure: {
      accessor: 'users',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-donutchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    measure: {
      accessor: 'users',
      colors: ['#f00', 'green', 'var(--sapNegativeColor)', 'black', 'yellow', 'pink'],
    },
  },
};

export const WithPaddedAngle = {
  args: {
    chartConfig: {
      paddingAngle: 5,
    },
  },
};

export const WithCustomRadius = {
  args: {
    chartConfig: {
      innerRadius: '20%',
      outerRadius: '90%',
    },
  },
};
export const LoadingPlaceholder = {
  args: {
    dataset: [],
  },
};

export const WithFormatter = {
  args: {
    dimension: {
      accessor: 'name',
      formatter: (el) => el.slice(0, 3),
    },
    measure: {
      accessor: 'users',
      formatter: (el) => `${el / 10}`,
    },
  },
};

export const HideLabels = {
  args: {
    measure: {
      accessor: 'users',
      hideDataLabel: (chartConfig) => {
        if (chartConfig.percent < 0.01) {
          return true;
        }
      },
    }, dataset: simpleDataSetWithSmallValues,
  },
};

export const WithCustomTooltipConfig = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig = {
  args: legendConfig,
};

export const WithActiveShape = {
  args: {
    chartConfig: {
      activeSegment: 1, showActiveSegmentDataLabel: true,
    },
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(args.chartConfig.activeSegment);
    const handleChartClick = (e) => {
      const { dataIndex } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };

    useEffect(() => {
      setActiveSegment(args.chartConfig.activeSegment);
    }, [args.chartConfig.activeSegment]);

    return <DonutChart {...args} chartConfig={{ ...args.chartConfig, activeSegment }} onClick={handleChartClick} />;
  },
};
