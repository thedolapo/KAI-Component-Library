import { Charts } from './Charts';

const MODES = [
  'Klario',
  'Morning Horizon',
  'Evening Horizon',
  'High Contrast White',
  'High Contrast Black',
];

export default {
  title: 'Design System/Charts',
  component: Charts,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'DonutChart from `@ui5/webcomponents-react-charts` themed with KAI colour tokens. ' +
          'Demonstrates both the 12-colour ordered palette and the 4-colour semantic (good/bad/critical/neutral) palette. ' +
          'Chart colours are CSS variable references — they update automatically when the theme changes. ' +
          '[→ UI5 React Charts docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/charts-donutchart--default)',
      },
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: MODES,
      description: 'KAI theme mode',
      table: { defaultValue: { summary: 'Klario' } },
    },
  },
  args: {
    mode: 'Klario',
  },
};

export const Default = {
  name: 'Donut Chart',
  args: { mode: 'Klario' },
};
