# TailAdminLTE Vue — Design Specification

**Date:** 2026-03-24
**Status:** Approved
**Source project:** `../web-html/` (HTML + Alpine.js + Handlebars + Tailwind CSS v4)
**Target project:** `../web/` (Vue 3 + TypeScript + Pinia + Vue Router + Tailwind CSS v4)

---

## Overview

Recreate the TailAdminLTE admin dashboard template as a Vue 3 application with reusable components. The HTML version contains 41+ pages built with Handlebars templating, Alpine.js for interactivity, and Tailwind CSS v4 for styling. The Vue version replaces Handlebars partials with Vue components, Alpine.js stores with Pinia stores, and Alpine.js components with Vue composables — while keeping all CSS files and design tokens identical for pixel-for-pixel visual parity.

**Intended use:** Starter template (clone and build on top).

---

## Tech Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| Vue 3 | 3.5+ | UI framework, Composition API with `<script setup>` |
| TypeScript | 5.x | Type safety, self-documenting component props |
| Vite | 6.x | Build tool and dev server (same as HTML version) |
| Vue Router | 4.x | Nested route layouts |
| Pinia | 2.x | State management (replaces Alpine.js stores) |
| Tailwind CSS | v4 | CSS-first config with `@theme` design tokens |
| @tailwindcss/vite | 4.x | Vite plugin for Tailwind |
| lucide-vue-next | latest | Vue icon components (replaces Lucide `data-lucide`) |
| vue-chartjs | 5.x | Vue wrapper for Chart.js |
| chart.js | 4.x | Chart rendering |

---

## Directory Structure

```
src/
├── assets/
│   ├── css/
│   │   ├── app.css                    # Tailwind v4 entry + @theme design tokens
│   │   ├── layout/                    # Grid: app-wrapper, header, sidebar, footer, main
│   │   ├── components/                # Widget CSS: cards, small-box, info-box, direct-chat,
│   │   │                              #   timeline, callout, toast, progress
│   │   └── pages/                     # Page-specific CSS: auth, lockscreen
│   └── images/                        # NOTE: not used — images stay in public/assets/img/
├── components/
│   ├── layout/                        # AppHeader, AppSidebar, AppFooter, ContentHeader,
│   │                                  #   SidebarMenu, SidebarMenuItem
│   ├── widgets/                       # SmallBox, InfoBox, AppCard, DirectChat
│   ├── ui/                            # AppAlert, AppModal, AppToast, AppCallout, DarkModeToggle
│   ├── charts/                        # LineChart, BarChart, DoughnutChart, PieChart,
│   │                                  #   RadarChart, PolarAreaChart, MixedChart
│   ├── forms/                         # InputGroup, FormSelect, FormCheckbox, etc.
│   └── tables/                        # DataTable (sort, search, paginate)
├── composables/
│   ├── useCardWidget.ts               # Card collapse/maximize/remove logic
│   ├── useSlideToggle.ts              # Animate height open/close
│   ├── useFullscreen.ts               # Fullscreen API wrapper
│   ├── useThemeColors.ts              # Reactive chart colors for dark mode
│   └── useTodoList.ts                 # Todo state management
├── stores/
│   ├── sidebar.ts                     # useSidebarStore
│   ├── darkMode.ts                    # useDarkModeStore
│   ├── layout.ts                      # useLayoutStore
│   └── accessibility.ts               # useAccessibilityStore
├── layouts/
│   ├── DefaultLayout.vue              # Sidebar + header + main + footer
│   ├── AuthLayout.vue                 # Centered card, no sidebar
│   └── ErrorLayout.vue                # Full-page error display
├── pages/
│   ├── dashboard/                     # DashboardV1, DashboardV2, DashboardV3
│   ├── widgets/                       # SmallBoxPage, InfoBoxPage, CardsPage
│   ├── layout/                        # 10 layout variant demo pages
│   ├── ui/                            # GeneralPage, IconsPage, TimelinePage, ButtonsPage, ModalsPage
│   ├── forms/                         # GeneralFormsPage, ValidationFormsPage
│   ├── tables/                        # SimpleTablesPage, DataTablesPage
│   ├── charts/                        # ChartJsPage, InlinePage
│   └── examples/                      # Auth, errors, profile, invoice, gallery, search,
│                                      #   projects, contacts, e-commerce, lockscreen
├── data/
│   └── navigation.ts                  # Typed sidebar menu structure
├── router/
│   └── index.ts                       # Vue Router with nested layout routes
├── types/
│   └── index.ts                       # Shared TypeScript interfaces
├── App.vue                            # Root <RouterView />
└── main.ts                            # App init: createApp, Pinia, Router, global CSS
```

---

## Routing Architecture

Nested route layouts where layout components are parent routes containing `<RouterView />`.

### DefaultLayout Routes (sidebar + header + footer)

| Path | Page Component | activePage |
|:---|:---|:---|
| `/` | DashboardV1 | `index` |
| `/dashboard-v2` | DashboardV2 | `index2` |
| `/dashboard-v3` | DashboardV3 | `index3` |
| `/widgets/small-box` | SmallBoxPage | `widgets-small-box` |
| `/widgets/info-box` | InfoBoxPage | `widgets-info-box` |
| `/widgets/cards` | CardsPage | `widgets-cards` |
| `/ui/general` | GeneralPage | `ui-general` |
| `/ui/icons` | IconsPage | `ui-icons` |
| `/ui/timeline` | TimelinePage | `ui-timeline` |
| `/ui/buttons` | ButtonsPage | `ui-buttons` |
| `/ui/modals` | ModalsPage | `ui-modals` |
| `/forms/general` | GeneralFormsPage | `forms-general` |
| `/forms/validation` | ValidationFormsPage | `forms-validation` |
| `/tables/simple` | SimpleTablesPage | `tables-simple` |
| `/tables/data` | DataTablesPage | `tables-data` |
| `/charts/chartjs` | ChartJsPage | `charts-chartjs` |
| `/charts/inline` | InlinePage | `charts-inline` |
| `/layout/fixed-sidebar` | FixedSidebarPage | `layout-fixed-sidebar` |
| `/layout/fixed-header` | FixedHeaderPage | `layout-fixed-header` |
| `/layout/fixed-footer` | FixedFooterPage | `layout-fixed-footer` |
| `/layout/fixed-complete` | FixedCompletePage | `layout-fixed-complete` |
| `/layout/collapsed-sidebar` | CollapsedSidebarPage | `layout-collapsed-sidebar` |
| `/layout/sidebar-mini` | SidebarMiniPage | `layout-sidebar-mini` |
| `/layout/unfixed-sidebar` | UnfixedSidebarPage | `layout-unfixed-sidebar` |
| `/layout/custom-area` | CustomAreaPage | `layout-custom-area` |
| `/layout/logo-switch` | LogoSwitchPage | `layout-logo-switch` |
| `/layout/rtl` | RtlPage | `layout-rtl` |
| `/examples/profile` | ProfilePage | `examples-profile` |
| `/examples/invoice` | InvoicePage | `examples-invoice` |
| `/examples/gallery` | GalleryPage | `examples-gallery` |
| `/examples/search` | SearchPage | `examples-search` |
| `/examples/projects` | ProjectsPage | `examples-projects` |
| `/examples/contacts` | ContactsPage | `examples-contacts` |
| `/examples/e-commerce` | ECommercePage | `examples-ecommerce` |

### AuthLayout Routes (centered card, no sidebar)

| Path | Page Component |
|:---|:---|
| `/auth/login-v1` | LoginV1 |
| `/auth/login-v2` | LoginV2 |
| `/auth/register-v1` | RegisterV1 |
| `/auth/register-v2` | RegisterV2 |
| `/auth/lockscreen` | Lockscreen |

### ErrorLayout Routes (full-page error)

| Path | Page Component |
|:---|:---|
| `/error/404` | Error404 |
| `/error/500` | Error500 |

### Catch-All Route

```ts
{ path: '/:pathMatch(.*)*', redirect: '/error/404' }
```

Unknown URLs redirect to the 404 page. This is required for SPA behavior — unlike the multi-page HTML version, the server won't handle missing routes.

### Route Meta

Each route defines meta for the layout to consume:

```ts
meta: {
  activePage: string      // Sidebar active item identifier
  pageTitle: string       // ContentHeader title
  layoutClass?: string    // Extra classes for .app-wrapper (e.g., 'fixed-header')
}
```

**Breadcrumbs:** The HTML source only ever renders "Home > {pageTitle}". Rather than passing a breadcrumbs array per route, `ContentHeader` derives breadcrumbs automatically: a "Home" link to `/` plus the current `pageTitle` from route meta. This matches the HTML version exactly and avoids redundant config on every route.

---

## Shared Type Definitions (types/index.ts)

```ts
// Navigation
interface NavigationItem {
  label: string
  icon?: string              // Lucide icon name
  href?: string              // Route path (for leaf items)
  activePage?: string        // Matches route.meta.activePage
  children?: NavigationItem[]
}

interface NavigationSection {
  header: string             // Section header text (e.g., 'MAIN NAVIGATION')
  items: NavigationItem[]
}

// Direct Chat
interface ChatMessage {
  name: string
  avatar: string             // Image path (e.g., '/assets/img/user1-128x128.jpg')
  text: string
  time: string               // Display string (e.g., '2 Jan 2:13 pm')
  side: 'left' | 'right'    // left = other person, right = current user
}

interface ChatContact {
  name: string
  avatar: string
  status: string             // Date/status string (e.g., '2/28/2025')
}

// Todo List (Dashboard v3)
interface TodoItem {
  id: number
  text: string
  done: boolean
  color: string              // Tailwind text color class (e.g., 'text-danger')
  priority?: 'low' | 'medium' | 'high'
}
```

---

## Component Specifications

### Widget Components

#### SmallBox.vue

KPI stat widget displaying a large number, label, icon, and optional footer link.

```ts
// Props
bgColor: string           // Tailwind bg class (e.g., 'bg-primary')
value: string | number     // Large display number
label: string              // Description text
icon: string               // Lucide icon name
link?: string              // Footer link href (uses RouterLink)
linkText?: string          // Footer link label (default: 'More info')

// Slots: none (fully prop-driven)
```

#### InfoBox.vue

Metric box with colored icon area and optional progress bar.

```ts
// Props
icon: string               // Lucide icon name
iconBg: string             // Tailwind bg class for icon area
label: string              // Metric name
value: string | number     // Display value
progressValue?: number     // 0-100, shows progress bar if provided
progressColor?: string     // Tailwind bg class for progress bar
progressDescription?: string

// Slots: none
```

#### AppCard.vue

Universal card component with collapse, maximize, remove, and loading overlay.

```ts
// Props
title?: string             // Card header title
icon?: string              // Lucide icon in header
cardClass?: string         // Extra classes (card-outline, bg-primary, etc.)
interactive?: boolean      // Show collapse/maximize/remove tool buttons
collapsed?: boolean        // Initial collapsed state
loading?: boolean          // Show loading overlay

// Slots
default                    // Card body content
#header                    // Replace entire header (overrides title/icon)
#footer                    // Card footer (only rendered if slot is provided)
#tools                     // Extra buttons next to collapse/maximize/remove

// Emits
collapsed: [value: boolean]
removed: []

// Internal: uses useCardWidget() composable
```

#### DirectChat.vue

Chat widget with message bubbles, input area, and toggleable contacts pane.

```ts
// Props
title: string
variant?: 'primary' | 'success' | 'warning' | 'danger'
messages: ChatMessage[]    // { name, avatar, text, time, side: 'left' | 'right' }
contacts: ChatContact[]    // { name, avatar, status, lastMessage, lastTime }
badgeCount?: number

// Emits
send: [text: string]
```

### UI Components

#### AppAlert.vue

Inline alert with variant colors, optional icon, and dismissible support.

```ts
// Props
variant: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary'
icon?: string              // Lucide icon name
title?: string
dismissible?: boolean

// Slots
default                    // Alert message content
```

#### AppModal.vue

Dialog modal with v-model control, backdrop/ESC close, and transitions.

```ts
// Props
open: boolean              // v-model:open for visibility
title: string
size?: 'sm' | 'md' | 'lg' | 'xl'
centered?: boolean
scrollable?: boolean
headerClass?: string       // Colored header (e.g., 'bg-primary text-white')

// Slots
default                    // Modal body
#footer                    // Modal footer (buttons)

// Features
// - Teleport to <body>
// - ESC key closes modal
// - Backdrop click closes modal
// - Vue transition for enter/leave
```

#### AppToast.vue

Floating notification with auto-dismiss support.

```ts
// Props
variant: 'primary' | 'success' | 'warning' | 'danger' | 'info'
title: string
message: string
autoDismiss?: boolean
delay?: number             // Milliseconds (default: 5000)

// Emits
close: []
```

#### AppCallout.vue

Contextual information block with left border accent.

```ts
// Props
variant: 'primary' | 'info' | 'warning' | 'danger' | 'success'
title?: string

// Slots
default                    // Callout content
```

#### DarkModeToggle.vue

Cycles between light/dark/auto modes. Uses `useDarkModeStore`.

```ts
// Props: none
// Uses darkMode store internally
// Shows sun (light), moon (dark), or monitor (auto) icon
```

### Layout Components

#### DefaultLayout.vue

Main app shell with CSS Grid layout. Reads `route.meta` for page title, breadcrumbs, and active sidebar item. Computes layout classes from sidebar store and route meta.

#### AuthLayout.vue

Centered card layout with gradient background. Contains `<RouterView />` and `DarkModeToggle`.

#### ErrorLayout.vue

Full-page error display with gradient background. Contains `<RouterView />` and `DarkModeToggle`.

#### AppHeader.vue

Top navbar with sidebar toggle, search, dark mode toggle, messages dropdown, notifications dropdown, fullscreen button, and user menu. Uses sidebar and darkMode stores.

#### AppSidebar.vue

Sidebar with brand area, navigation menu, and mobile overlay.

```ts
// Props
activePage: string         // Current active page identifier

// Internal: reads navigation.ts, renders SidebarMenu
```

#### SidebarMenu.vue

Renders the full navigation tree from `navigation.ts`. Iterates over `NavigationSection[]`, renders section headers, and delegates each item to `SidebarMenuItem`.

```ts
// Props
sections: NavigationSection[]   // Full navigation data
activePage: string              // Passed through to SidebarMenuItem

// Internal: wraps items in <nav> with <ul class="sidebar-menu">
```

#### SidebarMenuItem.vue

Recursive menu item component for treeview navigation.

```ts
// Props
item: NavigationItem       // { label, icon, href?, children?, activePage? }
activePage: string
accordion?: boolean        // Close siblings when opening (default: true)

// Renders itself recursively for children
// Uses useSlideToggle composable for expand/collapse animation
// Emits menu-toggle event for accordion sibling closing
```

#### ContentHeader.vue

Page title and breadcrumb navigation. Breadcrumbs are auto-derived: "Home" link to `/` plus the current `pageTitle`.

```ts
// Props
title: string              // Page title from route.meta.pageTitle
```

#### AppFooter.vue

Footer with copyright and version. No props.

### Form Components

Form components are lightweight wrappers for consistency. Most form pages use native HTML elements with Tailwind classes directly — these components are extracted only where reuse is clear.

#### InputGroup.vue

Input with icon prefix/suffix, matching the HTML source's `.auth-input-group` pattern.

```ts
// Props
modelValue: string         // v-model
type?: string              // Input type (default: 'text')
placeholder?: string
icon?: string              // Lucide icon name (right-aligned)
iconPosition?: 'left' | 'right'  // Default: 'right'
disabled?: boolean

// Emits
update:modelValue: [value: string]
```

**Note:** Most form elements (checkboxes, radios, selects, textareas) are used directly as native HTML with Tailwind classes in the page components, matching the HTML source's approach. Extract additional form components only if a pattern repeats across 3+ pages.

### Table Components

#### DataTable.vue

Client-side sortable, searchable, filterable table. Replaces the Alpine.js inline implementation from `tables/data.html`.

```ts
// Props
columns: DataColumn[]      // { key: string, label: string, sortable?: boolean }
rows: Record<string, any>[]
searchable?: boolean       // Show search input (default: false)
filterable?: boolean       // Show filter select (default: false)
filterKey?: string         // Column key to filter on
filterOptions?: string[]   // Available filter values
pageSize?: number          // Rows per page (default: 10)

// Slots
#cell-{key}                // Custom cell rendering per column (slot props: { row, value })
#empty                     // Shown when no results

// Internal state: sortKey, sortDir, searchQuery, filterValue, currentPage
```

**Note:** Simple tables (`tables/simple.html`) use plain `<table>` elements with Tailwind classes directly in the page component — no wrapper needed.

### Chart Components

Thin wrappers around vue-chartjs with reactive dark mode support.

**Components:** LineChart, BarChart, DoughnutChart, PieChart, RadarChart, PolarAreaChart, MixedChart

```ts
// Common props (all chart components)
data: ChartData            // Chart.js data object
options?: ChartOptions     // Chart.js options (merged with dark mode defaults)
height?: number

// Internal: uses useThemeColors() composable for reactive grid/label/border colors
```

---

## Composables

### useCardWidget(options?)

Extracted from Alpine.js `cardWidget` component. Manages card collapse, maximize, and remove states.

```ts
// Options
interface CardWidgetOptions {
  initialCollapsed?: boolean   // Start collapsed (default: false)
  animationSpeed?: number      // Slide duration in ms (default: 500)
}

// Params
cardRef: Ref<HTMLElement | null>   // Reference to the .card element
bodyRef: Ref<HTMLElement | null>   // Reference to the .card-body element
footerRef: Ref<HTMLElement | null> // Reference to the .card-footer element

// Returns
collapsed: Ref<boolean>
maximized: Ref<boolean>
toggleCollapse(): void     // Slide toggle body/footer with useSlideToggle
toggleMaximize(): void     // Fixed fullscreen positioning
remove(): void             // Slide up entire card

// CSS class side effects:
// - toggleCollapse: adds/removes 'collapsed-card', 'collapsing-card', 'expanding-card'
// - toggleMaximize: adds/removes 'maximized-card' on card AND document.documentElement
//   Tracks 'was-collapsed' if card was collapsed when maximized
// - remove: slides up card element
```

### useSlideToggle(elementRef)

jQuery-like slide animations using CSS transitions. Replaces `slideToggle.js` utility.

```ts
// Params
elementRef: Ref<HTMLElement | null>

// Returns
slideUp(duration?: number): void
slideDown(duration?: number): void
slideToggle(duration?: number): void
```

### useFullscreen()

Fullscreen API wrapper with reactive state.

```ts
// Returns
isFullscreen: Ref<boolean>
toggle(): void
```

### useThemeColors()

Reactive chart colors based on dark mode store.

```ts
// Returns
gridColor: ComputedRef<string>
labelColor: ComputedRef<string>
borderColor: ComputedRef<string>
```

### useTodoList(initialItems?)

Todo list state for Dashboard v3.

```ts
// Returns
items: Ref<TodoItem[]>
filtered: ComputedRef<TodoItem[]>
remaining: ComputedRef<number>
filter: Ref<'all' | 'active' | 'completed'>
newItem: Ref<string>
addItem(): void
removeItem(id: number): void
toggleItem(id: number): void
clearCompleted(): void
```

---

## Pinia Stores

### useSidebarStore

Replaces Alpine.js `sidebar` store.

**State:** `open`, `mini`, `breakpoint` (992px), `_wasMobile`, `_userToggled`
**Actions:** `toggle()`, `expand()`, `collapse()`, `close()`, `menusClose()`
**Internal:** Resize listener with breakpoint detection, applies CSS classes to `document.body`

### useDarkModeStore

Replaces Alpine.js `darkMode` store.

**State:** `mode` (`'light' | 'dark' | 'auto'`)
**Actions:** `toggle()` (cycles light → dark → auto), `setMode(mode)`, `apply()`
**Persistence:** `localStorage` key `theme`
**Behavior:** Toggles `.dark` class on `<html>`, listens to `prefers-color-scheme` media query for auto mode

### useLayoutStore

Replaces Alpine.js `layout` store.

**State:** `loaded`
**Behavior:** Applies `app-loaded` class after init, adds `hold-transition` during resize (debounced 400ms)

### useAccessibilityStore

Replaces Alpine.js `accessibility` store.

**State:** `reducedMotion`, `highContrast`, `fontSize` (`'normal' | 'large' | 'x-large'`)
**Actions:** `toggleHighContrast()`, `setFontSize(size)`, `announce(message)`
**Persistence:** `localStorage` (JSON)
**Behavior:** Detects system `prefers-reduced-motion`, applies CSS classes to `<html>`, updates ARIA live region

---

## CSS Strategy

All CSS files from the HTML version are copied as-is into `src/assets/css/`. No modifications needed.

**Files copied:**
- `app.css` — Tailwind v4 entry point with `@theme` design tokens
- `layout/app-wrapper.css`, `app-header.css`, `app-sidebar.css`, `app-footer.css`, `app-main.css`
- `components/cards.css`, `small-box.css`, `info-box.css`, `direct-chat.css`, `timeline.css`, `callout.css`, `toast.css`, `progress.css`
- `pages/auth.css`, `lockscreen.css`

`app.css` imports all other CSS files. `main.ts` imports `app.css` as the global stylesheet.

## Image Strategy

Images (avatars, logos, product photos) stay in `public/assets/img/` — **not** in `src/assets/`. This preserves path compatibility with the HTML source (which references `/assets/img/user1-128x128.jpg` etc.) and avoids Vite processing/hashing. Templates reference images with static paths like `/assets/img/user1-128x128.jpg`.

Copy the HTML project's `public/` directory contents as-is.

---

## Data

### navigation.ts

Typed version of the HTML project's `data/navigation.json`. Type definitions are shared from `types/index.ts` (see Shared Type Definitions section above).

**Important:** The HTML source's `navigation.json` is missing `activePage` values for the three widget items (Small Box, Info Box, Cards). The TypeScript conversion must ADD these values (`widgets-small-box`, `widgets-info-box`, `widgets-cards`) to match the sidebar highlight behavior that the HTML partial implements via hardcoded conditionals.

```ts
export const navigation: NavigationSection[]
```

---

## Data Flow

1. **Route navigation** → Vue Router resolves layout + page → `route.meta` provides `activePage`, `pageTitle`, `layoutClass`
2. **DefaultLayout** reads `route.meta` and passes to `ContentHeader` and `AppSidebar`
3. **AppSidebar** reads `navigation.ts` data + `activePage` to highlight current menu item and expand parent treeviews
4. **Dark mode** → `useDarkModeStore` toggles `.dark` class on `<html>`, persists to `localStorage`. Chart components watch the store reactively via `useThemeColors()`.
5. **Sidebar state** → `useSidebarStore` manages open/collapse/mini, applies CSS classes to `.app-wrapper` and `document.body`. Responsive resize handling is built in.
6. **Layout variants** (fixed sidebar, fixed header, etc.) → controlled via `route.meta.layoutClass` on layout demo pages, applied as dynamic classes on the `.app-wrapper` div

---

## Build Configuration

Vite config for the Vue project:

- **Root:** project root (not `src/`)
- **Plugins:** `@vitejs/plugin-vue`, `@tailwindcss/vite`
- **Resolve aliases:** `@` → `src/`, `@css` → `src/assets/css/`
- **Dev server:** port 3000, host: true

---

## What Stays the Same

- All CSS files (copied verbatim)
- Design tokens in `app.css`
- Navigation data structure (converted from JSON to typed TS)
- Visual output — pixel-for-pixel match is the goal
- Responsive breakpoints and behavior
- Dark mode strategy (class-based on `<html>`)
- Accessibility features (skip links, ARIA, reduced motion)

## What Changes

| HTML Version | Vue Version |
|:---|:---|
| Handlebars partials | Vue SFC components |
| Alpine.js stores | Pinia stores |
| Alpine.js `x-data` components | Vue composables |
| Alpine.js `x-show`/`x-if` | `v-show`/`v-if` |
| Alpine.js `x-for` | `v-for` |
| Alpine.js `@click` | `@click` (same syntax) |
| Lucide `data-lucide` + MutationObserver | `lucide-vue-next` components |
| Chart.js direct + MutationObserver | vue-chartjs + Pinia reactivity |
| Handlebars `{{> partial}}` | `<ComponentName />` |
| Multi-page Vite (one HTML per page) | SPA with Vue Router |
| `vite-plugin-handlebars` | `@vitejs/plugin-vue` |

---

## Page Count Summary

| Category | Count |
|:---|:---|
| Dashboards | 3 |
| Widgets | 3 |
| UI Elements | 5 |
| Forms | 2 |
| Tables | 2 |
| Charts | 2 |
| Layout Demos | 10 |
| Auth Pages | 5 |
| Error Pages | 2 |
| Example Pages | 7 |
| **Total** | **41** |
