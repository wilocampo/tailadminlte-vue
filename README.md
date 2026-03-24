# TailAdminLTE Vue

**AdminLTE v4 reimagined with Vue 3 + Tailwind CSS** — A free, open-source admin dashboard template built with Vue 3, TypeScript, Pinia, and Vue Router. Clone it and build your next admin panel on top.

<p align="center">
  <img src="docs/screenshots/dashboard-v1-light.png" alt="TailAdminLTE Vue Dashboard" width="100%">
</p>

<p align="center">
  <a href="#features">Features</a> &bull;
  <a href="#screenshots">Screenshots</a> &bull;
  <a href="#quick-start">Quick Start</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="#project-structure">Project Structure</a> &bull;
  <a href="#pages">Pages</a> &bull;
  <a href="#components">Components</a> &bull;
  <a href="#dark-mode">Dark Mode</a> &bull;
  <a href="#customization">Customization</a> &bull;
  <a href="#html-version">HTML Version</a> &bull;
  <a href="#credits">Credits</a> &bull;
  <a href="#license">License</a>
</p>

---

## Features

- **41+ pages** — Dashboards, widgets, UI elements, forms, tables, charts, auth pages, error pages, layout demos, and more
- **Vue 3 Composition API** — `<script setup>` with TypeScript throughout, fully typed props and emits
- **24 reusable components** — SmallBox, InfoBox, AppCard, DirectChat, DataTable, chart wrappers, modals, alerts, and more
- **Tailwind CSS v4** — CSS-first configuration with custom design tokens via `@theme`
- **Pinia state management** — Sidebar, dark mode, layout, and accessibility stores
- **Vue Router** — SPA with nested layouts, lazy-loaded pages, and route meta
- **Chart.js + vue-chartjs** — Interactive charts with reactive dark mode color adaptation
- **Dark mode** — Three modes (Light / Dark / Auto) with `localStorage` persistence and system preference detection
- **Fully responsive** — Mobile-first design with collapsible sidebar, responsive grids, and touch-friendly interactions
- **Accessible** — WCAG 2.1 AA features: skip links, ARIA labels, keyboard navigation, reduced motion support
- **TypeScript** — Full type safety with shared interfaces, typed navigation data, and route meta
- **Fast builds** — Vite-powered dev server with HMR and optimized production builds with code splitting

---

## Screenshots

### Dashboard — Light & Dark Mode

| Light Mode | Dark Mode |
|:---:|:---:|
| ![Dashboard Light](docs/screenshots/dashboard-v1-light.png) | ![Dashboard Dark](docs/screenshots/dashboard-v1-dark.png) |

### Dashboard Variants

| Dashboard v2 | Dashboard v3 |
|:---:|:---:|
| ![Dashboard v2](docs/screenshots/dashboard-v2.png) | ![Dashboard v3](docs/screenshots/dashboard-v3.png) |

### Widgets

| Small Box Widgets | Card Widgets |
|:---:|:---:|
| ![Small Boxes](docs/screenshots/widgets-small-box.png) | ![Cards](docs/screenshots/widgets-cards.png) |

### Charts

| Chart.js Charts | Inline/Sparkline Charts |
|:---:|:---:|
| ![ChartJS](docs/screenshots/charts-chartjs.png) | ![Inline Charts](docs/screenshots/charts-inline.png) |

### UI Elements

| General UI | Buttons | Modals |
|:---:|:---:|:---:|
| ![General UI](docs/screenshots/ui-general.png) | ![Buttons](docs/screenshots/ui-buttons.png) | ![Modals](docs/screenshots/ui-modals.png) |

### Forms & Tables

| Form Elements | Data Tables |
|:---:|:---:|
| ![Forms](docs/screenshots/forms-general.png) | ![Tables](docs/screenshots/tables-data.png) |

### Auth & Example Pages

| Login v1 | Login v2 | Profile |
|:---:|:---:|:---:|
| ![Login v1](docs/screenshots/login-v1.png) | ![Login v2](docs/screenshots/login-v2.png) | ![Profile](docs/screenshots/profile.png) |

| Invoice | 404 Error | RTL Layout |
|:---:|:---:|:---:|
| ![Invoice](docs/screenshots/invoice.png) | ![404](docs/screenshots/error-404.png) | ![RTL](docs/screenshots/layout-rtl.png) |

### Mobile Responsive

<p align="center">
  <img src="docs/screenshots/mobile-view.png" alt="Mobile View" width="280">
</p>

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/wilocampo/tailadminlte-vue.git
cd tailadminlte-vue

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `dist/` directory, ready to deploy to any static hosting service (Netlify, Vercel, Cloudflare Pages, etc.).

### Preview Production Build

```bash
npm run preview
```

---

## Tech Stack

| Technology | Version | Purpose |
|:---|:---|:---|
| [Vue 3](https://vuejs.org/) | 3.5+ | UI framework with Composition API + `<script setup>` |
| [TypeScript](https://www.typescriptlang.org/) | 6.x | Type safety, self-documenting component props |
| [Vite](https://vitejs.dev/) | 8.x | Build tool and dev server with HMR |
| [Vue Router](https://router.vuejs.org/) | 5.x | SPA routing with nested layouts |
| [Pinia](https://pinia.vuejs.org/) | 3.x | State management (sidebar, dark mode, layout, accessibility) |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | CSS-first utility framework with `@theme` tokens |
| [Lucide Vue Next](https://lucide.dev/) | 1.x | 1500+ SVG icon components |
| [Chart.js](https://www.chartjs.org/) | 4.x | Interactive data visualization |
| [vue-chartjs](https://vue-chartjs.org/) | 5.x | Vue wrapper for Chart.js |

---

## Project Structure

```
src/
├── assets/
│   └── css/
│       ├── app.css                    # Tailwind v4 entry + @theme design tokens
│       ├── layout/                    # Grid: app-wrapper, header, sidebar, footer, main
│       ├── components/                # Widget CSS: cards, small-box, info-box,
│       │                              #   direct-chat, timeline, callout, toast, progress
│       └── pages/                     # Page-specific CSS: auth, lockscreen
├── components/
│   ├── layout/                        # AppHeader, AppSidebar, AppFooter, ContentHeader,
│   │                                  #   SidebarMenu, SidebarMenuItem
│   ├── widgets/                       # SmallBox, InfoBox, AppCard, DirectChat
│   ├── ui/                            # AppAlert, AppModal, AppToast, AppCallout, DarkModeToggle
│   ├── charts/                        # LineChart, BarChart, DoughnutChart, PieChart,
│   │                                  #   RadarChart, PolarAreaChart, MixedChart
│   ├── forms/                         # InputGroup
│   └── tables/                        # DataTable (sort, search, paginate)
├── composables/
│   ├── useCardWidget.ts               # Card collapse/maximize/remove logic
│   ├── useSlideToggle.ts              # Animate height open/close (jQuery-like)
│   ├── useFullscreen.ts               # Fullscreen API wrapper
│   ├── useThemeColors.ts              # Reactive chart colors for dark mode
│   └── useTodoList.ts                 # Todo state management
├── stores/
│   ├── sidebar.ts                     # useSidebarStore — open/collapse/mini/responsive
│   ├── darkMode.ts                    # useDarkModeStore — light/dark/auto
│   ├── layout.ts                      # useLayoutStore — loaded state, hold-transition
│   └── accessibility.ts               # useAccessibilityStore — reduced motion, font size
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
│                                      #   projects, contacts, e-commerce
├── data/
│   └── navigation.ts                  # Typed sidebar menu structure
├── router/
│   └── index.ts                       # Vue Router with nested layout routes
├── types/
│   └── index.ts                       # Shared TypeScript interfaces
├── App.vue                            # Root <RouterView />
└── main.ts                            # App init: createApp, Pinia, Router, Chart.js
```

---

## Pages

### Dashboards (3)
- **Dashboard v1** — Sales line chart, direct chat, visitor bar chart, small boxes, info boxes, products table
- **Dashboard v2** — Revenue/expense line chart, monthly bar chart, orders table, goal completion, quick stats
- **Dashboard v3** — Doughnut chart, interactive todo list, activity timeline, system metrics

### Widgets (3)
- **Small Box** — All color variants with icons and footer links
- **Info Box** — With and without progress bars, multiple color schemes
- **Cards** — Outlined, colored, tabbed, collapsed, loading overlay, direct chat, interactive tool buttons

### UI Elements (5)
- **General** — Alerts, badges, callouts, progress bars, spinners, dropdowns, pagination, list groups, accordion
- **Icons** — Searchable Lucide icons grid (80+ icons)
- **Timeline** — Vertical timeline with colored markers and mixed content
- **Buttons** — Solid, outline, sizes, groups, gradients, icon buttons, loading states, pill buttons
- **Modals** — Default, sized (sm/lg/xl), scrollable, centered, colored headers, form, and confirmation modals

### Forms (2)
- **General** — All input types, input groups, floating labels, checkboxes, radios, selects, horizontal/inline layouts
- **Validation** — HTML5 validation, real-time validation, password strength indicator

### Tables (2)
- **Simple** — Striped, bordered, hover, responsive, dark, colored, with action buttons
- **Data Tables** — Sortable, searchable, filterable with custom cell rendering and pagination

### Charts (2)
- **Chart.js** — Line, bar, horizontal bar, doughnut, pie, radar, polar area, mixed charts
- **Inline** — Sparkline stat cards, mini bar charts, mini doughnuts, trend lines, CSS-only charts

### Layout Variants (10)
- Default sidebar, fixed sidebar, fixed header, fixed footer, fixed complete
- Custom area (banners, toolbars), sidebar mini, collapsed sidebar, logo switch
- RTL (right-to-left) layout
- Each with interactive toggles and explanation callouts

### Auth & Error Pages (7)
- Login v1 (centered card), Login v2 (split layout with gradient panel)
- Register v1, Register v2
- Lockscreen (live clock, avatar)
- 404 Error, 500 Error

### Example Pages (7)
- User Profile (tabs: activity, timeline, settings)
- Invoice (printable, line items table)
- Image Gallery (filterable grid)
- Search Results (tabbed: all, images, news)
- Projects (card grid, status filters)
- Contacts (card grid with action buttons)
- E-Commerce (product cards, filters, sort)

---

## Components

### Widget Components

| Component | Props | Description |
|:---|:---|:---|
| `SmallBox` | `bgColor`, `value`, `label`, `icon`, `link?`, `linkText?` | KPI stat widget with large number, icon, and footer link |
| `InfoBox` | `icon`, `iconBg`, `label`, `value`, `progressValue?`, `progressColor?`, `progressDescription?` | Metric box with colored icon area and optional progress bar |
| `AppCard` | `title?`, `icon?`, `cardClass?`, `interactive?`, `collapsed?`, `loading?` | Universal card with collapse, maximize, remove, and loading overlay |
| `DirectChat` | `title`, `variant?`, `messages`, `contacts`, `badgeCount?` | Chat widget with message bubbles, input, and toggleable contacts pane |

### UI Components

| Component | Props | Description |
|:---|:---|:---|
| `AppAlert` | `variant`, `icon?`, `title?`, `dismissible?` | Inline alert with variant colors and optional dismiss |
| `AppModal` | `v-model:open`, `title`, `size?`, `centered?`, `scrollable?`, `headerClass?` | Dialog modal with backdrop, ESC close, and transitions |
| `AppToast` | `variant`, `title`, `message`, `autoDismiss?`, `delay?` | Floating notification with auto-dismiss |
| `AppCallout` | `variant`, `title?` | Contextual information block with left border accent |
| `DarkModeToggle` | — | Floating toggle button cycling light/dark/auto |

### Form & Table Components

| Component | Props | Description |
|:---|:---|:---|
| `InputGroup` | `v-model`, `type?`, `placeholder?`, `icon?`, `iconPosition?`, `disabled?` | Input with icon prefix/suffix |
| `DataTable` | `columns`, `rows`, `searchable?`, `filterable?`, `filterKey?`, `filterOptions?`, `pageSize?` | Client-side sort, search, filter, and pagination |

### Chart Components

All chart components share: `data`, `options?`, `height?` props with reactive dark mode colors.

`LineChart`, `BarChart`, `DoughnutChart`, `PieChart`, `RadarChart`, `PolarAreaChart`, `MixedChart`

---

## Dark Mode

TailAdminLTE supports three dark mode states:

| Mode | Behavior |
|:---|:---|
| **Light** | Always light theme (default) |
| **Dark** | Always dark theme |
| **Auto** | Follows system `prefers-color-scheme` preference |

Toggle via the sun/moon/monitor icon in the navbar. The preference is persisted to `localStorage` and applied instantly. All Chart.js charts reactively update their grid lines, labels, and borders when switching themes.

### Implementation

Dark mode is powered by a class-based strategy using Pinia:

```vue
<script setup>
import { useDarkModeStore } from '@/stores/darkMode'

const darkMode = useDarkModeStore()

// Toggle: light → dark → auto → light
darkMode.toggle()

// Set directly
darkMode.setMode('dark')

// Reactive access
console.log(darkMode.mode) // 'light' | 'dark' | 'auto'
</script>
```

The store toggles the `dark` class on `<html>` and persists the choice to `localStorage`.

---

## Routing

The app uses Vue Router with nested layouts. Layout components are parent routes containing `<RouterView />`:

```
/ (DefaultLayout)
├── /                          → Dashboard v1
├── /dashboard-v2              → Dashboard v2
├── /widgets/small-box         → Small Box showcase
├── /ui/general                → General UI elements
├── /charts/chartjs            → Chart.js demos
├── /examples/profile          → Profile page
└── ...34 routes total

/auth (AuthLayout)
├── /auth/login-v1             → Login centered
├── /auth/register-v1          → Register centered
└── ...5 routes total

/error (ErrorLayout)
├── /error/404                 → Not Found
└── /error/500                 → Server Error

/:pathMatch(.*)* → redirect to /error/404
```

Each route defines meta consumed by the layout:

```ts
meta: {
  activePage: 'index'        // Sidebar active item
  pageTitle: 'Dashboard v1'  // ContentHeader title
  layoutClass?: 'fixed-header' // Extra classes for layout demos
}
```

---

## Layout System

The layout uses CSS Grid matching AdminLTE v4's structure:

```css
.app-wrapper {
  display: grid;
  grid-template-areas: "sidebar header" "sidebar main" "sidebar footer";
  grid-template-rows: min-content 1fr min-content;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
}
```

### Responsive Behavior

| Breakpoint | Sidebar | Header |
|:---|:---|:---|
| < 992px (mobile) | Off-screen overlay, toggle via hamburger | Full width |
| >= 992px (desktop) | Visible, part of grid | Shares row with sidebar |
| Mini mode | Icon-only, expands on hover | Full width content |

---

## Customization

### Design Tokens

All design tokens live in `src/assets/css/app.css` via Tailwind v4's `@theme`:

```css
@theme {
  --color-primary: #0d6efd;
  --color-success: #198754;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  --sidebar-width: 250px;
  --header-height: 3.5rem;
  --transition-speed: 300ms;
  --shadow-card: 0 0 1px rgba(0,0,0,0.125), 0 1px 3px rgba(0,0,0,0.2);
  /* ... */
}
```

Change any token and it propagates globally — no rebuild needed in dev mode.

### Adding a New Page

1. Create a page component in `src/pages/`:

```vue
<!-- src/pages/custom/MyPage.vue -->
<script setup lang="ts">
import AppCard from '@/components/widgets/AppCard.vue'
</script>

<template>
  <AppCard title="My New Page">
    <p>Your content here.</p>
  </AppCard>
</template>
```

2. Add a route in `src/router/index.ts`:

```ts
{
  path: 'custom/my-page',
  component: () => import('@/pages/custom/MyPage.vue'),
  meta: { activePage: 'custom-my-page', pageTitle: 'My Page' },
}
```

3. Optionally add a sidebar item in `src/data/navigation.ts`:

```ts
{ label: 'My Page', href: '/custom/my-page', activePage: 'custom-my-page' }
```

### Using Components

```vue
<script setup lang="ts">
import SmallBox from '@/components/widgets/SmallBox.vue'
import InfoBox from '@/components/widgets/InfoBox.vue'
import AppCard from '@/components/widgets/AppCard.vue'
import DataTable from '@/components/tables/DataTable.vue'
import type { DataColumn } from '@/types'
</script>

<template>
  <!-- KPI stat box -->
  <SmallBox bg-color="bg-primary" value="1,234" label="New Orders" icon="shopping-cart" />

  <!-- Metric with progress -->
  <InfoBox icon="mail" icon-bg="bg-primary" label="Messages" value="1,410"
    :progress-value="70" progress-color="bg-primary" progress-description="70% increase" />

  <!-- Interactive card -->
  <AppCard title="Sales Report" icon="bar-chart-3" interactive>
    <p>Card content here</p>
    <template #footer>
      <span>Updated 5 mins ago</span>
    </template>
  </AppCard>

  <!-- Data table with search and pagination -->
  <DataTable :columns="columns" :rows="data" searchable :page-size="10">
    <template #cell-status="{ value }">
      <span class="px-2 py-1 rounded text-xs" :class="value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
        {{ value }}
      </span>
    </template>
  </DataTable>
</template>
```

---

## Pinia Stores

| Store | State | Actions |
|:---|:---|:---|
| `useSidebarStore` | `open`, `mini`, `breakpoint` | `toggle()`, `expand()`, `collapse()`, `close()`, `menusClose()` |
| `useDarkModeStore` | `mode` | `toggle()`, `setMode(mode)`, `apply()` |
| `useLayoutStore` | `loaded` | Auto-initializes with hold-transition and app-loaded class |
| `useAccessibilityStore` | `reducedMotion`, `highContrast`, `fontSize` | `toggleHighContrast()`, `setFontSize(size)`, `announce(message)` |

## Composables

| Composable | Purpose |
|:---|:---|
| `useSlideToggle(elementRef)` | jQuery-like slideUp/slideDown/slideToggle animations |
| `useCardWidget(cardRef, bodyRef, footerRef, options?)` | Card collapse/maximize/remove with CSS class management |
| `useFullscreen()` | Fullscreen API wrapper with reactive `isFullscreen` state |
| `useThemeColors()` | Reactive `gridColor`, `labelColor`, `borderColor` for Chart.js dark mode |
| `useTodoList(initialItems?)` | Todo CRUD with filter/remaining computed values |

---

## Comparison with HTML Version

This is the **Vue 3 SPA** version of TailAdminLTE. An HTML multi-page version also exists:

| | [HTML Version](https://github.com/wilocampo/tailadminlte) | Vue Version (this repo) |
|:---|:---|:---|
| **Framework** | Alpine.js + Handlebars | Vue 3 + TypeScript |
| **Routing** | Multi-page (one HTML per page) | SPA with Vue Router |
| **State** | Alpine.js stores | Pinia stores |
| **Components** | Handlebars partials | Vue SFC components |
| **Interactivity** | Alpine.js `x-data` | Vue Composition API |
| **Icons** | Lucide `data-lucide` + MutationObserver | `lucide-vue-next` components |
| **Charts** | Chart.js direct + MutationObserver | vue-chartjs + Pinia reactivity |
| **Type safety** | None | Full TypeScript |
| **CSS** | Identical | Identical (copied verbatim) |
| **Visual output** | Identical | Identical |

Both versions share the same CSS files and produce pixel-for-pixel identical visual output.

---

## Browser Support

- Chrome / Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari / Chrome (iOS & Android)

---

## Credits

TailAdminLTE is a **community recreation** of [AdminLTE](https://adminlte.io/) using Tailwind CSS. This project would not exist without the incredible work of the AdminLTE team.

### AdminLTE

- **Original project:** [AdminLTE v4](https://github.com/ColorlibHQ/AdminLTE) by [ColorlibHQ](https://github.com/ColorlibHQ)
- **Website:** [https://adminlte.io](https://adminlte.io)
- **License:** MIT

AdminLTE is one of the most popular open-source admin dashboard templates, with 45k+ GitHub stars. It has been the go-to choice for developers building admin panels since 2013. TailAdminLTE aims to bring that same comprehensive component set to the Tailwind CSS ecosystem.

### Technologies

- [Vue 3](https://vuejs.org/) by Evan You & the Vue team
- [Tailwind CSS](https://tailwindcss.com/) by Adam Wathan & the Tailwind Labs team
- [Vite](https://vitejs.dev/) by Evan You & the Vite team
- [Pinia](https://pinia.vuejs.org/) by Eduardo San Martin Morote
- [Vue Router](https://router.vuejs.org/) by Eduardo San Martin Morote
- [Chart.js](https://www.chartjs.org/) by the Chart.js contributors
- [vue-chartjs](https://vue-chartjs.org/) by Jakub Juszczak
- [Lucide Icons](https://lucide.dev/) by the Lucide community
- [Inter font](https://rsms.me/inter/) by Rasmus Andersson

### Disclaimer

TailAdminLTE is an **independent project** and is not officially affiliated with or endorsed by AdminLTE or ColorlibHQ. The original AdminLTE design, layout concepts, and page structure are the intellectual property of their respective creators. This project recreates similar functionality using different underlying technologies as a learning resource and alternative implementation.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

The original AdminLTE is also licensed under [MIT](https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE).
