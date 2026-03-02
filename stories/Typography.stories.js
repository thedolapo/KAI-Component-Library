import { Typography } from './Typography';

const WEIGHT_OPTIONS = {
  Light:           300,
  Regular:         400,
  Semibold:        600,
  Bold:            700,
  Black:           900,
};

export default {
  title: 'Design System/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The KAI typography system built on the 72 typeface — SAP\'s design system font. ' +
          'All size tokens are sourced from the KlarioHorizon Figma variables. ' +
          'Includes 10 weight/style variants: Light, Regular, Semibold, Semibold Duplex, ' +
          'Bold, Black, Italic, Bold Italic, Condensed, and Condensed Bold.',
      },
    },
  },
  argTypes: {
    previewWeight: {
      control: { type: 'select' },
      options: Object.values(WEIGHT_OPTIONS),
      mapping: WEIGHT_OPTIONS,
      description: 'Font weight used for the Type Scale preview column',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '400' },
      },
    },
  },
  args: {
    previewWeight: 400,
  },
};

export const Default = {
  name: 'Type Scale & Weights',
  args: { previewWeight: 400 },
  parameters: {
    docs: {
      description: {
        story:
          'Full typography reference: type scale with size tokens, all 10 font weight/style ' +
          'variants, and a paragraph specimen at body size. Use the Controls panel to change ' +
          'the weight shown in the scale preview.',
      },
    },
  },
};
