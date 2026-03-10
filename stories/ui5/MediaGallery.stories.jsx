import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MediaGallery,
  MediaGalleryItem,
  Toast
} from '@ui5/webcomponents-react';
import MediaGalleryLayout from '@ui5/webcomponents-fiori/dist/types/MediaGalleryLayout.js';
import MediaGalleryMenuHorizontalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuHorizontalAlign.js';
import MediaGalleryMenuVerticalAlign from '@ui5/webcomponents-fiori/dist/types/MediaGalleryMenuVerticalAlign.js';

const meta = {
  title: 'UI5 Components/Media Gallery', component: MediaGallery,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    layout: MediaGalleryLayout.Auto,
    menuHorizontalAlign: MediaGalleryMenuHorizontalAlign.Left,
    menuVerticalAlign: MediaGalleryMenuVerticalAlign.Bottom,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-mediagallery--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <MediaGallery {...args}>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1022.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-1030.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-2002.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem>
          <img src="https://ui5.github.io/webcomponents/images/HT-2026.jpg" alt="Example Image" />
        </MediaGalleryItem>
      </MediaGallery>
    );
  },
};

export const CustomThumbnail = {
  render: (args) => {
    return (
      <MediaGallery {...args}>
        <MediaGalleryItem thumbnail={<img src="https://ui5.github.io/webcomponents/images/HT-1000-small.jpg" />}>
          <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
        </MediaGalleryItem>
        <MediaGalleryItem disabled>
          <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
        </MediaGalleryItem>
      </MediaGallery>
    );
  },
};

export const InteractiveDisplayArea = {
  render: (args) => {
    const ref = useRef(null);
    const handleDisplayAreaClick = () => {
      ref.current.show();
    };
    return (
      <>
        <Toast ref={ref}>Display Area Clicked!</Toast>
        <MediaGallery {...args} interactiveDisplayArea onDisplayAreaClick={handleDisplayAreaClick}>
          <MediaGalleryItem>
            <img src="https://ui5.github.io/webcomponents/images/HT-1000.jpg" alt="Example Image" />
          </MediaGalleryItem>
          <MediaGalleryItem selected>
            <img src="https://ui5.github.io/webcomponents/images/HT-1010.jpg" alt="Example Image" />
          </MediaGalleryItem>
        </MediaGallery>
      </>
    );
  },
};
