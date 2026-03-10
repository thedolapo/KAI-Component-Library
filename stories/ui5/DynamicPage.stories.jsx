import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Bar,
  Breadcrumbs,
  BreadcrumbsItem,
  Button,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FlexBox,
  FlexBoxDirection,
  FlexBoxWrap,
  Label,
  MessageStrip,
  ObjectStatus,
  Tag,
  Title,
  Toolbar,
  ToolbarButton
} from '@ui5/webcomponents-react';
import BarDesign from '@ui5/webcomponents/dist/types/BarDesign.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import actionIcon from '@ui5/webcomponents-icons/dist/action.js';
import declineIcon from '@ui5/webcomponents-icons/dist/decline.js';
import exitFSIcon from '@ui5/webcomponents-icons/dist/exit-full-screen.js';
import fullscreenIcon from '@ui5/webcomponents-icons/dist/full-screen.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
const useGetHeaderHeight = (ref) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  useEffect(() => {
    if (ref.current) {
      const header = ref.current.shadowRoot?.querySelector('[part="header-content"]');
      setHeaderHeight(header?.getBoundingClientRect()?.height ?? 0);
    }
  }, [ref]);
  return headerHeight;
};

const meta = {
  title: 'UI5 Components/Dynamic Page', component: DynamicPage,
  argTypes: {
    children: {
      control: { disable: true },
    },
    titleArea: {
      control: { disable: true },
    },
    headerArea: {
      control: { disable: true },
    },
    footerArea: {
      control: { disable: true },
    },
  },
  args: {
    style: { height: '600px' },
    titleArea: (
      <DynamicPageTitle
        heading={<Title style={{ fontSize: ThemingParameters.sapObjectHeader_Title_FontSize }}>Header Title</Title>}
        snappedHeading={
          <Title style={{ fontSize: ThemingParameters.sapObjectHeader_Title_SnappedFontSize }}>
            Snapped Header Title
          </Title>
        }
        subheading={
          <>
            <Label>Subheader</Label>
            <MessageStrip>Information (only visible if header content is expanded)</MessageStrip>
          </>
        }
        snappedSubheading={
          <>
            <Label>Snapped Subheader</Label>
            <MessageStrip>Information (only visible if header content is collapsed (snapped))</MessageStrip>
          </>
        }
        actionsBar={
          <Toolbar design="Transparent">
            <ToolbarButton design={ButtonDesign.Emphasized} text="Edit" />
            <ToolbarButton design={ButtonDesign.Transparent} text="Delete" />
            <ToolbarButton design={ButtonDesign.Transparent} text="Copy" />
            <ToolbarButton icon={actionIcon} design={ButtonDesign.Transparent} />
          </Toolbar>
        }
        navigationBar={
          <Toolbar design="Transparent">
            <ToolbarButton icon={fullscreenIcon} design={ButtonDesign.Transparent} />
            <ToolbarButton icon={exitFSIcon} design={ButtonDesign.Transparent} />
            <ToolbarButton icon={declineIcon} design={ButtonDesign.Transparent} />
          </Toolbar>
        }
        breadcrumbs={
          <Breadcrumbs>
            <BreadcrumbsItem>Home</BreadcrumbsItem>
            <BreadcrumbsItem>Page 1</BreadcrumbsItem>
            <BreadcrumbsItem>Page 2</BreadcrumbsItem>
            <BreadcrumbsItem>Page 3</BreadcrumbsItem>
            <BreadcrumbsItem>Page 4</BreadcrumbsItem>
            <BreadcrumbsItem>Page 5</BreadcrumbsItem>
          </Breadcrumbs>
        }
      >
        <Tag>Status: OK</Tag>
      </DynamicPageTitle>
    ),
    headerArea: (
      <DynamicPageHeader>
        <FlexBox wrap={FlexBoxWrap.Wrap}>
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label>Location: Warehouse A</Label>
            <Label>Halway: 23L</Label>
            <Label>Rack: 34</Label>
          </FlexBox>
          <span style={{ width: '1rem' }} />
          <FlexBox direction={FlexBoxDirection.Column}>
            <Label>Availability:</Label>
            <ObjectStatus state={ValueState.Positive}>In Stock</ObjectStatus>
          </FlexBox>
        </FlexBox>
      </DynamicPageHeader>
    ),
    footerArea: (
      <Bar
        design={BarDesign.FloatingFooter}
        endContent={
          <>
            <Button design={ButtonDesign.Positive}>Accept</Button>
            <Button design={ButtonDesign.Negative}>Reject</Button>
          </>
        }
      />
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=88156:3820',
    },
    docs: {
      description: {
        component: '[→ UI5 React docs](https://ui5.github.io/webcomponents-react/v2/?path=/story/layouts-floorplans-dynamicpage--default)',
      },
    },
  },
};

export default meta;

export const Default = {
  render(args) {
    return (
      <DynamicPage {...args}>
        <div style={{ padding: '1rem' }}>
          <Title level="H3">Products</Title>
          <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
            {['Notebook Basic 15', 'Notebook Basic 17', 'Notebook Professional 15'].map((item, i) => (
              <div key={i} style={{ padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: '4px' }}>{item}</div>
            ))}
          </div>
        </div>
      </DynamicPage>
    );
  },
};

export const StickyContentHeaders = {
  render(args) {
    const dynamicPageRef = useRef(null);
    const headerHeight = useGetHeaderHeight(dynamicPageRef);

    return (
      <DynamicPage {...args} ref={dynamicPageRef} className={[args.className, 'dynamicPageStickyContent'].filter(Boolean).join(' ')}>
        <>
          <div
            style={{
              position: 'sticky',
              width: '100%',
              height: '4rem',
              background: 'lightgreen',
              insetBlockStart: `${headerHeight}px`,
            }}
          >
            Sticky Header
          </div>
          <div style={{ width: '100%', background: 'orange', height: '10rem' }}>Content</div>
          <div
            style={{
              position: 'sticky',
              width: '100%',
              height: '8rem',
              background: 'lightgreen',
              insetBlockStart: `calc(${headerHeight}px + 4rem)`,
            }}
          >
            Sticky Header 2
          </div>
          <div style={{ background: 'lightblue', height: '2000px', width: '100%' }}>Content</div>
        </>
      </DynamicPage>
    );
  },
};
