import React, { useState, useEffect, useRef } from 'react';
import {
  DateTimePicker
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';
import CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';

const meta = {
  title: 'UI5 Components/Date Time Picker',
  component: DateTimePicker,
  argTypes: {
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    primaryCalendarType: CalendarType.Gregorian,
    valueState: ValueState.None,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=194619:6583',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-datetimepicker--default)',
      },
    },
  },
};

export default meta;

export const Default = {};
