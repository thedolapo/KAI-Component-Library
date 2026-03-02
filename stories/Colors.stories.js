import { Colors } from './Colors';

const MODES = [
  'Klario',
  'Morning Horizon',
  'Evening Horizon',
  'High Contrast White',
  'High Contrast Black',
];

export default {
  title: 'Design System/Colors',
  component: Colors,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'All 919 KAI design system color tokens from the KlarioHorizon collection, ' +
          'grouped into 9 logical sections. Use the in-component theme switcher to ' +
          'preview colors across all 5 modes. Click any swatch to copy its HSL value ' +
          'to the clipboard. CSS custom properties are available via `src/tokens/colors.css`.',
      },
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: MODES,
      description:
        'Sets the initial theme mode. The in-component segmented switcher can override ' +
        'this interactively without reloading the story.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Klario' },
      },
    },
  },
  args: {
    mode: 'Klario',
  },
};

export const Default = {
  name: 'All Color Tokens',
  args: {
    mode: 'Klario',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Full color palette across all 9 groups. Use the segmented mode switcher ' +
          'at the top to switch between the 5 design themes. Click any swatch to ' +
          'copy its HSL value to the clipboard.',
      },
    },
  },
};
