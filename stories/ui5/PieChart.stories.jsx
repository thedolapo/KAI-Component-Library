import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  PieChart
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
  title: 'UI5 Components/Charts/Pie Chart', component: PieChart,
  args: {
    dimension: {
      accessor: 'name',
    },
    measure: {
      accessor: 'users',
    }, dataset: simpleDataSet,
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
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-piechart--default)',
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
      colors: ['#f00', 'green', 'var(--sapNegativeColor)'],
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
    measure: {
      accessor: 'users',
      formatter: (d) => (d > 200 ? 'over 200' : 'lower'),
    },
    chartConfig: {
      activeSegment: 1, showActiveSegmentDataLabel: true,
    },
  },
  render(args) {
    const [activeSegment, setActiveSegment] = useState(1);
    const handleChartClick = (e) => {
      const { dataIndex } = e.detail;
      if (dataIndex != null) {
        setActiveSegment(dataIndex);
      }
    };

    return <PieChart {...args} chartConfig={{ ...args.chartConfig, activeSegment }} onClick={handleChartClick} />;
  },
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

    return <PieChart {...args} chartConfig={{ ...args.chartConfig, activeSegment }} onClick={handleChartClick} />;
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
    }, dataset: simpleDataSet,
  },
};

export const WithCustomTooltipConfig = {
  args: tooltipConfig,
};

export const WithCustomLegendConfig = {
  args: legendConfig,
};
