import React, { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  CalendarLegend,
  CalendarLegendItem,
  SpecialCalendarDate
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';
import CalendarLegendItemType from '@ui5/webcomponents/dist/types/CalendarLegendItemType.js';
import CalendarSelectionMode from '@ui5/webcomponents/dist/types/CalendarSelectionMode.js';
import CalendarType from '@ui5/webcomponents-base/dist/types/CalendarType.js';

const meta = {
  title: 'UI5 Components/Calendar',
  component: Calendar,
  argTypes: {
    children: { control: { disable: true } },
    specialDates: { control: { disable: true } },
  },
  args: {
    primaryCalendarType: CalendarType.Gregorian,
    selectionMode: CalendarSelectionMode.Single,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=12845:11140',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-calendar--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

const currentDate = new Date();
const firstDayOfTheMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const yearMonthString = `${firstDayOfTheMonth.getFullYear()}-${(firstDayOfTheMonth.getMonth() + 1).toString().padStart(2, '0')}-`;
const firstDateOfMonthString = `${yearMonthString}${firstDayOfTheMonth.getDate()}`;

export const SpecialDate = {
  args: {
    specialDates: <SpecialCalendarDate type={CalendarLegendItemType.Type01} value={firstDateOfMonthString} />,
  },
};

export const CalendarLegendStory = {
  name: 'CalendarLegend',
  args: {
    calendarLegend: (
      <CalendarLegend>
        <CalendarLegendItem text="Vacation" type={CalendarLegendItemType.Type05} />
        <CalendarLegendItem text="School Vacation" type={CalendarLegendItemType.Type07} />
        <CalendarLegendItem text="Wedding" type={CalendarLegendItemType.Type13} />
      </CalendarLegend>
    ),
    specialDates: (
      <>
        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}01`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}02`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type05} value={`${yearMonthString}03`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}11`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}12`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type07} value={`${yearMonthString}13`} />
        <SpecialCalendarDate type={CalendarLegendItemType.Type13} value={`${yearMonthString}26`} />
      </>
    ),
  },
};
