/**
 * UI5 Components/Calendar Date Types
 * Figma: Calendar Date Types — node-id 226745:7295
 */

import React from 'react';
import { Calendar, SpecialCalendarDate } from '@ui5/webcomponents-react';

const FIGMA_URL =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=226745:7295';
const UI5_DOCS =
  'https://ui5.github.io/webcomponents-react/v2/?path=/story/inputs-calendar--default';

export default {
  title: 'UI5 Components/Calendar Date Types',
  component: Calendar,
  parameters: {
    layout: 'centered',
    design: { type: 'figma', url: FIGMA_URL },
    docs: {
      description: {
        component:
          'Calendar with `SpecialCalendarDate` children to visually highlight specific dates with ' +
          'semantic types (Working, NonWorking, Today). ' +
          '[→ UI5 React docs](' + UI5_DOCS + ')',
      },
    },
  },
};

// Get current month first few days for demo
const today = new Date();
const formatDate = (d) => {
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
};

const getOffset = (n) => {
  const d = new Date(today);
  d.setDate(d.getDate() + n);
  return formatDate(d);
};

export const WithSpecialDates = {
  name: 'With Special Dates',
  render: () => (
    <Calendar>
      <SpecialCalendarDate type="Type01" value={getOffset(2)} />
      <SpecialCalendarDate type="Type02" value={getOffset(5)} />
      <SpecialCalendarDate type="Type03" value={getOffset(7)} />
      <SpecialCalendarDate type="NonWorking" value={getOffset(9)} />
    </Calendar>
  ),
};
