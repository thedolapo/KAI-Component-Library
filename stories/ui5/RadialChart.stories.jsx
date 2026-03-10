import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  RadialChart
} from '@ui5/webcomponents-react-charts';
import { FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, Text } from '@ui5/webcomponents-react';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const meta = {
  title: 'UI5 Components/Charts/Radial Chart', component: RadialChart,
  args: { displayValue: '50%', value: 50, maxValue: 100 },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-radialchart--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithCustomColor = {
  args: {
    color: '#f0ab00',
  },
};

export const MicroRadialCharts = {
  render: () => {
    return (
      <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} alignItems={FlexBoxAlignItems.Center}>
        <RadialChart
          value={50}
          style={{ height: '50px', width: '50px' }}
          chartConfig={{ innerRadius: '75%', margin: { top: 0, right: 0, bottom: 0, left: 0 } }}
          displayValue={'50%'}
          displayValueStyle={{
            fontSize: ThemingParameters.sapFontSmallSize,
            fill: ThemingParameters.sapChart_OrderedColor_1,
          }}
        />
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <RadialChart
            value={50}
            style={{ width: '25px', height: '25px' }}
            chartConfig={{ innerRadius: '70%', margin: { top: 0, right: 0, bottom: 0, left: 0 } }}
          />
          <Text>50%</Text>
        </FlexBox>
        <FlexBox alignItems={FlexBoxAlignItems.Center}>
          <RadialChart
            value={50}
            style={{ height: '16px', width: '16px' }}
            chartConfig={{ innerRadius: '75%', margin: { top: 0, right: 0, bottom: 0, left: 0 } }}
          />
          <Text style={{ fontSize: ThemingParameters.sapFontSmallSize }}>50%</Text>
        </FlexBox>
      </FlexBox>
    );
  },
};
