import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Avatar,
  Label,
  Timeline,
  TimelineGroupItem,
  TimelineItem
} from '@ui5/webcomponents-react';
import calendarIcon from '@ui5/webcomponents-icons/dist/calendar.js';
import phoneIcon from '@ui5/webcomponents-icons/dist/phone.js';

const meta = {
  title: 'UI5 Components/Timeline', component: Timeline,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-timeline--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render: (args) => {
    return (
      <Timeline {...args}>
        <TimelineItem titleText="Schedule Call" subtitleText="2019/01/01" icon={phoneIcon} name={`John Smith`} />
        <TimelineItem titleText="Weekly Sync - CP Design" subtitleText="2019/01/02" icon={calendarIcon}>
          <div>MR SOF02 2.43</div>
        </TimelineItem>
      </Timeline>
    );
  },
};

export const WithGroups = {
  render: (args) => {
    return (
      <Timeline {...args}>
        <TimelineGroupItem groupName="Events">
          <TimelineItem titleText="Event" subtitleText="18.06.2024 11:30" name="SAP D-com" />
          <TimelineItem titleText="Event" subtitleText="19.06.2024 12:30" icon={calendarIcon} name="SAP Talk" />
          <TimelineItem titleText="Event" subtitleText="21.06.2024 18:30" name="SAP iXP Summer Party" />
        </TimelineGroupItem>

        <TimelineGroupItem groupName="Meetings">
          <TimelineItem
            titleText="coming up"
            subtitleText="10.07.2024 11:30"
            icon={calendarIcon}
            name="Team Balkan Meeting"
          />
          <TimelineItem
            titleText="coming up"
            subtitleText="20.08.2024 12:30"
            icon={calendarIcon}
            name="Team Balkan Planning"
          />
          <TimelineItem
            titleText="coming up"
            subtitleText="22.08.2024 14:30"
            icon={calendarIcon}
            name="Team Balkan Retrospective"
          />
        </TimelineGroupItem>
        <TimelineGroupItem groupName="Calls">
          <TimelineItem
            titleText="made group call"
            subtitleText="20.09.2024 11:30"
            icon={phoneIcon}
            name="John Doe"
            nameClickable
          />
          <TimelineItem subtitleText="20.09.2024 12:30" name="John Doe" nameClickable>
            <Avatar initials="JD"></Avatar>
            <Label>Has ended the call</Label>
          </TimelineItem>
        </TimelineGroupItem>
      </Timeline>
    );
  },
};
