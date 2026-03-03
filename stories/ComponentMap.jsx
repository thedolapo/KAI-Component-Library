/**
 * Design System/Component Map
 * Reference table: Klario Figma library ↔ @ui5/webcomponents-react
 */

import React from 'react';
import './componentmap.css';

// ── Data ───────────────────────────────────────────────────────────────────

const BOTH = [
  ['Avatar', 'Avatar', '573:3809'],
  ['Avatar Group', 'AvatarGroup', '110157:18344'],
  ['Breadcrumb', 'Breadcrumbs', '153792:116'],
  ['Busy Indicator', 'BusyIndicator', '23575:10459'],
  ['Button', 'Button', '91702:11734'],
  ['Button Badge', 'ButtonBadge', '101171:12621'],
  ['Calendar', 'Calendar', '12845:11140'],
  ['Calendar Date Types', 'CalendarDate / SpecialCalendarDate', '226745:7295'],
  ['Card', 'Card', '208913:4166'],
  ['Carousel', 'Carousel', '24267:10384'],
  ['Check Box', 'CheckBox', '154589:1148'],
  ['Color Palette', 'ColorPalette', '23527:10491'],
  ['Color Picker', 'ColorPicker', '23541:11036'],
  ['Date (Range) Picker', 'DateRangePicker', '160531:1372'],
  ['Date Time Picker', 'DateTimePicker', '194619:6583'],
  ['Dialog', 'Dialog', '1101:2509'],
  ['Drop-Down', 'ComboBox', '182813:5889'],
  ['Drop-Down Item', 'ComboBoxItem / Option', '—'],
  ['File Uploader', 'FileUploader', '175454:1329'],
  ['Form', 'Form', '237212:14308'],
  ['Form Item', 'FormItem', '158030:454'],
  ['Icon', 'Icon', '25058:266'],
  ['Icon Tab Bar', 'TabContainer + Tab', '26979:13148'],
  ['Illustrated Message', 'IllustratedMessage', '80967:12113'],
  ['Input', 'Input', '148569:1061'],
  ['Label', 'Label', '23480:10812'],
  ['Link', 'Link', '462:823'],
  ['List', 'List', '155542:3876'],
  ['List Item', 'ListItemStandard', '155542:3564'],
  ['Menu', 'Menu', '307148:4033'],
  ['Message Strip', 'MessageStrip', '278668:35'],
  ['Multi Combobox', 'MultiComboBox', '212722:56342'],
  ['Multi Input', 'MultiInput', '212341:2966'],
  ['Notification List Item', 'NotificationListItem', '289122:3287'],
  ['Notifications', 'NotificationList', '—'],
  ['Panel', 'Panel', '24070:10554'],
  ['Popover', 'Popover', '153790:2116'],
  ['Progress Indicator', 'ProgressIndicator', '578:5150'],
  ['Radio Button', 'RadioButton', '154597:2067'],
  ['Range Slider', 'RangeSlider', '104968:17343'],
  ['Rating Indicator', 'RatingIndicator', '24494:10443'],
  ['Segmented Button', 'SegmentedButton', '91702:11987'],
  ['Select', 'Select', '181190:746'],
  ['Shell Bar', 'ShellBar', '285220:12143'],
  ['Side Navigation', 'SideNavigation', '283218:5322'],
  ['Slider', 'Slider', '104968:23760'],
  ['Split Button', 'SplitButton', '188746:10977'],
  ['Step Input', 'StepInput', '148569:1733'],
  ['Switch', 'Switch', '24087:10320'],
  ['Table', 'Table', '191125:39286'],
  ['Table Cell', 'TableCell', '192997:5553'],
  ['Tag', 'Tag', '159914:12392'],
  ['Text', 'Text', '224294:204'],
  ['Text Area', 'TextArea', '245075:4278'],
  ['Time Picker', 'TimePicker', '194605:104294'],
  ['Toast', 'Toast', '126132:18899'],
  ['Token', 'Token', '32:27728'],
  ['Tokenizer', 'Tokenizer', '202050:806'],
  ['Toolbar', 'Toolbar', '183497:6467'],
  ['Tree', 'Tree', '186218:16272'],
  ['Tree Item', 'TreeItem', '183861:4316'],
  ['User Menu', 'UserMenu', '286950:9396'],
];

const KLARIO_ONLY = [
  ['Banner', 'Feedback', 'MessageStrip is closest but different pattern'],
  ['Card Badge', 'Card sub', 'Slot/prop on Card, not a separate export'],
  ['Card Extended Header', 'Card variant', 'Klario extension'],
  ['Card Footer', 'Card sub', 'Via slot only'],
  ['Card Main Header', 'Card sub', 'CardHeader props only'],
  ['Card Media Block', 'Card sub', 'Klario-specific media layout'],
  ['Card Numeric Header', 'Card variant', 'See AnalyticalCardHeader'],
  ['Custom Side Navigation', 'Navigation', 'Klario variant of SideNavigation'],
  ['Date and Time Dropdown', 'Input', 'No combined date+time dropdown in UI5 React'],
  ['Dialog Block Layer', 'Overlay', 'Internal to Dialog — not exported'],
  ['Footer', 'Layout', 'Use Bar in UI5'],
  ['Grid Layout', 'Layout', 'Grid + ResponsiveGridLayout'],
  ['Header', 'Layout', 'DynamicPageHeader'],
  ['Icon Button', 'Button variant', 'Button with icon prop in UI5'],
  ['Input Message Popover', 'Input sub', 'Internal to Input'],
  ['Menu Button', 'Button variant', 'No dedicated MenuButton export'],
  ['Navigation Item', 'Navigation', 'SideNavigationItem or BreadcrumbsItem'],
  ['Notification Banner', 'Feedback', 'No equivalent'],
  ['Tool Header', 'Layout', 'Klario-specific'],
  ['Tooltip', 'Feedback', 'Rendered as slot'],
  ['… (12 more)', '—', 'See docs/ui5-klario-component-map.md for full list'],
];

const UI5_ONLY = [
  ['BarChart', 'Chart', 'Horizontal bar chart'],
  ['BulletChart', 'Chart', 'Progress vs. target'],
  ['ColumnChart', 'Chart', 'Vertical bar chart'],
  ['DonutChart', 'Chart', 'Donut / ring chart — see Design System/Charts'],
  ['LineChart', 'Chart', 'Line / area chart'],
  ['PieChart', 'Chart', 'Pie chart'],
  ['AnalyticalTable', 'Data Display', 'Advanced table with sorting, grouping, virtualisation'],
  ['DynamicPage', 'Layout', 'Full SAP Fiori dynamic page layout'],
  ['FilterBar', 'Data Control', 'Filter panel with show/hide'],
  ['FlexibleColumnLayout', 'Layout', 'SAP FCL master-detail-detail'],
  ['ObjectPage', 'Layout', 'Full SAP Fiori object page'],
  ['Wizard', 'Navigation', 'Step-by-step guided workflow'],
  ['… (29 more)', '—', 'See docs/ui5-klario-component-map.md for full list'],
];

// ── Component ───────────────────────────────────────────────────────────────

const FIGMA_BASE =
  'https://www.figma.com/design/rur6NyDAfn3XII6DF4PD8n/Klario-SAP-Fiori-for-Web-UI-Kit?node-id=';

function Badge({ children, color }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.125rem 0.5rem',
        borderRadius: '0.875rem',
        fontSize: '0.75rem',
        fontWeight: 600,
        background: color,
        color: '#fff',
        verticalAlign: 'middle',
      }}
    >
      {children}
    </span>
  );
}

function ComponentTable({ rows, cols, renderRow }) {
  return (
    <table className="cmap-table">
      <thead>
        <tr>{cols.map((c) => <th key={c}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => <tr key={i}>{renderRow(row)}</tr>)}
      </tbody>
    </table>
  );
}

export function ComponentMap() {
  return (
    <div className="cmap-page">
      <div className="cmap-header">
        <h1>Component Map</h1>
        <p>
          How the <strong>Klario Figma library</strong> maps to{' '}
          <code>@ui5/webcomponents-react</code>. Use this to find the correct story
          or component when building features.
        </p>

        <div className="cmap-legend">
          <span><Badge color="var(--kai-main-sap-brand-color, #5f00ff)">UI5</Badge> Components in both libraries — story under <code>UI5 Components/</code></span>
          <span><Badge color="hsl(326, 94%, 38%)">Klario</Badge> Unique to Klario — story under <code>Klario/</code></span>
          <span><Badge color="hsl(137, 50%, 38%)">UI5 only</Badge> Unique to UI5 React — Phase 3 stories</span>
        </div>
      </div>

      <section>
        <h2>
          <Badge color="var(--kai-main-sap-brand-color, #5f00ff)">🔵 60</Badge>
          {' '}Present in Both
        </h2>
        <ComponentTable
          cols={['Figma (Klario)', 'UI5 React Component', 'Figma Node']}
          rows={BOTH}
          renderRow={([figma, ui5, nodeId]) => [
            <td key="f">{figma}</td>,
            <td key="u"><code>{ui5}</code></td>,
            <td key="n">
              {nodeId !== '—' ? (
                <a
                  href={`${FIGMA_BASE}${nodeId}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--kai-link-sap-link-color, #5f00ff)', fontSize: '0.8125rem' }}
                >
                  {nodeId}
                </a>
              ) : '—'}
            </td>,
          ]}
        />
      </section>

      <section>
        <h2>
          <Badge color="hsl(326, 94%, 38%)">🟣 32</Badge>
          {' '}Unique to Klario
        </h2>
        <ComponentTable
          cols={['Figma Component', 'Category', 'Notes / Closest UI5 Component']}
          rows={KLARIO_ONLY}
          renderRow={([name, cat, notes]) => [
            <td key="n">{name}</td>,
            <td key="c" style={{ color: 'var(--kai-text-sap-content-label-color)' }}>{cat}</td>,
            <td key="no" style={{ fontSize: '0.8125rem', color: 'var(--kai-text-sap-content-label-color)' }}>{notes}</td>,
          ]}
        />
      </section>

      <section>
        <h2>
          <Badge color="hsl(137, 50%, 38%)">🟢 41</Badge>
          {' '}Unique to UI5 React
        </h2>
        <ComponentTable
          cols={['Component', 'Category', 'What it does']}
          rows={UI5_ONLY}
          renderRow={([comp, cat, desc]) => [
            <td key="c"><code>{comp}</code></td>,
            <td key="cat" style={{ color: 'var(--kai-text-sap-content-label-color)' }}>{cat}</td>,
            <td key="d" style={{ fontSize: '0.8125rem', color: 'var(--kai-text-sap-content-label-color)' }}>{desc}</td>,
          ]}
        />
      </section>

      <footer className="cmap-footer">
        Full reference: <a
          href="https://github.com/Habib-Ayoade/KAI-Component-Library/blob/main/docs/ui5-klario-component-map.md"
          target="_blank"
          rel="noreferrer"
        >
          docs/ui5-klario-component-map.md
        </a>
      </footer>
    </div>
  );
}

export default ComponentMap;
