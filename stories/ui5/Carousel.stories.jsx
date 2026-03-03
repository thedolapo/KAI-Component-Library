import React, { useState, useEffect, useRef } from 'react';
import {
  Carousel
} from '@ui5/webcomponents-react';
import CarouselArrowsPlacement from '@ui5/webcomponents/dist/types/CarouselArrowsPlacement.js';

const meta = {
  title: 'UI5 Components/Carousel',
  component: Carousel,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    arrowsPlacement: CarouselArrowsPlacement.Content,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=24267:10384',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-carousel--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    return (
      <Carousel {...args}>
        <img src="https://ui5.github.io/webcomponents/images/sample1.jpg" alt="img-sample 1" />
        <img src="https://ui5.github.io/webcomponents/images/sample2.jpg" alt="img-sample 2" />
        <img src="https://ui5.github.io/webcomponents/images/sample3.jpg" alt="img-sample 3" />
      </Carousel>
    );
  },
};
