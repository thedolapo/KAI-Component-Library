# UI5 React ↔ Klario Component Map

> Generated from the Klario SAP Fiori for Web UI Kit (Figma file `rur6NyDAfn3XII6DF4PD8n`)
> cross-referenced against `@ui5/webcomponents-react` v2.x (Apache License 2.0).
>
> Use this document to decide where to place new stories in the Storybook sidebar:
> - **`UI5 Components/`** — components present in both Figma and UI5 React (KAI-themed)
> - **`Klario/`** — components unique to the Klario Figma library (custom/extended)
> - **`Design System/`** — charts, colors, typography, and reference docs

---

## 🔵 Present in Both — 60 components

These components exist in the Klario Figma library **and** have a direct UI5 React equivalent.
Stories live under `UI5 Components/` in the Storybook sidebar.

| Figma (Klario) | UI5 React Component | Figma Node ID |
|---|---|---|
| Avatar | `Avatar` | `573:3809` |
| Avatar Group | `AvatarGroup` | `110157:18344` |
| Breadcrumb | `Breadcrumbs` | `153792:116` |
| Busy Indicator | `BusyIndicator` | `23575:10459` |
| Button | `Button` | `91702:11734` |
| Button Badge | `ButtonBadge` | `101171:12621` |
| Calendar | `Calendar` | `12845:11140` |
| Calendar Date Types | `CalendarDate` / `SpecialCalendarDate` | `226745:7295` |
| Card | `Card` | `208913:4166` |
| Carousel | `Carousel` | `24267:10384` |
| Check Box | `CheckBox` | `154589:1148` |
| Color Palette | `ColorPalette` | `23527:10491` |
| Color Picker | `ColorPicker` | `23541:11036` |
| Date (Range) Picker | `DateRangePicker` | `160531:1372` |
| Date Time Picker | `DateTimePicker` | `194619:6583` |
| Dialog | `Dialog` | `1101:2509` |
| Drop-Down | `ComboBox` | `182813:5889` |
| Drop-Down Item | `ComboBoxItem` / `Option` | _(child of Drop-Down)_ |
| File Uploader | `FileUploader` | `175454:1329` |
| Form | `Form` | `237212:14308` |
| Form Item | `FormItem` | `158030:454` |
| Icon | `Icon` | `25058:266` |
| Icon Tab Bar | `TabContainer` + `Tab` | `26979:13148` |
| Illustrated Message | `IllustratedMessage` | `80967:12113` |
| Input | `Input` | `148569:1061` |
| Label | `Label` | `23480:10812` |
| Link | `Link` | `462:823` |
| List | `List` | `155542:3876` |
| List Item | `ListItemStandard` | `155542:3564` |
| Menu | `Menu` | `307148:4033` |
| Message Strip | `MessageStrip` | `278668:35` |
| Multi Combobox | `MultiComboBox` | `212722:56342` |
| Multi Input | `MultiInput` | `212341:2966` |
| Notification List Item | `NotificationListItem` | `289122:3287` |
| Notifications | `NotificationList` | _(parent of Notification List Item)_ |
| Panel | `Panel` | `24070:10554` |
| Popover | `Popover` | `153790:2116` |
| Progress Indicator | `ProgressIndicator` | `578:5150` |
| Radio Button | `RadioButton` | `154597:2067` |
| Range Slider | `RangeSlider` | `104968:17343` |
| Rating Indicator | `RatingIndicator` | `24494:10443` |
| Segmented Button | `SegmentedButton` | `91702:11987` |
| Select | `Select` | `181190:746` |
| Shell Bar | `ShellBar` | `285220:12143` |
| Side Navigation | `SideNavigation` | `283218:5322` |
| Slider | `Slider` | `104968:23760` |
| Split Button | `SplitButton` | `188746:10977` |
| Step Input | `StepInput` | `148569:1733` |
| Switch | `Switch` | `24087:10320` |
| Table | `Table` | `191125:39286` |
| Table Cell | `TableCell` | `192997:5553` |
| Tag | `Tag` | `159914:12392` |
| Text | `Text` | `224294:204` |
| Text Area | `TextArea` | `245075:4278` |
| Time Picker | `TimePicker` | `194605:104294` |
| Toast | `Toast` | `126132:18899` |
| Token | `Token` | `32:27728` |
| Tokenizer | `Tokenizer` | `202050:806` |
| Toolbar | `Toolbar` | `183497:6467` |
| Tree | `Tree` | `186218:16272` |
| Tree Item | `TreeItem` | `183861:4316` |
| User Menu | `UserMenu` | `286950:9396` |

---

## 🟣 Unique to Klario — 32 components

These components exist in the Klario Figma library but have **no direct equivalent** in UI5 React.
Stories live under `Klario/` in the Storybook sidebar.

| Figma Component | Category | Notes / Closest UI5 React Component |
|---|---|---|
| Banner | Feedback | No equivalent — `MessageStrip` is closest but different pattern |
| Card Badge | Card sub | Slot/prop on `Card`, not a separate export |
| Card Extended Header | Card variant | Klario extension — no direct equivalent |
| Card Footer | Card sub | Rendered via slot only |
| Card Main Header | Card sub | Maps to `CardHeader` props only |
| Card Media Block | Card sub | Klario-specific media layout |
| Card Numeric Header | Card variant | Closest is `AnalyticalCardHeader` |
| Custom Side Navigation | Navigation | Klario variant of `SideNavigation` |
| Date and Time Dropdown | Input | No combined date+time dropdown in UI5 React |
| Dialog Block Layer | Overlay | Internal to `Dialog` — not exported |
| Drop-Down Base | Internal | Abstract base, not a React export |
| Drop-Down Value Message Item | Input sub | Internal validation pattern |
| Footer | Layout | Handled by `Bar` component in UI5 React |
| Grid Layout | Layout | UI5 has `Grid` + `ResponsiveGridLayout` |
| Header | Layout | UI5 uses `DynamicPageHeader` |
| Icon Button | Button variant | Just `Button` with icon prop in UI5 |
| Icon Menu Button | Button variant | Not a separate export |
| Icon Split Button | Button variant | Not a separate export |
| Input Message Popover | Input sub | Internal to `Input` |
| Legend / Legend Item | Data Viz | Built into chart components |
| Menu Button | Button variant | No dedicated `MenuButton` export |
| Menu List Item | Menu sub | `MenuItem` in UI5 |
| Navigation Item | Navigation | `SideNavigationItem` or `BreadcrumbsItem` |
| Notification Banner | Feedback | Different from `NotificationListItem` — no equivalent |
| On Content Page Indicator | Navigation | No equivalent |
| Page Indicator | Navigation | Built into `Carousel` internals |
| Selector | Selection | No equivalent |
| Settings | Settings | `UserSettingsDialog` exists but is different |
| Shell Button | ShellBar sub | `ShellBarItem` in UI5 |
| Tab Bar Overflow | Tab sub | Internal to `TabContainer` |
| Tool Header | Layout | Klario-specific — no equivalent |
| Tooltip | Feedback | No standalone component — rendered as slot |

---

## 🟢 Unique to UI5 React — 41 components

These components are available in `@ui5/webcomponents-react` but have **no Figma equivalent** in the Klario library.
Stories live under `UI5 Components/` with a _(UI5 only)_ note. Phase 3 implementation.

| Component | Category | What it does |
|---|---|---|
| `BarChart` | Chart | Horizontal bar chart |
| `BulletChart` | Chart | Progress vs. target |
| `ColumnChart` | Chart | Vertical bar chart |
| `ColumnChartWithTrend` | Chart | Column + trend line |
| `ComposedChart` | Chart | Mixed bar + line + area |
| `DonutChart` | Chart | Donut / ring chart |
| `LineChart` | Chart | Line / area chart |
| `PieChart` | Chart | Pie chart |
| `RadarChart` | Chart | Spider/radar chart |
| `RadialChart` | Chart | Radial progress chart |
| `ScatterChart` | Chart | X/Y scatter plot |
| `TimelineChart` | Chart | Gantt-style timeline |
| `ActionSheet` | Overlay | Mobile-style bottom action sheet |
| `AnalyticalCardHeader` | Card | KPI card with numeric/trend data |
| `AnalyticalTable` | Data Display | Advanced table: sorting, grouping, virtualisation |
| `Bar` | Layout | Header/footer bar |
| `BarcodeScannerDialog` | Utility | Camera-based QR scanner |
| `DynamicPage` | Layout | Full SAP Fiori dynamic page layout |
| `ExpandableText` | Content | Truncated text with expand/collapse |
| `FilterBar` | Data Control | Filter panel with show/hide |
| `FlexBox` | Layout | CSS Flexbox with SAP spacing |
| `FlexibleColumnLayout` | Layout | SAP FCL master-detail-detail |
| `MediaGallery` | Content | Image gallery with thumbnails |
| `MessageBox` | Feedback | Confirmation/alert dialog |
| `MessageView` | Feedback | List of error/warning messages |
| `NavigationLayout` | Layout | Two-pane navigation layout |
| `NumericSideIndicator` | Data Display | KPI side indicator with trend arrow |
| `ObjectPage` | Layout | Full SAP Fiori object page |
| `ObjectStatus` | Status | Text + icon + colour status indicator |
| `ProductSwitch` | Navigation | App launcher grid |
| `ResponsiveGridLayout` | Layout | Form-factor-adaptive grid |
| `SearchField` | Input | Search with suggestions |
| `SelectDialog` | Overlay | Search + select value help dialog |
| `SplitterLayout` | Layout | Resizable split pane |
| `ThemeProvider` | Provider | SAP theme context wrapper |
| `Timeline` | Data Display | Vertical/horizontal event timeline |
| `ToggleButton` | Button | On/off pressed-state button |
| `UploadCollection` | Input | File upload list with status |
| `UserSettingsDialog` | Settings | Full user settings dialog |
| `VariantManagement` | Data Control | Save/load filter view variants |
| `ViewSettingsDialog` | Data Control | Sort + group + filter settings |
| `Wizard` | Navigation | Step-by-step guided workflow |

---

## Implementation Phases

| Phase | Scope | Status |
|---|---|---|
| Phase 1 | First 30 "Present in Both" components (Avatar → Menu) | 🔄 In progress |
| Phase 2 | Last 30 "Present in Both" components (Message Strip → User Menu) | ⏳ Pending |
| Phase 3 | All 41 "Unique to UI5 React" components | ⏳ Pending |
| Klario | 32 "Unique to Klario" components | 🎯 Banner placeholder only |

---

## Summary

| | Count |
|---|---|
| 🔵 Present in both | **60** |
| 🟣 Unique to Klario | **32** |
| 🟢 Unique to UI5 React | **41** |
| **Total distinct** | **133** |
