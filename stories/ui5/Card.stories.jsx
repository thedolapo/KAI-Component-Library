import React, { useState, useEffect, useRef } from 'react';
import {
  AnalyticalCardHeader,
  Card,
  CardHeader,
  DeviationIndicator,
  Icon,
  List,
  ListItemStandard,
  NumericSideIndicator,
  ValueColor
} from '@ui5/webcomponents-react';
import personIcon from '@ui5/webcomponents-icons/dist/person-placeholder.js';
import { LineChart } from '@ui5/webcomponents-react-charts';

const meta = {
  title: 'UI5 Components/Card',
  component: Card,
  argTypes: {
    header: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  args: {
    style: { width: '300px' },
    header: (
      <CardHeader
        titleText="TeamSpace"
        subtitleText="Direct Reports"
        additionalText={'3 of 5'}
        avatar={<Icon name={personIcon} />}
      />
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=208913:4166',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-card--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <Card {...args}>
        <List>
          <ListItemStandard description="Software Architect" text="Richard Wilson" />
          <ListItemStandard description="Visual Designer" text="Elena Petrova" />
          <ListItemStandard description="Quality Specialist" text="John Miller" />
        </List>
      </Card>
    );
  },
};

const simpleDataSet = [
  {
    name: 'January',
    users: 76,
  },
  {
    name: 'February',
    users: 230,
  },
  {
    name: 'March',
    users: 240,
  },
  {
    name: 'April',
    users: 280,
  },
  {
    name: 'May',
    users: 100,
  },
];

export const WithAnalyticalCardHeader = {
  render: () => {
    return (
      <Card
        header={
          <AnalyticalCardHeader
            titleText="Project Cloud Transformation"
            subtitleText="Revenue"
            unitOfMeasurement="EUR"
            trend={DeviationIndicator.Down}
            value="65.34"
            state={ValueColor.Error}
            scale="K"
            description="Q1, 2018"
          >
            <NumericSideIndicator titleText="Target" number="100" unit="k" />
            <NumericSideIndicator titleText="Deviation" number="34.7" unit="%" state={ValueColor.Critical} />
          </AnalyticalCardHeader>
        }
      >
        <LineChart
          className="chromatic-ignore"
          noLegend
          dimensions={[{ accessor: 'name' }]}
          measures={[{ accessor: 'users', formatter: (val) => `${val}k` }]}
          dataset={simpleDataSet}
        />
      </Card>
    );
  },
};
