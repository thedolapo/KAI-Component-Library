import React, { useState, useEffect, useRef, useCallback } from 'react';
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

const kitchenSinkArgs = {
  data: dataLarge,
  columns: [
    {
      Header: 'Name', width,
      headerTooltip: 'Full Name', // A more extensive description!
      accessor: 'name', // String-based value accessors!
      autoResizable: true, // Double clicking the resize bar auto resizes the column!
    },
    {
      Header: 'Age',
      accessor: 'age', width, autoResizable,
      hAlign: TextAlign.End, disableGroupBy, disableSortBy, disableFilters,
      className: 'superCustomClass',
    },
    {
      Header: 'Friend Name',
      accessor: 'friend.name', width, autoResizable,
    },
    {
      Header: () => <span>Friend Age</span>,
      headerLabel: 'Custom Header Label',
      accessor: 'friend.age', autoResizable,
      hAlign: TextAlign.End,
      filter: (rows, accessor, filterValue) => {
        if (filterValue === 'all') {
          return rows;
        }
        if (filterValue === 'true') {
          return rows.filter((row) => row.values[accessor] >= 21);
        }
        return rows.filter((row) => row.values[accessor] < 21);
      },
      Filter: ({ column, popoverRef }) => {
        const handleChange = (event) => {
          // set filter
          column.setFilter(event.detail.selectedOption.getAttribute('value'));
          // close popover
          popoverRef.current.open = false;
        };
        return (
          <Select onChange={handleChange} style={{ width: '100%' }}>
            <Option value="all">Show All</Option>
            <Option value="true">Can Drink</Option>
            <Option value="false">Can't Drink</Option>
          </Select>
        );
      },
    },
    {
      Header: 'Status',
      id: 'os',
      Cell: (instance) => {
        const state = instance.row.index % 2 === 0 ? 'Positive' : 'Negative';
        return <ObjectStatus state={state}>{state}</ObjectStatus>;
      },
    },
    {
      id: 'actions',
      Header: 'Actions',
      accessor: '.', width, minWidth, disableResizing, disableGroupBy, disableFilters, disableSortBy,
      Cell: (instance) => {
        const { _cell, _row, webComponentsReactProperties } = instance;
        const { loading, showOverlay } = webComponentsReactProperties;
        // disable buttons if overlay is active or the table is loading, to prevent focus
        const disabled = loading || showOverlay;
        // console.log('This is your row data', row.original);
        return (
          <FlexBox>
            <Button icon="edit" disabled={disabled} accessibleName="Edit" />
            <Button icon="delete" disabled={disabled} accessibleName="Delete" />
          </FlexBox>
        );
      },
      cellLabel: ({ cell }) => {
        return `${cell.cellLabel} press TAB to focus active elements inside this cell`;
      },
    },
  ], filterable, alternateRowColor,
  columnOrder: ['friend.name', 'friend.age', 'name'],
  extension: (
    <FlexBox justifyContent={FlexBoxJustifyContent.End}>
      <Button icon="edit" accessibleName="edit" design="Transparent" />
    </FlexBox>
  ), groupable,
  header: 'Table Title', headerRowHeight, infiniteScroll, infiniteScrollThreshold, isTreeTable, loadingDelay, minRows,
  noDataText: "Custom 'noDataText' message", overscanCountHorizontal,
  scaleWidthMode: AnalyticalTableScaleWidthMode.Smart,
  selectedRowIds: { 3: true },
  selectionBehavior: AnalyticalTableSelectionBehavior.Row,
  selectionMode: AnalyticalTableSelectionMode.Single, sortable,
  subRowsKey: 'subRows',
  visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Interactive, visibleRows, withRowHighlight,
  // sb actions has a huge impact on performance here.
  onTableScroll: undefined,
};

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
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
        hAlign: 'End',
      },
      {
        Header: 'Friend Name',
        accessor: 'friend.name',
      },
      {
        Header: 'Friend Age',
        accessor: 'friend.age',
        hAlign: 'End',
      },
    ],
    highlightField: 'status',
    subRowsKey: 'subRows', visibleRows,
    // sb actions has a huge impact on performance here.
    onTableScroll: undefined,
  },
  argTypes: {
    data: { control: { disable: true } },
    columns: {
      control: { disable: true },
      description:
        'Defines the columns array where you can define the configuration for each column.<br />Please refer to the [AnalyticalTableColumnDefinition interface](#column-properties) for a full list of options.<br /><br /><b>Must be memoized!</b>',
    },
    tableHooks: { control: { disable: true } },
    NoDataComponent: { control: { disable: true } },
    extension: { control: { disable: true } },
    tableInstance: { control: { disable: true } },
    header: { control: { disable: true } },
    highlightField: {
      control: { type: 'text' },
    },
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
    data: dataTree, isTreeTable,
  },
  render(args, context) {
    const { viewMode } = context;
    return viewMode === 'story' ? <AnalyticalTable {...args} /> : <ToggleableTable {...args} />;
  },
};

export const InfiniteScrolling = {
  args: {
    infiniteScroll: true, infiniteScrollThreshold, loadingDelay,
    header: 'Scroll to load more data',
    reactTableOptions: { autoResetSelectedRows: false },
  },
  render: (args, context) => {
    const [data, setData] = useState(args.data.slice(0, 50));
    const [loading, setLoading] = useState(false);
    const offset = useRef(50);
    const onLoadMore = (e) => {
      args.onLoadMore(e);
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
      control: {
        type: 'radio',
      },
      description:
        'Select an option to change the height of the surrounding container of the table (in `px`). <br /> __Note__: This is not an actual prop of the table.',
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
              header={`Current height: ${args.containerHeight}px - Change the height in the table above`}
            />
          ) : (
            <ToggleableTable
              {...args}
              data={data}
              visibleRowCountMode={args.visibleRowCountMode}
              header={`Current height: ${args.containerHeight}px - Change the height in the table above`}
            />
          )}
        </div>
      </>
    );
  },
};

export const ResponsiveColumns = {
  args: {
    visibleRowCountMode: AnalyticalTableVisibleRowCountMode.Fixed,
    containerWidth: 'auto', data, adjustTableHeightOnPopIn,
    columns: [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        disableSortBy: true, responsivePopIn, responsiveMinWidth,
        PopInHeader: 'Custom Header Text (age)',
        Header: 'Age',
        accessor: 'age',
      },
      {
        disableSortBy: true, responsivePopIn, responsiveMinWidth,
        Header: 'Friend Name',
        PopInHeader: (instance) => {
          return <div style={{ color: 'red' }}>Friend Name (custom)</div>;
        },
        accessor: 'friend.name',
      },
      { disableSortBy: true, responsiveMinWidth, Header: 'Friend Age', accessor: 'friend.age' },
      {
        disableSortBy: true, responsivePopIn, responsiveMinWidth,
        id: 'actions',
        Header: 'Actions', width, disableResizing,
        Cell: (instance) => {
          return (
            <FlexBox>
              <Button icon="edit" />
              <Button icon="delete" />
            </FlexBox>
          );
        },
      },
      {
        id: 'popinDisplay',
        Header: 'PopinDisplay Modes', responsivePopIn, responsiveMinWidth,
        popinDisplay: AnalyticalTablePopinDisplay.Block,
        Cell: () => {
          return <Text maxLines={1}>Using popinDisplay: 'Block'</Text>;
        },
      },
    ],
  },
  argTypes: {
    containerWidth: {
      options: [400, 600, 800, 'auto'],
      control: {
        type: 'radio',
      },
      description:
        'Select an option to change the width of the surrounding container of the table (in `px`). <br /> __Note__: This is not a prop of the table.',
    },
  },
  render: (args, context) => {
    const [columns, setColumns] = useState(args.columns);
    const [popinDisplay, setPopinDisplay] = useState(
      AnalyticalTablePopinDisplay.Block,
    );
    const { containerWidth: _0, ...tableArgs } = args;

    useEffect(() => {
      setColumns((prev) => {
        return [
          ...prev.slice(0, -1),
          {
            id: 'popinDisplay',
            Header: 'PopinDisplay Modes', responsivePopIn, responsiveMinWidth, popinDisplay,
            Cell: () => {
              return <Text maxLines={1}>Using popinDisplay: {popinDisplay}</Text>;
            },
          },
        ];
      });
    }, [popinDisplay]);

    return (
      <div
        style={{
          width: args.containerWidth && typeof args.containerWidth === 'number' ? `${args.containerWidth}px` : 'auto',
        }}
      >
        <Label showColon style={{ marginInlineEnd: '0.5rem' }}>
          Change <code>popinDisplay</code> of last column
        </Label>
        <Select
          onChange={(e) => {
            setPopinDisplay(e.detail.selectedOption.textContent);
          }}
        >
          <Option selected={popinDisplay === AnalyticalTablePopinDisplay.Block}>Block</Option>
          <Option selected={popinDisplay === AnalyticalTablePopinDisplay.Inline}>Inline</Option>
          <Option selected={popinDisplay === AnalyticalTablePopinDisplay.WithoutHeader}>WithoutHeader</Option>
        </Select>
        {context.viewMode === 'story' ? (
          <AnalyticalTable
            {...tableArgs}
            columns={columns}
            adjustTableHeightOnPopIn={args.adjustTableHeightOnPopIn}
            header={`Current width: ${args.containerWidth}`}
          />
        ) : (
          <>
            <hr />
            <ToggleableTable
              {...tableArgs}
              columns={columns}
              adjustTableHeightOnPopIn={args.adjustTableHeightOnPopIn}
              header={`Current width: ${args.containerWidth}`}
            />
          </>
        )}
      </div>
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

export const CustomFilter = {
  args: {
    data: dataLarge, filterable,
  },
  render: (args, context) => {
    const filterFn = useCallback((rows, accessor, filterValue) => {
      if (filterValue.length > 0) {
        return rows.filter((row) => {
          const rowVal = row.values[accessor];
          return !!filterValue.some((item) => rowVal.includes(item));
        });
      }
      return rows;
    }, []);
    const columns = useMemo(
      () => [
        {
          Header: 'Custom Column Filter',
          accessor: 'name', filter,
          Filter: ({ column }) => {
            const firstNames = ['Carl', 'Dan', 'Rose', 'Susanne'];
            return (
              <MultiComboBox
                placeholder="Filter Names"
                onSelectionChange={(e) => {
                  column.setFilter(e.detail.items.map((item) => item.getAttribute('text')));
                }}
              >
                {firstNames.map((item) => {
                  const isSelected = column?.filterValue?.some((filterVal) => filterVal.includes(item));
                  return <MultiComboBoxItem text={item} key={item} selected={isSelected} />;
                })}
              </MultiComboBox>
            );
          },
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
      ],
      [],
    );
    return context.viewMode === 'story' ? (
      <AnalyticalTable {...args} columns={columns} />
    ) : (
      <ToggleableTable {...args} columns={columns} />
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
              <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
            ) : (
              <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
            );
          };

    const tableProps = {
      ...args,
      data: selected === 'data' ? args.data : [],
      globalFilterValue: filtered ? 'Non-existing text' : undefined, NoDataComponent,
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

export const KitchenSink = {
  args: kitchenSinkArgs,
  render(args, context) {
    return context.viewMode === 'story' ? <AnalyticalTable {...args} /> : <ToggleableTable {...args} />;
  },
};

// ===================== Not displayed in sidebar & tags popover =====================

export const EllipsisExamples = {
  args: {
    data: dataLarge.slice(0, 5),
    columns: [
      {
        Header: 'Plain String (Automatic Ellipsis)',
        accessor: 'name', width,
        Cell: ({ value }) => value,
      },
      {
        Header: 'With textEllipsis Class',
        accessor: 'friend.name', width,
        Cell: ({ value, webComponentsReactProperties }) => (
          <div className={webComponentsReactProperties.classes.textEllipsis} title={value}>
            {value}
          </div>
        ),
      },
      {
        Header: 'With Text Component',
        id: 'description', width,
        Cell: () => (
          <Text maxLines={1} title="This is a very long text that demonstrates how the Text component handles ellipsis">
            This is a very long text that demonstrates how the Text component handles ellipsis
          </Text>
        ),
      },
    ], visibleRows,
    style: { width: 'min(100%, 300px)' },
  },
};
