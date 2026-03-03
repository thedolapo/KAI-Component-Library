/**
 * UI5 Components/File Uploader
 * Figma: File Uploader — node-id 175454:1329
 */

import React from 'react';
import { FileUploader, Button, Label } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=175454:1329';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-fileuploader--default';

export default {
  title: 'UI5 Components/File Uploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'A file upload trigger that wraps any content (typically a Button) to open the file picker. ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    valueState: {
      control: { type: 'select' },
      options: ['None', 'Error', 'Warning', 'Success', 'Information'],
    },
  },
  args: {
    accept: '*',
    multiple: false,
    disabled: false,
    valueState: 'None',
  },
};

export const Default = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
      <Label>Upload Document</Label>
      <FileUploader {...args}>
        <Button icon="upload">Choose File</Button>
      </FileUploader>
    </div>
  ),
};

export const MultipleFiles = {
  name: 'Multiple Files',
  args: { multiple: true, accept: '.pdf,.docx,.xlsx' },
  render: (args) => (
    <FileUploader {...args}>
      <Button icon="upload" design="Emphasized">Upload Files</Button>
    </FileUploader>
  ),
};
