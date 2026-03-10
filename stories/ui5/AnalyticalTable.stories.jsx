import React, { useState, useEffect, useRef, useCallback, useReducer, useMemo } from 'react';
import {
  AnalyticalTable,
  AnalyticalTablePopinDisplay,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionBehavior,
  AnalyticalTableSelectionMode,
  AnalyticalTableVisibleRowCountMode,
  Button,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  IllustratedMessage,
  Label,
  MultiComboBox,
  MultiComboBoxItem,
  ObjectStatus,
  Option,
  SegmentedButton,
  SegmentedButtonItem,
  Select,
  Tag,
  Text,
  TextAlign,
  ToggleButton
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents-icons/dist/delete.js';
import '@ui5/webcomponents-icons/dist/edit.js';
import '@ui5/webcomponents-icons/dist/settings.js';

const names = ['Carl', 'Dan', 'Rose', 'Susanne', 'Lisa', 'Tom', 'Anna', 'Mark', 'Julia', 'Mike'];
const generateData = (count) =>
  Array.from({ length: count }, (_, i) => ({
    name: `${names[i % names.length]} ${i + 1}`,
    age: 20 + (i % 40),
    friend: {
      name: `${names[(i + 3) % names.length]} ${i + 2}`,
      age: 18 + (i % 50),
    },
    status: i % 3 === 0 ? 'Success' : i % 3 === 1 ? 'Warning' : 'Error',
  }));

const dataLarge = generateData(200);

const dataTree = [
  {
    name: 'Root 1', age: 40, friend: { name: 'Friend A', age: 30 }, status: 'Success',
    subRows: [
      { name: 'Child 1.1', age: 20, friend: { name: 'Friend B', age: 25 }, status: 'Warning' },
      {
        name: 'Child 1.2', age: 22, friend: { name: 'Friend C', age: 28 }, status: 'Error',
        subRows: [
          { name: 'Grandchild 1.2.1', age: 10, friend: { name: 'Friend D', age: 12 }, status: 'Success' },
        ],
      },
    ],
  },
  {
    name: 'Root 2', age: 45, friend: { name: 'Friend E', age: 35 }, status: 'Warning',
    subRows: [
      { name: 'Child 2.1', age: 25, friend: { name: 'Friend F', age: 30 }, status: 'Success' },
    ],
  },
  {
    name: 'Root 3', age: 50, friend: { name: 'Friend G', age: 40 }, status: 'Error',
    subRows: [],
  },
];

const meta = {
  title: 'UI5 Components/Analytical Table', component: AnalyticalTable,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/data-display-analyticaltable--default)',
      },
    },
    chromatic: { disableSnapshot: true },
  },
  args: {
    data: dataLarge,
    columns: [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age', hAlign: 'End' },
      { Header: 'Friend Name', accessor: 'friend.name' },
      { Header: 'Friend Age', accessor: 'friend.age', hAlign: 'End' },
    ],
    highlightField: 'status',
    subRowsKey: 'subRows',
    visibleRows: 15,
    onTableScroll: undefined,
  },
  argTypes: {
    data: { control: { disable: true } },
    columns: { control: { disable: true } },
    tableHooks: { control: { disable: true } },
    NoDataComponent: { control: { disable: true } },
    extension: { control: { disable: true } },
    tableInstance: { control: { disable: true } },
    header: { control: { disable: true } },
    highlightField: { control: { type: 'text' } },
    groupBy: { control: { disable: true } },
    columnOrder: { control: { disable: true } },
  },
};
export default meta;

const ToggleableTable = (args) => {
  const [visible, toggle] = useReducer((prev) => !prev, false);
  return (
    <>
      <Button onClick={toggle}>{visible ? 'Hide' : 'Show'} Example</Button>
      {visible && <AnalyticalTable {...args} />}
    </>
  );
};

export const Default = {};

export const TreeTable = {
  args: {
    data: dataTree,
    isTreeTable: true,
  },
  render(args, context) {
    const { viewMode } = context;
    return viewMode === 'story' ? <AnalyticalTable {...args} /> : <ToggleableTable {...args} />;
  },
};

export const InfiniteScrolling = {
  args: {
    infiniteScroll: true,
    infiniteScrollThreshold: 20,
    loadingDelay: 1000,
    header: 'Scroll to load more data',
    reactTableOptions: { autoResetSelectedRows: false },
  },
  render: (args, context) => {
    const [data, setData] = useState(args.data.slice(0, 50));
    const [loading, setLoading] = useState(false);
    const offset = useRef(50);
    const onLoadMore = () => {
      setLoading(true);
    };
    useEffect(() => {
      if (loading) {
        setTimeout(() => {
          setData((prev) => [...prev, ...args.data.slice(offset.current, offset.current + 50)]);
          setLoading(false);
          offset.current += 50;
        }, 2000);
      }
    }, [loading, args.data, offset.current]);
    return context.viewMode === 'story' ? (
      <AnalyticalTable {...args} data={data} onLoadMore={onLoadMore} loading={loading} />
    ) : (
      <ToggleableTable {...args} data={data} onLoadMore={onLoadMore} loading={loading} />
    );
  },
};

export const Subcomponents = {
  render: (args, context) => {
    const renderRowSubComponent = (row) => {
      if (row.id === '0') {
        return (
          <FlexBox
            style={{ backgroundColor: 'lightblue', height: '300px' }}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            direction={FlexBoxDirection.Column}
          >
            <Tag>height: 300px</Tag>
            <Text>This subcomponent will only be displayed below the first row.</Text>
            <hr />
            <Text>
              The button below is rendered with `data-subcomponent-active-element` attribute to ensure consistent focus
              behavior
            </Text>
            <Button data-subcomponent-active-element>Click</Button>
          </FlexBox>
        );
      }
      if (row.id === '1') {
        return (
          <FlexBox
            style={{ backgroundColor: 'lightyellow', height: '100px' }}
            justifyContent={FlexBoxJustifyContent.Center}
            alignItems={FlexBoxAlignItems.Center}
            direction={FlexBoxDirection.Column}
          >
            <Tag>height: 100px</Tag>
            <Text>This subcomponent will only be displayed below the second row.</Text>
          </FlexBox>
        );
      }
      if (row.id === '2') {
        return null;
      }
      return (
        <FlexBox
          style={{ backgroundColor: 'lightgrey', height: '50px' }}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          direction={FlexBoxDirection.Column}
        >
          <Tag>height: 50px</Tag>
          <Text>This subcomponent will be displayed below all rows except the first, second and third.</Text>
        </FlexBox>
      );
    };
    return context.viewMode === 'story' ? (
      <AnalyticalTable {...args} renderRowSubComponent={renderRowSubComponent} />
    ) : (
      <ToggleableTable {...args} renderRowSubComponent={renderRowSubComponent} />
    );
  },
};

export const DynamicRowCount = {
  args: { visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Auto, containerHeight: 250 },
  argTypes: {
    containerHeight: {
      options: [250, 500, 750, 1000],
      control: { type: 'radio' },
      description:
        'Select an option to change the height of the surrounding container of the table (in `px`).',
    },
  },
  render: (args, context) => {
    const [data, setData] = useState(args.data);
    const handleClick = () => {
      setData((prev) => {
        if (prev.length > 4) {
          return args.data.slice(0, 4);
        } else {
          return args.data;
        }
      });
    };
    return (
      <>
        <Button onClick={handleClick}>Toggle Number of Rows</Button>
        <br />
        <Text>Number of visible rows: {data.length}</Text>
        <hr />
        <div style={{ height: `${args.containerHeight}px` }}>
          {context.viewMode === 'story' ? (
            <AnalyticalTable
              {...args}
              data={data}
              visibleRowCountMode={args.visibleRowCountMode}
              header={`Current height: ${args.containerHeight}px`}
            />
          ) : (
            <ToggleableTable
              {...args}
              data={data}
              visibleRowCountMode={args.visibleRowCountMode}
              header={`Current height: ${args.containerHeight}px`}
            />
          )}
        </div>
      </>
    );
  },
};

export const NavigationIndicator = {
  args: { withNavigationHighlight: true, selectionMode: AnalyticalTableSelectionMode.Multiple, data: dataLarge },
  render: (args, context) => {
    const [selectedRow, setSelectedRow] = useState();
    const onRowSelect = (e) => {
      setSelectedRow(e.detail.row);
    };
    const markNavigatedRow = useCallback(
      (row) => {
        return selectedRow?.id === row.id;
      },
      [selectedRow],
    );
    return context.viewMode === 'story' ? (
      <AnalyticalTable {...args} markNavigatedRow={markNavigatedRow} onRowSelect={onRowSelect} />
    ) : (
      <ToggleableTable {...args} markNavigatedRow={markNavigatedRow} onRowSelect={onRowSelect} />
    );
  },
};

export const NoData = {
  render(args, context) {
    const [selected, setSelected] = useState('noData');
    const [filtered, setFiltered] = useState(false);
    const handleChange = (e) => {
      const { key } = e.detail.selectedItems[0].dataset;
      setSelected(key);
      if (key === 'data') {
        setFiltered(false);
      }
    };
    const handleClick = (e) => {
      setFiltered(!!e.target.pressed);
    };

    const NoDataComponent = selected === 'noData'
        ? undefined
        : (props) => {
            return filtered ? (
              <IllustratedMessage role={props.accessibleRole} name="NoFilterResults" />
            ) : (
              <IllustratedMessage role={props.accessibleRole} name="NoData" />
            );
          };

    const tableProps = {
      ...args,
      data: selected === 'data' ? args.data : [],
      globalFilterValue: filtered ? 'Non-existing text' : undefined,
      NoDataComponent: NoDataComponent,
    };

    const isAutoRowCount = args.visibleRowCountMode?.startsWith('Auto');

    return (
      <>
        <SegmentedButton onSelectionChange={handleChange} accessibleName="Select data view mode">
          <SegmentedButtonItem selected={selected === 'noData'} data-key="noData">
            Default NoData Component
          </SegmentedButtonItem>
          <SegmentedButtonItem selected={selected === 'illustratedMessage'} data-key="illustratedMessage">
            IllustratedMessage NoData Component
          </SegmentedButtonItem>
          <SegmentedButtonItem selected={selected === 'data'} data-key="data">
            With Data
          </SegmentedButtonItem>
        </SegmentedButton>{' '}
        |{' '}
        <ToggleButton onClick={handleClick} pressed={filtered} disabled={selected === 'data'}>
          Table filtered
        </ToggleButton>
        {context.viewMode === 'story' ? (
          <div style={{ height: isAutoRowCount ? '300px' : 'auto' }}>
            <AnalyticalTable {...tableProps} />
          </div>
        ) : (
          <>
            <hr />
            <div style={{ height: isAutoRowCount ? '300px' : 'auto' }}>
              <ToggleableTable {...tableProps} />
            </div>
          </>
        )}
      </>
    );
  },
};
