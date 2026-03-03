import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  FileUploader
} from '@ui5/webcomponents-react';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const meta = {
  title: 'UI5 Components/File Uploader',
  component: FileUploader,
  argTypes: {
    children: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=175454:1329',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-fileuploader--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithButton = {
  render(args) {
    return (
      <FileUploader {...args}>
        <Button>Upload single file</Button>
      </FileUploader>
    );
  },
};

export const WithHiddenInput = {
  render(args) {
    return (
      <FileUploader {...args} hideInput>
        <Button>Upload single file</Button>
      </FileUploader>
    );
  },
};
