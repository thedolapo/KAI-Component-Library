import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  TimelineChart
} from '@ui5/webcomponents-react-charts';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

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
    totalDuration: 36, isDiscrete, start, showConnection,
  },
};

export const WithAnnotations = {
  args: {
    dataset: schedulingEDFData, totalDuration, showConnection, showAnnotation, rowHeight,
    unit: 'ms',
    valueFormat: (x) => x.toFixed(2),
  },
  render(props) {
    return (
      <TimelineChart
        {...props}
        annotations={
          <>
            <TimelineChartAnnotation
              rowIndex={0}
              rowHeight={35}
              figure={<TimingFigure arrival={0} period={4} deadline={4} totalDuration={15} />}
            />
            <TimelineChartAnnotation
              rowIndex={1}
              rowHeight={35}
              figure={<TimingFigure arrival={4} period={5} deadline={5} totalDuration={15} />}
            />
            <TimelineChartAnnotation
              rowIndex={2}
              rowHeight={35}
              figure={<TimingFigure arrival={0} period={7} deadline={6} totalDuration={15} />}
            />
          </>
        }
      />
    );
  },
};

export const WithAnnotationsOnly = {
  args: {
    dataset: inventionDataset, totalDuration, showAnnotation, rowHeight,
    valueFormat: (x) => x.toFixed(1),
  },
  render(props) {
    return (
      <TimelineChart
        {...props}
        annotations={
          <>
            <TimelineChartAnnotation
              rowIndex={0}
              figure={
                <>
                  <Invention
                    name={'internet'}
                    rowHeight={80}
                    time={50}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_9}
                  />
                  <Invention
                    name={'penicillin'}
                    rowHeight={80}
                    time={82}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_2}
                  />
                  <Invention
                    name={'airplane'}
                    rowHeight={80}
                    time={118}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_1}
                  />
                  <Invention
                    name={'lightbulb'}
                    rowHeight={80}
                    time={143}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_3}
                  />
                  <Invention
                    name={'telephone'}
                    rowHeight={80}
                    time={146}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_4}
                  />
                  <Invention
                    name={'steamengine'}
                    rowHeight={80}
                    time={258}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_5}
                  />
                  <Invention
                    name={'printingpress'}
                    rowHeight={80}
                    time={582}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_6}
                  />
                  <Invention
                    name={'compass'}
                    rowHeight={80}
                    time={1100}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_7}
                  />
                  <Invention
                    name={'wheel'}
                    rowHeight={80}
                    time={5500}
                    totalDuration={6000}
                    color={ThemingParameters.sapChart_OrderedColor_8}
                  />
                </>
              }
            />
          </>
        }
      />
    );
  },
};

export const WithMoreCustomization = {
  args: {
    dataset: dummyDataSet, totalDuration, showConnection, showAnnotation,
    unit: 'ms',
  },
};

export const LoadingPlaceholder = {
  render() {
    return <TimelineChart />;
  },
};
