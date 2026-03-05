import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  AnalyticalTable,
  Icon,
  IndicationColor,
  Label,
  List,
  ListItemCustom,
  ObjectStatus,
  Table,
  TableCell,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableSelectionSingle,
  Text
} from '@ui5/webcomponents-react';
import IconMode from '@ui5/webcomponents/dist/types/IconMode.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import cancelIcon from '@ui5/webcomponents-icons/dist/sys-cancel.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

const meta = {
  title: 'UI5 Components/Object Status', component: ObjectStatus,
  argTypes: {
    children: { control: 'text' },
    icon: { control: { disable: true } },
  },
  args: {
    state: ValueState.None,
    children: 'ObjectStatus', showDefaultIcon,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-objectstatus--default)',
      },
    },
  },
};

export default meta;

export const Default = {};

export const WithDefaultIcons = {
  render: function () {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
          rowGap: '1rem',
          columnGap: '1rem',
        }}
      >
        <ObjectStatus showDefaultIcon state={ValueState.None}>
          ValueState.None
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Positive}>
          ValueState.Positive
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Critical}>
          ValueState.Critical
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Negative}>
          ValueState.Negative
        </ObjectStatus>
        <ObjectStatus showDefaultIcon state={ValueState.Information}>
          ValueState.Information
        </ObjectStatus>
      </div>
    );
  },
};

export const WithCustomIcon = {
  args: { icon: <Icon name={cancelIcon} mode={IconMode.Decorative} /> },
};

export const WithIconOnly = {
  args: { icon: <Icon name={cancelIcon} mode={IconMode.Decorative} />, children, title: 'Cancel' },
};

const States = { ...ValueState, ...IndicationColor };
export const InvertedObjectStatus = {
  name: 'All States',
  render() {
    const renderStatuses = (interactive = false, inverted = false) => {
      return Object.values(States).map((state) => {
        const indicationNumber = parseInt(state.replace('Indication', ''), 10);
        if (!inverted && !isNaN(indicationNumber) && indicationNumber > 10) {
          return null;
        }
        return (
          <ObjectStatus
            key={`${state}-${interactive ? 'interactive' : ''}-${inverted ? 'inverted' : ''}`}
            interactive={interactive}
            inverted={inverted}
            state={state}
            showDefaultIcon
          >
            {state}
          </ObjectStatus>
        );
      });
    };
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, minmax(0, 1fr)',
          rowGap: '1rem',
          columnGap: '1rem',
        }}
      >
        <Label style={{ gridColumn: 'span 5' }}>Standard mode:</Label>
        {renderStatuses()}
        <Label style={{ gridColumn: 'span 5' }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true)}
        <div style={{ gridColumn: 'span 5', borderBlockStart: `1px solid ${ThemingParameters.sapList_BorderColor}` }} />
        <Text
          style={{
            gridColumn: 'span 5',
            fontFamily: ThemingParameters.sapFontBoldFamily,
            fontSize: ThemingParameters.sapFontLargeSize,
          }}
        >
          Inverted
        </Text>
        <Label
          style={{
            gridColumn: 'span 5',
          }}
        >
          The ObjectStatus has an inverted visualisation, which is used in cases when the information is crucial for the
          user’s actions and needs to stand out visually.
        </Label>
        <Label style={{ gridColumn: 'span 5' }}>Standard mode:</Label>
        {renderStatuses(false, true)}
        <Label style={{ gridColumn: 'span 5' }}>
          <code>interactive</code> mode:
        </Label>
        {renderStatuses(true, true)}
      </div>
    );
  },
};

const atData = [{ os1: 'ObjectStatus', os2: 'ObjectStatus' }];

export const InListOrTable = {
  args: { state: 'Positive', inverted: false },
  argTypes: { inverted: { control: false, table: { disable: false } } },
  render(args) {
    const atCols = useMemo(
      () => [
        {
          accessor: 'os1',
          Header: 'ObjectStatus (controllable)',
          Cell: () => <ObjectStatus {...args} />,
        },
        {
          accessor: 'os2',
          Header: 'ObjectStatus ("Negative")',
          Cell: () => <ObjectStatus {...args} state={'Negative'} />,
        },
      ],
      [args],
    );
    return (
      <>
        Table
        <Table
          headerRow={
            <TableHeaderRow>
              <TableHeaderCell>ObjectStatus (controllable)</TableHeaderCell>
              <TableHeaderCell>ObjectStatus ("Negative")</TableHeaderCell>
            </TableHeaderRow>
          }
          features={<TableSelectionSingle behavior={'RowOnly'} />}
        >
          <TableRow rowKey={'0'} className={'interactive-table-row'}>
            <TableCell>
              <ObjectStatus {...args} className={'object-status'} />
            </TableCell>
            <TableCell>
              <ObjectStatus {...args} className={'object-status'} state={'Negative'} />
            </TableCell>
          </TableRow>
        </Table>
        <hr />
        List
        <List selectionMode="Single">
          <ListItemCustom className={'interactive-li'}>
            <ObjectStatus {...args} className={'object-status'} />
          </ListItemCustom>
        </List>
        <hr />
        AnalyticalTable
        <AnalyticalTable
          data={atData}
          columns={atCols}
          minRows={1}
          selectionMode={'Single'}
          selectionBehavior={'RowOnly'}
        />
      </>
    );
  },
};
