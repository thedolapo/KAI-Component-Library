import { ComponentMap } from './ComponentMap';

export default {
  title: 'Design System/Component Map',
  component: ComponentMap,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Reference table showing how the Klario Figma library maps to ' +
          '`@ui5/webcomponents-react`. 60 shared components, 32 Klario-unique, 41 UI5-unique. ' +
          'Use this to find the correct story when building features.',
      },
    },
  },
};

export const Default = {
  name: 'Component Map',
};
