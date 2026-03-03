/**
 * UI5 Components/Form + Form Item
 * Figma: Form — node-id 237212:14308 | Form Item — node-id 158030:454
 */

import React from 'react';
import { Form, FormGroup, FormItem, Label, Input, Select, Option, CheckBox } from '@ui5/webcomponents-react';

const FIGMA_FORM =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=237212:14308';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-form--default';

export default {
  title: 'UI5 Components/Form',
  component: Form,
  parameters: {
    layout: 'padded',
    design: { type: 'figma', url: FIGMA_FORM },
    docs: {
      description: {
        component:
          'A structured form layout with labels and field pairs. Use `FormGroup` to segment related fields. ' +
          'Each field is wrapped in `FormItem` (Klario: Form Item). ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
  argTypes: {
    columnsL: { control: { type: 'number', min: 1, max: 4 } },
    columnsM: { control: { type: 'number', min: 1, max: 3 } },
    columnsXL: { control: { type: 'number', min: 1, max: 6 } },
  },
  args: {
    columnsL: 2,
    columnsM: 1,
    columnsXL: 3,
  },
};

export const Default = {
  render: (args) => (
    <Form
      {...args}
      titleText="Personal Details"
      style={{ maxWidth: 720 }}
    >
      <FormGroup titleText="Contact Information">
        <FormItem label={<Label required>First Name</Label>}>
          <Input placeholder="Enter first name" required />
        </FormItem>
        <FormItem label={<Label required>Last Name</Label>}>
          <Input placeholder="Enter last name" required />
        </FormItem>
        <FormItem label={<Label>Email Address</Label>}>
          <Input placeholder="name@company.com" type="Email" />
        </FormItem>
        <FormItem label={<Label>Phone</Label>}>
          <Input placeholder="+1 000 000 0000" type="Tel" />
        </FormItem>
      </FormGroup>

      <FormGroup titleText="Preferences">
        <FormItem label={<Label>Department</Label>}>
          <Select style={{ width: '100%' }}>
            <Option>Design</Option>
            <Option>Engineering</Option>
            <Option>Product</Option>
            <Option>Marketing</Option>
          </Select>
        </FormItem>
        <FormItem label={<Label>Newsletter</Label>}>
          <CheckBox text="Subscribe to product updates" />
        </FormItem>
      </FormGroup>
    </Form>
  ),
};
