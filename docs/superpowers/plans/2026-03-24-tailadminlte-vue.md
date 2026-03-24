# TailAdminLTE Vue Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recreate the TailAdminLTE HTML admin template as a Vue 3 SPA with reusable TypeScript components, achieving pixel-for-pixel visual parity.

**Architecture:** Vue 3 + Composition API with `<script setup>`, Pinia stores replacing Alpine.js stores, Vue Router nested layouts replacing Handlebars layouts, and all original CSS files copied verbatim. Components map 1:1 from Handlebars partials.

**Tech Stack:** Vue 3.5+, TypeScript 5.x, Vite 6.x, Vue Router 4.x, Pinia 2.x, Tailwind CSS v4, lucide-vue-next, vue-chartjs + chart.js 4.x

**Spec:** `docs/superpowers/specs/2026-03-24-tailadminlte-vue-design.md`

**Source HTML project:** `/var/www/vhosts/tailadminlte.local/web-html/src/`

---

## File Map

### Foundation
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html` (SPA entry)
- Create: `.gitignore`
- Create: `env.d.ts`

### CSS (copied from HTML project)
- Copy: `src/assets/css/app.css` (from `web-html/src/css/app.css`)
- Copy: `src/assets/css/layout/*.css` (5 files)
- Copy: `src/assets/css/components/*.css` (8 files)
- Copy: `src/assets/css/pages/*.css` (2 files)

### Public assets (copied from HTML project)
- Copy: `public/assets/img/*` (all images)

### Types & Data
- Create: `src/types/index.ts`
- Create: `src/data/navigation.ts`

### Stores
- Create: `src/stores/darkMode.ts`
- Create: `src/stores/sidebar.ts`
- Create: `src/stores/layout.ts`
- Create: `src/stores/accessibility.ts`

### Composables
- Create: `src/composables/useSlideToggle.ts`
- Create: `src/composables/useCardWidget.ts`
- Create: `src/composables/useFullscreen.ts`
- Create: `src/composables/useThemeColors.ts`
- Create: `src/composables/useTodoList.ts`

### Layout Components
- Create: `src/components/layout/AppFooter.vue`
- Create: `src/components/layout/ContentHeader.vue`
- Create: `src/components/layout/SidebarMenuItem.vue`
- Create: `src/components/layout/SidebarMenu.vue`
- Create: `src/components/layout/AppSidebar.vue`
- Create: `src/components/layout/AppHeader.vue`

### Widget Components
- Create: `src/components/widgets/SmallBox.vue`
- Create: `src/components/widgets/InfoBox.vue`
- Create: `src/components/widgets/AppCard.vue`
- Create: `src/components/widgets/DirectChat.vue`

### UI Components
- Create: `src/components/ui/AppAlert.vue`
- Create: `src/components/ui/AppCallout.vue`
- Create: `src/components/ui/AppToast.vue`
- Create: `src/components/ui/AppModal.vue`
- Create: `src/components/ui/DarkModeToggle.vue`

### Form Components
- Create: `src/components/forms/InputGroup.vue`

### Table Components
- Create: `src/components/tables/DataTable.vue`

### Chart Components
- Create: `src/components/charts/LineChart.vue`
- Create: `src/components/charts/BarChart.vue`
- Create: `src/components/charts/DoughnutChart.vue`
- Create: `src/components/charts/PieChart.vue`
- Create: `src/components/charts/RadarChart.vue`
- Create: `src/components/charts/PolarAreaChart.vue`
- Create: `src/components/charts/MixedChart.vue`

### Layouts
- Create: `src/layouts/DefaultLayout.vue`
- Create: `src/layouts/AuthLayout.vue`
- Create: `src/layouts/ErrorLayout.vue`

### App Shell
- Create: `src/App.vue`
- Create: `src/main.ts`
- Create: `src/router/index.ts`

### Pages (41 total)
- Create: `src/pages/dashboard/DashboardV1.vue`
- Create: `src/pages/dashboard/DashboardV2.vue`
- Create: `src/pages/dashboard/DashboardV3.vue`
- Create: `src/pages/widgets/SmallBoxPage.vue`
- Create: `src/pages/widgets/InfoBoxPage.vue`
- Create: `src/pages/widgets/CardsPage.vue`
- Create: `src/pages/ui/GeneralPage.vue`
- Create: `src/pages/ui/IconsPage.vue`
- Create: `src/pages/ui/TimelinePage.vue`
- Create: `src/pages/ui/ButtonsPage.vue`
- Create: `src/pages/ui/ModalsPage.vue`
- Create: `src/pages/forms/GeneralFormsPage.vue`
- Create: `src/pages/forms/ValidationFormsPage.vue`
- Create: `src/pages/tables/SimpleTablesPage.vue`
- Create: `src/pages/tables/DataTablesPage.vue`
- Create: `src/pages/charts/ChartJsPage.vue`
- Create: `src/pages/charts/InlinePage.vue`
- Create: `src/pages/layout/FixedSidebarPage.vue`
- Create: `src/pages/layout/FixedHeaderPage.vue`
- Create: `src/pages/layout/FixedFooterPage.vue`
- Create: `src/pages/layout/FixedCompletePage.vue`
- Create: `src/pages/layout/CollapsedSidebarPage.vue`
- Create: `src/pages/layout/SidebarMiniPage.vue`
- Create: `src/pages/layout/UnfixedSidebarPage.vue`
- Create: `src/pages/layout/CustomAreaPage.vue`
- Create: `src/pages/layout/LogoSwitchPage.vue`
- Create: `src/pages/layout/RtlPage.vue`
- Create: `src/pages/examples/LoginV1.vue`
- Create: `src/pages/examples/LoginV2.vue`
- Create: `src/pages/examples/RegisterV1.vue`
- Create: `src/pages/examples/RegisterV2.vue`
- Create: `src/pages/examples/Lockscreen.vue`
- Create: `src/pages/examples/Error404.vue`
- Create: `src/pages/examples/Error500.vue`
- Create: `src/pages/examples/ProfilePage.vue`
- Create: `src/pages/examples/InvoicePage.vue`
- Create: `src/pages/examples/GalleryPage.vue`
- Create: `src/pages/examples/SearchPage.vue`
- Create: `src/pages/examples/ProjectsPage.vue`
- Create: `src/pages/examples/ContactsPage.vue`
- Create: `src/pages/examples/ECommercePage.vue`

---

## Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html`
- Create: `.gitignore`
- Create: `env.d.ts`
- Create: `src/App.vue` (minimal placeholder)
- Create: `src/main.ts` (minimal placeholder)

- [ ] **Step 1: Initialize git and create package.json**

```bash
cd /var/www/vhosts/tailadminlte.local/web
git init
```

Create `package.json`:
```json
{
  "name": "tailadminlte-vue",
  "version": "1.0.0",
  "description": "AdminLTE v4 recreated with Vue 3 and Tailwind CSS",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
npm install vue@latest vue-router@latest pinia@latest chart.js vue-chartjs lucide-vue-next
npm install -D typescript vite @vitejs/plugin-vue @tailwindcss/vite tailwindcss vue-tsc @vue/tsconfig @tsconfig/node22
```

- [ ] **Step 3: Create TypeScript config files**

Create `tsconfig.json`:
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

Create `tsconfig.app.json`:
```json
{
  "extends": "@vue/tsconfig/tsconfig.dom.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"]
}
```

Create `tsconfig.node.json`:
```json
{
  "extends": "@tsconfig/node22/tsconfig.json",
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo"
  },
  "include": ["vite.config.*"]
}
```

Create `env.d.ts`:
```ts
/// <reference types="vite/client" />
```

- [ ] **Step 4: Create vite.config.ts**

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@css': resolve(__dirname, 'src/assets/css'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
```

- [ ] **Step 5: Create index.html (SPA entry point)**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TailAdminLTE</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

- [ ] **Step 6: Create minimal App.vue and main.ts**

Create `src/App.vue`:
```vue
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>
```

Create `src/main.ts`:
```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/css/app.css'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

- [ ] **Step 7: Create .gitignore**

```
node_modules
dist
*.local
.DS_Store
*.tsbuildinfo
.superpowers
```

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vue 3 + TypeScript + Vite project"
```

---

## Task 2: Copy CSS and Public Assets

**Files:**
- Copy: `src/assets/css/` (all CSS from HTML project)
- Copy: `public/assets/img/` (all images from HTML project)

**Source reference:** `web-html/src/css/` and `web-html/public/`

- [ ] **Step 1: Copy all CSS files preserving directory structure**

```bash
cd /var/www/vhosts/tailadminlte.local/web
mkdir -p src/assets/css/layout src/assets/css/components src/assets/css/pages
cp ../web-html/src/css/app.css src/assets/css/
cp ../web-html/src/css/layout/*.css src/assets/css/layout/
cp ../web-html/src/css/components/*.css src/assets/css/components/
cp ../web-html/src/css/pages/*.css src/assets/css/pages/
```

- [ ] **Step 2: Update CSS import paths in app.css**

The HTML project's `app.css` imports files with relative paths. Verify these resolve correctly from `src/assets/css/app.css`. The relative imports (`./layout/app-wrapper.css`, `./components/cards.css`, etc.) should work as-is since the directory structure is preserved.

Read `src/assets/css/app.css` to verify all `@import` paths are correct.

- [ ] **Step 3: Copy public assets (images)**

```bash
mkdir -p public/assets/img
cp ../web-html/public/assets/img/* public/assets/img/
```

- [ ] **Step 4: Verify dev server starts**

```bash
cd /var/www/vhosts/tailadminlte.local/web
npx vite --host 2>&1 | head -20
```

Expected: Server starts on port 3000 without CSS import errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: copy CSS files and public image assets from HTML project"
```

---

## Task 3: Types and Navigation Data

**Files:**
- Create: `src/types/index.ts`
- Create: `src/data/navigation.ts`

**Source reference:** `web-html/src/data/navigation.json` and spec's "Shared Type Definitions" section

- [ ] **Step 1: Create shared type definitions**

Create `src/types/index.ts` with all interfaces from the spec:
- `NavigationItem`, `NavigationSection`
- `ChatMessage`, `ChatContact`
- `TodoItem`
- `DataColumn` (for DataTable)
- Route meta type augmentation for Vue Router

Include Vue Router meta type augmentation:
```ts
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    activePage?: string
    pageTitle?: string
    layoutClass?: string
  }
}
```

- [ ] **Step 2: Create navigation data**

Create `src/data/navigation.ts`. Convert `web-html/src/data/navigation.json` to typed TypeScript:
- Change all `href` values from `/pages/path.html` to Vue Router paths (e.g., `/pages/index.html` → `/`)
- ADD missing `activePage` values for widget items: `widgets-small-box`, `widgets-info-box`, `widgets-cards`
- Export as `export const navigation: NavigationSection[]`

Use the route table from the spec to map each `href` to the correct Vue route path.

- [ ] **Step 3: Commit**

```bash
git add src/types/index.ts src/data/navigation.ts
git commit -m "feat: add TypeScript type definitions and navigation data"
```

---

## Task 4: Pinia Stores

**Files:**
- Create: `src/stores/darkMode.ts`
- Create: `src/stores/sidebar.ts`
- Create: `src/stores/layout.ts`
- Create: `src/stores/accessibility.ts`

**Source reference:**
- `web-html/src/js/stores/darkMode.js`
- `web-html/src/js/stores/sidebar.js`
- `web-html/src/js/stores/layout.js`
- `web-html/src/js/stores/accessibility.js`

- [ ] **Step 1: Create useDarkModeStore**

Create `src/stores/darkMode.ts`. Port the Alpine.js darkMode store to Pinia `defineStore` with setup syntax:
- State: `mode` (ref, 'light' | 'dark' | 'auto')
- Actions: `toggle()`, `setMode()`, `apply()`
- On init: load from `localStorage` key `theme`, listen to `prefers-color-scheme` media query
- `apply()` toggles `.dark` class on `document.documentElement`

Read `web-html/src/js/stores/darkMode.js` for exact logic.

- [ ] **Step 2: Create useSidebarStore**

Create `src/stores/sidebar.ts`. Port the Alpine.js sidebar store:
- State: `open`, `mini`, `breakpoint` (992), `_wasMobile`, `_userToggled`
- Actions: `toggle()`, `expand()`, `collapse()`, `close()`, `menusClose()`
- `init()`: detect breakpoint, set initial state based on window width, add resize listener
- CSS class manipulation on `document.body`: `sidebar-collapse`, `sidebar-open`, `sidebar-mini`

Read `web-html/src/js/stores/sidebar.js` for exact logic.

- [ ] **Step 3: Create useLayoutStore**

Create `src/stores/layout.ts`. Port the Alpine.js layout store:
- State: `loaded`
- On init: set `app-loaded` class after 400ms, add resize listener with `hold-transition` class during resize (debounced 400ms)

Read `web-html/src/js/stores/layout.js` for exact logic.

- [ ] **Step 4: Create useAccessibilityStore**

Create `src/stores/accessibility.ts`. Port the Alpine.js accessibility store:
- State: `reducedMotion`, `highContrast`, `fontSize`
- Actions: `toggleHighContrast()`, `setFontSize()`, `announce()`
- Persistence: `localStorage` JSON
- CSS classes on `<html>`: `high-contrast`, `font-size-*`, `reduced-motion`

Read `web-html/src/js/stores/accessibility.js` for exact logic.

- [ ] **Step 5: Commit**

```bash
git add src/stores/
git commit -m "feat: add Pinia stores (darkMode, sidebar, layout, accessibility)"
```

---

## Task 5: Composables

**Files:**
- Create: `src/composables/useSlideToggle.ts`
- Create: `src/composables/useCardWidget.ts`
- Create: `src/composables/useFullscreen.ts`
- Create: `src/composables/useThemeColors.ts`
- Create: `src/composables/useTodoList.ts`

**Source reference:**
- `web-html/src/js/utils/slideToggle.js`
- `web-html/src/js/components/cardWidget.js`
- `web-html/src/js/components/fullscreen.js`
- `web-html/src/js/components/todoList.js`

- [ ] **Step 1: Create useSlideToggle**

Create `src/composables/useSlideToggle.ts`. Port `slideToggle.js`:
- Takes `elementRef: Ref<HTMLElement | null>`
- Returns `{ slideUp, slideDown, slideToggle }`
- Animates height, padding-top/bottom, margin-top/bottom using CSS transitions
- Handles abort on rapid calls via `_slideAbort` stored on element
- Uses `transitionend` event with fallback timer

Read `web-html/src/js/utils/slideToggle.js` for the complete animation logic.

- [ ] **Step 2: Create useCardWidget**

Create `src/composables/useCardWidget.ts`. Port `cardWidget.js`:
- Takes `cardRef`, `bodyRef`, `footerRef`, and optional `CardWidgetOptions`
- Returns `{ collapsed, maximized, toggleCollapse, toggleMaximize, remove }`
- Uses `useSlideToggle` internally for body/footer slide animations
- CSS class side effects: `collapsed-card`, `collapsing-card`, `expanding-card`, `maximized-card`, `was-collapsed`
- `toggleMaximize` also toggles `maximized-card` on `document.documentElement`

Read `web-html/src/js/components/cardWidget.js` for exact logic.

- [ ] **Step 3: Create useFullscreen**

Create `src/composables/useFullscreen.ts`. Port `fullscreen.js`:
- Returns `{ isFullscreen, toggle }`
- Uses `document.fullscreenElement`, `requestFullscreen()`, `exitFullscreen()`
- Listens to `fullscreenchange` event to sync state

Read `web-html/src/js/components/fullscreen.js` for exact logic.

- [ ] **Step 4: Create useThemeColors**

Create `src/composables/useThemeColors.ts`:
- Imports `useDarkModeStore`
- Returns computed refs: `gridColor`, `labelColor`, `borderColor`
- Dark: `rgba(255,255,255,0.1)`, `#94a3b8`, `#334155`
- Light: `rgba(0,0,0,0.1)`, `#6b7280`, `#e5e7eb`

Reference: look at the Chart.js `themeColors()` function in `web-html/src/pages/index.html` for exact color values.

- [ ] **Step 5: Create useTodoList**

Create `src/composables/useTodoList.ts`. Port `todoList.js`:
- Takes optional `initialItems: TodoItem[]`
- Returns `{ items, filtered, remaining, filter, newItem, addItem, removeItem, toggleItem, clearCompleted }`
- `filtered` is computed based on `filter` value
- `remaining` counts items where `done === false`

Read `web-html/src/js/components/todoList.js` for exact logic.

- [ ] **Step 6: Commit**

```bash
git add src/composables/
git commit -m "feat: add composables (slideToggle, cardWidget, fullscreen, themeColors, todoList)"
```

---

## Task 6: Simple Layout Components

**Files:**
- Create: `src/components/layout/AppFooter.vue`
- Create: `src/components/layout/ContentHeader.vue`
- Create: `src/components/ui/DarkModeToggle.vue`

**Source reference:**
- `web-html/src/partials/footer/footer.html`
- `web-html/src/partials/content/content-header.html`
- `web-html/src/partials/ui/dark-mode-toggle.html`

- [ ] **Step 1: Create AppFooter**

Create `src/components/layout/AppFooter.vue`. Convert from `web-html/src/partials/footer/footer.html`:
- Grid area: `app-footer`
- Copyright text and version display
- No props needed

- [ ] **Step 2: Create ContentHeader**

Create `src/components/layout/ContentHeader.vue`. Convert from `web-html/src/partials/content/content-header.html`:
- Props: `title: string`
- Auto-derives breadcrumbs: "Home" RouterLink to `/` + current title
- Uses `.app-content-header` and `.breadcrumb` CSS classes

- [ ] **Step 3: Create DarkModeToggle**

Create `src/components/ui/DarkModeToggle.vue`. Convert from `web-html/src/partials/ui/dark-mode-toggle.html`:
- No props — uses `useDarkModeStore` internally
- Shows sun (light), moon (dark), or monitor (auto) lucide icon
- Calls `store.toggle()` on click

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/AppFooter.vue src/components/layout/ContentHeader.vue src/components/ui/DarkModeToggle.vue
git commit -m "feat: add AppFooter, ContentHeader, and DarkModeToggle components"
```

---

## Task 7: Sidebar Components

**Files:**
- Create: `src/components/layout/SidebarMenuItem.vue`
- Create: `src/components/layout/SidebarMenu.vue`
- Create: `src/components/layout/AppSidebar.vue`

**Source reference:**
- `web-html/src/partials/sidebar/sidebar.html`
- `web-html/src/js/components/treeview.js`
- `web-html/src/data/navigation.json`

- [ ] **Step 1: Create SidebarMenuItem**

Create `src/components/layout/SidebarMenuItem.vue`:
- Props: `item: NavigationItem`, `activePage: string`, `accordion?: boolean` (default true)
- Renders `<li class="nav-item">` with `<a class="nav-link">` and lucide icon
- If `item.children` exists: renders as treeview parent with chevron-right arrow icon
- Recursively renders children as `<SidebarMenuItem>` inside `<ul class="nav-treeview">`
- Uses `useSlideToggle` for expand/collapse animation on the `<ul>`
- Adds `menu-open` class and `style="display: block"` when item or child is active
- Arrow rotates 90deg when open (CSS handles this via `.menu-open`)
- For leaf items (no children): uses `<RouterLink>` with `item.href`
- Emits `menu-toggle` for accordion behavior

Read `web-html/src/js/components/treeview.js` for the toggle/open/close/accordion logic.
Read `web-html/src/partials/sidebar/sidebar.html` for the exact HTML structure and CSS classes.

- [ ] **Step 2: Create SidebarMenu**

Create `src/components/layout/SidebarMenu.vue`:
- Props: `sections: NavigationSection[]`, `activePage: string`
- Wraps everything in `<nav class="sidebar-nav">`
- For each section: renders `<p class="nav-header">{{ section.header }}</p>` then `<ul class="sidebar-menu">` with `<SidebarMenuItem>` for each item

- [ ] **Step 3: Create AppSidebar**

Create `src/components/layout/AppSidebar.vue`:
- Props: `activePage: string`
- Imports `navigation` from `@/data/navigation`
- Renders sidebar brand area with logo image and "TailAdmin**LTE**" text (RouterLink to `/`)
- Renders `<SidebarMenu :sections="navigation" :active-page="activePage" />`
- Renders sidebar overlay div that calls `sidebarStore.close()` on click
- Uses `useSidebarStore` for state

Read `web-html/src/partials/sidebar/sidebar.html` for the complete HTML structure.

- [ ] **Step 4: Commit**

```bash
git add src/components/layout/SidebarMenuItem.vue src/components/layout/SidebarMenu.vue src/components/layout/AppSidebar.vue
git commit -m "feat: add sidebar components with recursive treeview navigation"
```

---

## Task 8: AppHeader Component

**Files:**
- Create: `src/components/layout/AppHeader.vue`

**Source reference:** `web-html/src/partials/header/navbar.html`

- [ ] **Step 1: Create AppHeader**

Create `src/components/layout/AppHeader.vue`. This is the most complex layout component. Convert from `web-html/src/partials/header/navbar.html`:

**Left section:**
- Sidebar toggle button (hamburger icon) — calls `sidebarStore.toggle()`
- Home and Contact nav links (hidden on mobile with `hidden lg:flex`)

**Right section (7 items, each a dropdown with `v-show` and `@click.away`):**
1. Search dropdown with input form
2. Dark mode toggle (sun/moon/monitor icons) — calls `darkModeStore.toggle()`
3. Messages dropdown (4 hardcoded messages with avatars) — badge shows "4"
4. Notifications dropdown (3 items) — badge shows "15"
5. Fullscreen toggle (hidden on mobile) — uses `useFullscreen()`
6. User menu dropdown (avatar, profile/settings/sign out links)

Each dropdown uses:
```vue
const searchOpen = ref(false)
const messagesOpen = ref(false)
// etc.
```

With `v-show="searchOpen"`, `@click="searchOpen = !searchOpen"`, and `@click.away` equivalent using a click-outside pattern (or `v-if` with `@click.self` on backdrop).

Note: Vue doesn't have `@click.away` natively. **Use the invisible backdrop overlay pattern** (no custom directive needed):
```vue
<div v-show="open" @click="open = false" class="fixed inset-0 z-0"></div>
<div v-show="open" class="dropdown-menu relative z-10">...</div>
```
The invisible full-screen overlay catches clicks outside the dropdown. This is simpler than a custom directive and matches how the HTML version's dropdowns behave.

Read `web-html/src/partials/header/navbar.html` for the complete HTML structure, dropdown contents, and CSS classes.

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/AppHeader.vue
git commit -m "feat: add AppHeader with search, dark mode, messages, notifications, fullscreen, user menu"
```

---

## Task 9: Widget Components

**Files:**
- Create: `src/components/widgets/SmallBox.vue`
- Create: `src/components/widgets/InfoBox.vue`
- Create: `src/components/widgets/AppCard.vue`
- Create: `src/components/widgets/DirectChat.vue`

**Source reference:**
- `web-html/src/partials/widgets/small-box.html`
- `web-html/src/partials/widgets/info-box.html`
- `web-html/src/partials/widgets/card.html`
- `web-html/src/partials/widgets/direct-chat.html`
- `web-html/src/js/components/cardWidget.js`
- `web-html/src/js/components/directChat.js`

- [ ] **Step 1: Create SmallBox**

Create `src/components/widgets/SmallBox.vue`:
- Props: `bgColor`, `value`, `label`, `icon`, `link?`, `linkText?`
- Uses `.small-box` CSS classes from copied CSS
- Icon rendered with lucide-vue-next component
- Footer link uses `<RouterLink>` if `link` is provided

Read `web-html/src/partials/widgets/small-box.html` for exact HTML structure.

- [ ] **Step 2: Create InfoBox**

Create `src/components/widgets/InfoBox.vue`:
- Props: `icon`, `iconBg`, `label`, `value`, `progressValue?`, `progressColor?`, `progressDescription?`
- Uses `.info-box` CSS classes
- Conditionally renders progress bar section when `progressValue` is provided

Read `web-html/src/partials/widgets/info-box.html` for exact HTML structure.

- [ ] **Step 3: Create AppCard**

Create `src/components/widgets/AppCard.vue`:
- Props: `title?`, `icon?`, `cardClass?`, `interactive?`, `collapsed?`, `loading?`
- Slots: `default` (body), `#header`, `#footer`, `#tools`
- Uses `useCardWidget` composable when `interactive` is true
- Tool buttons: collapse (chevron), maximize (expand), remove (x)
- Template refs for `cardRef`, `bodyRef`, `footerRef`
- Loading overlay with spinner when `loading` is true

Read `web-html/src/partials/widgets/card.html` and `web-html/src/js/components/cardWidget.js` for exact structure and behavior.

- [ ] **Step 4: Create DirectChat**

Create `src/components/widgets/DirectChat.vue`:
- Props: `title`, `variant?`, `messages: ChatMessage[]`, `contacts: ChatContact[]`, `badgeCount?`
- Emits: `send`
- Internal state: `contactsOpen`, `inputText`
- Wraps in AppCard with custom tools slot (contacts toggle button)
- Message bubbles: left/right based on `message.side`
- Contacts pane: absolutely positioned overlay, toggled by `contactsOpen`
- Input area: text input + send button

Read `web-html/src/partials/widgets/direct-chat.html` and `web-html/src/js/components/directChat.js` for exact structure.

- [ ] **Step 5: Commit**

```bash
git add src/components/widgets/
git commit -m "feat: add widget components (SmallBox, InfoBox, AppCard, DirectChat)"
```

---

## Task 10: UI Components

**Files:**
- Create: `src/components/ui/AppAlert.vue`
- Create: `src/components/ui/AppCallout.vue`
- Create: `src/components/ui/AppToast.vue`
- Create: `src/components/ui/AppModal.vue`
- Create: `src/components/forms/InputGroup.vue`

**Source reference:**
- `web-html/src/partials/ui/alert.html`
- `web-html/src/partials/ui/callout.html`
- `web-html/src/partials/ui/toast.html`
- `web-html/src/partials/ui/modal.html`

- [ ] **Step 1: Create AppAlert**

Create `src/components/ui/AppAlert.vue`:
- Props: `variant`, `icon?`, `title?`, `dismissible?`
- Slot: `default` (message content)
- Internal state: `visible` ref (for dismissible)
- Variant maps to Tailwind border/bg/text color classes

Read `web-html/src/partials/ui/alert.html` for exact HTML structure and classes.

- [ ] **Step 2: Create AppCallout**

Create `src/components/ui/AppCallout.vue`:
- Props: `variant`, `title?`
- Slot: `default`
- Uses `.callout` and `.callout-{variant}` CSS classes

Read `web-html/src/partials/ui/callout.html` for exact HTML structure.

- [ ] **Step 3: Create AppToast**

Create `src/components/ui/AppToast.vue`:
- Props: `variant`, `title`, `message`, `autoDismiss?`, `delay?` (default 5000)
- Emits: `close`
- Internal: `visible` ref, auto-dismiss timer via `setTimeout` + `onUnmounted` cleanup
- Uses `.toast` CSS classes with show/hide transitions

Read `web-html/src/partials/ui/toast.html` for exact HTML structure and animation.

- [ ] **Step 4: Create AppModal**

Create `src/components/ui/AppModal.vue`:
- Props: `open` (v-model:open), `title`, `size?`, `centered?`, `scrollable?`, `headerClass?`
- Slots: `default` (body), `#footer`
- Uses `<Teleport to="body">`
- Backdrop: `@click.self` closes modal
- Keyboard: listen for ESC key via `onMounted`/`onUnmounted` event listener
- Vue `<Transition>` for enter/leave animation
- Size maps: `sm` → `max-w-sm`, `md` → `max-w-lg`, `lg` → `max-w-2xl`, `xl` → `max-w-4xl`

Read `web-html/src/partials/ui/modal.html` for exact HTML structure, z-indexes, and transitions.

- [ ] **Step 5: Create InputGroup**

Create `src/components/forms/InputGroup.vue`:
- Props: `modelValue`, `type?`, `placeholder?`, `icon?`, `iconPosition?`, `disabled?`
- Emits: `update:modelValue`
- Uses `.auth-input-group` CSS pattern from auth.css

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/ src/components/forms/
git commit -m "feat: add UI components (Alert, Callout, Toast, Modal) and InputGroup"
```

---

## Task 11: DataTable Component

**Files:**
- Create: `src/components/tables/DataTable.vue`

**Source reference:** `web-html/src/pages/tables/data.html` (the Alpine.js inline implementation)

- [ ] **Step 1: Create DataTable**

Create `src/components/tables/DataTable.vue`:
- Props: `columns: DataColumn[]`, `rows`, `searchable?`, `filterable?`, `filterKey?`, `filterOptions?`, `pageSize?`
- Slots: `#cell-{key}` (dynamic slot per column), `#empty`
- Internal state: `sortKey`, `sortDir`, `searchQuery`, `filterValue`, `currentPage`
- Computed: `filteredRows` (apply search + filter), `sortedRows` (apply sort), `pagedRows` (apply pagination), `totalPages`
- Sort: click column header toggles asc/desc, shows chevron-up/chevron-down icon
- Search: input filters across all columns (case-insensitive string match)
- Filter: select dropdown filters by exact match on `filterKey` column
- Pagination: prev/next buttons with page numbers

Read `web-html/src/pages/tables/data.html` for the Alpine.js implementation to port.

- [ ] **Step 2: Commit**

```bash
git add src/components/tables/DataTable.vue
git commit -m "feat: add DataTable component with sort, search, filter, pagination"
```

---

## Task 12: Chart Components

**Files:**
- Create: `src/components/charts/LineChart.vue`
- Create: `src/components/charts/BarChart.vue`
- Create: `src/components/charts/DoughnutChart.vue`
- Create: `src/components/charts/PieChart.vue`
- Create: `src/components/charts/RadarChart.vue`
- Create: `src/components/charts/PolarAreaChart.vue`

**Source reference:** `web-html/src/pages/charts/chartjs.html`

- [ ] **Step 1: Create chart wrapper components**

All chart components follow the same pattern — thin wrappers around vue-chartjs with dark mode reactivity:

```vue
<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { computed } from 'vue'
import { useThemeColors } from '@/composables/useThemeColors'
import type { ChartData, ChartOptions } from 'chart.js'

const props = defineProps<{
  data: ChartData<'line'>
  options?: ChartOptions<'line'>
  height?: number
}>()

const { gridColor, labelColor, borderColor } = useThemeColors()

const mergedOptions = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { color: gridColor.value },
      ticks: { color: labelColor.value },
      border: { color: borderColor.value },
    },
    y: {
      grid: { color: gridColor.value },
      ticks: { color: labelColor.value },
      border: { color: borderColor.value },
    },
  },
  plugins: {
    legend: { labels: { color: labelColor.value } },
  },
  ...props.options,
}))
</script>

<template>
  <div :style="height ? { height: height + 'px' } : {}">
    <Line :data="data" :options="mergedOptions" />
  </div>
</template>
```

Create the same pattern for each chart type:
- `LineChart.vue` — uses `Line` from vue-chartjs
- `BarChart.vue` — uses `Bar` from vue-chartjs
- `DoughnutChart.vue` — uses `Doughnut` (no scale options needed)
- `PieChart.vue` — uses `Pie` (no scale options needed)
- `RadarChart.vue` — uses `Radar` (radial scale)
- `PolarAreaChart.vue` — uses `PolarArea` (radial scale)
- `MixedChart.vue` — uses `Bar` from vue-chartjs (Chart.js mixed charts use bar type with per-dataset `type` overrides, e.g., `{ type: 'line', data: [...] }` within a bar chart)

Register Chart.js components globally in `main.ts`:
```ts
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
```

- [ ] **Step 2: Commit**

```bash
git add src/components/charts/ src/main.ts
git commit -m "feat: add chart components with dark mode reactivity"
```

---

## Task 13: Layout Components and Router

**Files:**
- Create: `src/layouts/DefaultLayout.vue`
- Create: `src/layouts/AuthLayout.vue`
- Create: `src/layouts/ErrorLayout.vue`
- Create: `src/router/index.ts`
- Modify: `src/main.ts` (add router)

**Source reference:**
- `web-html/src/layouts/default.html`
- `web-html/src/layouts/auth.html`
- `web-html/src/layouts/error.html`

- [ ] **Step 1: Create DefaultLayout**

Create `src/layouts/DefaultLayout.vue`. Convert from `web-html/src/layouts/default.html`:
- Uses `useRoute()` to read `route.meta.activePage`, `route.meta.pageTitle`, `route.meta.layoutClass`
- Uses `useSidebarStore`, `useLayoutStore`
- Computed `layoutClasses`: combines sidebar state classes + route meta layoutClass
- Template structure:
  ```
  <a href="#main" class="sr-only ...">Skip to content</a>
  <div id="a11y-announcements" aria-live="polite" class="sr-only"></div>
  <div class="app-wrapper" :class="layoutClasses">
    <AppHeader />
    <AppSidebar :active-page="activePage" />
    <main id="main" class="app-main">
      <ContentHeader :title="pageTitle" />
      <div class="app-content">
        <div class="w-full px-4">
          <RouterView />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
  ```
- Body class management: apply `layout-fixed sidebar-expand-lg sidebar-mini bg-gray-100 dark:bg-gray-900 font-sans text-gray-800 dark:text-gray-200` on mount, clean up on unmount

Read `web-html/src/layouts/default.html` for the exact body classes and wrapper structure.

- [ ] **Step 2: Create AuthLayout**

Create `src/layouts/AuthLayout.vue`. Convert from `web-html/src/layouts/auth.html`:
- Minimal layout: gradient background, centered content
- Contains `<DarkModeToggle />` and `<RouterView />`
- Body class: `auth-page bg-gray-100 dark:bg-gray-900`

- [ ] **Step 3: Create ErrorLayout**

Create `src/layouts/ErrorLayout.vue`. Convert from `web-html/src/layouts/error.html`:
- Same as AuthLayout but uses error page styling
- Contains `<DarkModeToggle />` and `<RouterView />`

- [ ] **Step 4: Create router with all routes**

Create `src/router/index.ts`:
- Import all 3 layouts (lazy-load with `() => import(...)` is fine but not required for a template)
- Import all page components (use lazy-loading: `() => import('@/pages/dashboard/DashboardV1.vue')`)
- Define nested routes per the spec's routing table:
  - `/` parent → `DefaultLayout`, children: all 34 default-layout pages
  - `/auth` parent → `AuthLayout`, children: 5 auth pages
  - `/error` parent → `ErrorLayout`, children: 2 error pages
  - Catch-all: `{ path: '/:pathMatch(.*)*', redirect: '/error/404' }`
- Each route includes `meta: { activePage, pageTitle }`
- Layout demo routes include `meta: { layoutClass }` where needed

Use the full route table from the spec for exact paths, component names, and activePage values.

- [ ] **Step 5: Replace main.ts with full version**

Replace the placeholder `src/main.ts` with the complete version:

```ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Chart, registerables } from 'chart.js'
import App from './App.vue'
import router from './router'

import './assets/css/app.css'

// Register all Chart.js components globally
Chart.register(...registerables)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize stores that need to run on app start
import { useDarkModeStore } from './stores/darkMode'
import { useLayoutStore } from './stores/layout'
import { useSidebarStore } from './stores/sidebar'
import { useAccessibilityStore } from './stores/accessibility'

const darkMode = useDarkModeStore()
darkMode.apply()
useLayoutStore()
useSidebarStore()
useAccessibilityStore()

app.mount('#app')
```

- [ ] **Step 6: Verify the app shell renders**

```bash
npm run dev
```

Expected: App starts, shows DefaultLayout with sidebar, header, footer. Navigate to different routes — layout should stay mounted, only page content changes.

- [ ] **Step 7: Commit**

```bash
git add src/layouts/ src/router/ src/main.ts
git commit -m "feat: add layouts (Default, Auth, Error) and Vue Router with all 41 routes"
```

---

## Task 14: Dashboard Pages

**Files:**
- Create: `src/pages/dashboard/DashboardV1.vue`
- Create: `src/pages/dashboard/DashboardV2.vue`
- Create: `src/pages/dashboard/DashboardV3.vue`

**Source reference:**
- `web-html/src/pages/index.html`
- `web-html/src/pages/index2.html`
- `web-html/src/pages/index3.html`

- [ ] **Step 1: Create DashboardV1**

Create `src/pages/dashboard/DashboardV1.vue`. Convert from `web-html/src/pages/index.html`:

**Components used:**
- 4x `<SmallBox>` (Orders, Bounce Rate, Registrations, Visitors)
- Sales chart: `<AppCard interactive>` with `<LineChart>` inside
- Direct chat: `<DirectChat>` with hardcoded messages/contacts
- Visitors chart: `<AppCard interactive>` with `<BarChart>` inside
- Products overview table (plain HTML table)
- 4x `<InfoBox>` at bottom (Messages, Bookmarks, Uploads, Likes)

**Chart data:** Define `salesChartData` and `visitorsChartData` as reactive refs with the datasets from the HTML source.

Read `web-html/src/pages/index.html` for exact data values, grid layout classes, and card footer stats.

- [ ] **Step 2: Create DashboardV2**

Create `src/pages/dashboard/DashboardV2.vue`. Convert from `web-html/src/pages/index2.html`:

**Components used:**
- 4x `<InfoBox>` with progress bars (Revenue, Expenses, Net Profit, Customers)
- Revenue line chart + Monthly bar chart side by side
- Recent Orders table (6 rows with status badges)
- Goal Completion card with progress bars
- Quick Stats card

Read `web-html/src/pages/index2.html` for exact layout and data.

- [ ] **Step 3: Create DashboardV3**

Create `src/pages/dashboard/DashboardV3.vue`. Convert from `web-html/src/pages/index3.html`:

**Components used:**
- 4x `<SmallBox>` (Products, Revenue, Tickets, Satisfaction)
- Doughnut chart card
- Todo list card — uses `useTodoList` composable with 8 initial items
- Recent Activity timeline
- 4x `<InfoBox>` at bottom (CPU, Disk, RAM, Network)

Read `web-html/src/pages/index3.html` for exact layout, todo items, and timeline content.

- [ ] **Step 4: Verify dashboards render correctly**

```bash
npm run dev
```

Navigate to `/`, `/dashboard-v2`, `/dashboard-v3`. Compare visually with the HTML version running on its dev server.

- [ ] **Step 5: Commit**

```bash
git add src/pages/dashboard/
git commit -m "feat: add dashboard pages (v1, v2, v3) with charts and widgets"
```

---

## Task 15: Widget Pages

**Files:**
- Create: `src/pages/widgets/SmallBoxPage.vue`
- Create: `src/pages/widgets/InfoBoxPage.vue`
- Create: `src/pages/widgets/CardsPage.vue`

**Source reference:**
- `web-html/src/pages/widgets/small-box.html`
- `web-html/src/pages/widgets/info-box.html`
- `web-html/src/pages/widgets/cards.html`

- [ ] **Step 1: Create SmallBoxPage**

Convert `web-html/src/pages/widgets/small-box.html`:
- Multiple `<SmallBox>` instances showing all color variants
- Grid layout with responsive columns

- [ ] **Step 2: Create InfoBoxPage**

Convert `web-html/src/pages/widgets/info-box.html`:
- Multiple `<InfoBox>` instances: basic, with progress bars, additional variants

- [ ] **Step 3: Create CardsPage**

Convert `web-html/src/pages/widgets/cards.html`:
- Default card with tools (uses `<AppCard interactive>`)
- 6 outlined cards, 6 background colored cards
- Tabbed card (internal `activeTab` state)
- Collapsed card (`<AppCard :collapsed="true">`)
- Card with loading overlay (`<AppCard :loading="loading">`)
- Direct Chat widget

- [ ] **Step 4: Commit**

```bash
git add src/pages/widgets/
git commit -m "feat: add widget showcase pages (small-box, info-box, cards)"
```

---

## Task 16: UI Element Pages

**Files:**
- Create: `src/pages/ui/GeneralPage.vue`
- Create: `src/pages/ui/IconsPage.vue`
- Create: `src/pages/ui/TimelinePage.vue`
- Create: `src/pages/ui/ButtonsPage.vue`
- Create: `src/pages/ui/ModalsPage.vue`

**Source reference:** `web-html/src/pages/UI/` (all 5 files)

- [ ] **Step 1: Create GeneralPage**

Convert `web-html/src/pages/UI/general.html`:
- Sections: Alerts (using `<AppAlert>`), badges, callouts (using `<AppCallout>`), tooltips, progress bars, spinners, dropdowns, pagination, list groups, accordion
- Accordion uses internal state with `v-show` and `useSlideToggle`

- [ ] **Step 2: Create IconsPage**

Convert `web-html/src/pages/UI/icons.html`:
- Searchable grid of Lucide icons
- Internal state: `searchQuery` ref
- Filtered icons computed from a predefined list
- Each icon rendered with lucide-vue-next

- [ ] **Step 3: Create TimelinePage**

Convert `web-html/src/pages/UI/timeline.html`:
- Basic timeline with `.timeline` CSS classes
- Timeline with mixed content (images, badges, progress, lists, comments)
- Uses `.time-label`, `.timeline-item`, `.timeline-icon` CSS classes

- [ ] **Step 4: Create ButtonsPage**

Convert `web-html/src/pages/UI/buttons.html`:
- Sections: standard, outline, sizes, block, icon, disabled/loading, groups, toolbar, gradient, rounded/pill
- Mostly static HTML with Tailwind classes — no component extraction needed

- [ ] **Step 5: Create ModalsPage**

Convert `web-html/src/pages/UI/modals.html`:
- Multiple `<AppModal>` instances demonstrating all variants
- Each modal controlled by its own `ref<boolean>`
- Variants: default, sized (sm/lg/xl), scrollable, centered, colored headers, confirmation, form, success

- [ ] **Step 6: Commit**

```bash
git add src/pages/ui/
git commit -m "feat: add UI element pages (general, icons, timeline, buttons, modals)"
```

---

## Task 17: Form and Table Pages

**Files:**
- Create: `src/pages/forms/GeneralFormsPage.vue`
- Create: `src/pages/forms/ValidationFormsPage.vue`
- Create: `src/pages/tables/SimpleTablesPage.vue`
- Create: `src/pages/tables/DataTablesPage.vue`

**Source reference:**
- `web-html/src/pages/forms/general.html`
- `web-html/src/pages/forms/validation.html`
- `web-html/src/pages/tables/simple.html`
- `web-html/src/pages/tables/data.html`

- [ ] **Step 1: Create GeneralFormsPage**

Convert `web-html/src/pages/forms/general.html`:
- All input types, textareas, selects (native HTML elements with Tailwind classes)
- Input groups with icons (using `<InputGroup>`)
- Floating labels, checkboxes, radios, horizontal/inline layouts
- Wrapped in `<AppCard>` sections

- [ ] **Step 2: Create ValidationFormsPage**

Convert `web-html/src/pages/forms/validation.html`:
- HTML5 validation examples
- Real-time validation with reactive state (port Alpine.js validation to Vue refs/computed)
- Password strength indicator
- Valid/invalid/warning visual states

- [ ] **Step 3: Create SimpleTablesPage**

Convert `web-html/src/pages/tables/simple.html`:
- Plain HTML tables with Tailwind classes: default, striped, bordered, hover, responsive, dark, colored, with action buttons
- No `<DataTable>` component needed — these are static demonstrations

- [ ] **Step 4: Create DataTablesPage**

Convert `web-html/src/pages/tables/data.html`:
- Uses `<DataTable>` component with sample data
- Sortable table demo
- Searchable + filterable table demo with department filter and status badges
- Pagination demo
- Custom cell rendering via `#cell-status` slot

- [ ] **Step 5: Commit**

```bash
git add src/pages/forms/ src/pages/tables/
git commit -m "feat: add form pages (general, validation) and table pages (simple, data)"
```

---

## Task 18: Chart Pages

**Files:**
- Create: `src/pages/charts/ChartJsPage.vue`
- Create: `src/pages/charts/InlinePage.vue`

**Source reference:**
- `web-html/src/pages/charts/chartjs.html`
- `web-html/src/pages/charts/inline.html`

- [ ] **Step 1: Create ChartJsPage**

Convert `web-html/src/pages/charts/chartjs.html`:
- 8 charts in `<AppCard>` containers: Line, Bar, Horizontal Bar, Doughnut, Pie, Radar, Polar Area, Mixed
- Uses the chart wrapper components from Task 12
- Define chart data objects from the HTML source's inline JavaScript

Read `web-html/src/pages/charts/chartjs.html` for exact dataset values, labels, and colors.

- [ ] **Step 2: Create InlinePage**

Convert `web-html/src/pages/charts/inline.html`:
- Sparkline stat cards with small inline charts
- Mini bar charts, mini doughnuts, trend lines
- CSS-only chart demonstrations
- Some may use small Chart.js instances, others are CSS-only

Read `web-html/src/pages/charts/inline.html` for the exact implementation.

- [ ] **Step 3: Commit**

```bash
git add src/pages/charts/
git commit -m "feat: add chart pages (Chart.js showcase, inline/sparkline charts)"
```

---

## Task 19: Layout Demo Pages

**Files:**
- Create: 10 files in `src/pages/layout/`

**Source reference:** `web-html/src/pages/layout/` (all 10 files)

Each layout demo page follows the same pattern:
- `<AppCallout>` explaining the layout variant
- Toggle switch(es) to enable/disable the feature
- Sample content to demonstrate scrolling/fixed behavior
- The toggle modifies `document.body` classes or uses route meta `layoutClass`

- [ ] **Step 1: Create FixedSidebarPage, FixedHeaderPage, FixedFooterPage, FixedCompletePage**

Convert from corresponding HTML files. Each has:
- Callout explanation
- Checkbox toggle(s) that add/remove CSS classes on body
- Sample content sections

For these pages, the layout class is applied via `route.meta.layoutClass` AND/OR dynamic body class manipulation in the page component using `onMounted`/`onUnmounted`.

- [ ] **Step 2: Create CollapsedSidebarPage, SidebarMiniPage, UnfixedSidebarPage**

Similar pattern. CollapsedSidebar starts with `sidebar-collapse` class. SidebarMini toggles `sidebar-mini` class.

- [ ] **Step 3: Create CustomAreaPage, LogoSwitchPage**

CustomAreaPage adds custom content between header and main (banner, stats row, toolbar).
LogoSwitchPage demonstrates brand logo/text switching on sidebar collapse.

- [ ] **Step 4: Create RtlPage**

Special case: needs `dir="rtl"` and `lang="ar"` on `<html>`. Apply on mount, clean up on unmount. Includes inline `<style>` block with RTL-specific CSS overrides.

Read `web-html/src/pages/layout/layout-rtl.html` for the RTL CSS overrides.

- [ ] **Step 5: Commit**

```bash
git add src/pages/layout/
git commit -m "feat: add 10 layout variant demo pages"
```

---

## Task 20: Auth and Error Pages

**Files:**
- Create: `src/pages/examples/LoginV1.vue`
- Create: `src/pages/examples/LoginV2.vue`
- Create: `src/pages/examples/RegisterV1.vue`
- Create: `src/pages/examples/RegisterV2.vue`
- Create: `src/pages/examples/Lockscreen.vue`
- Create: `src/pages/examples/Error404.vue`
- Create: `src/pages/examples/Error500.vue`

**Source reference:** `web-html/src/pages/examples/` (login-v1, login-v2, register-v1, register-v2, lockscreen, 404, 500)

- [ ] **Step 1: Create LoginV1 and LoginV2**

Convert from HTML source:
- LoginV1: centered card with logo, email/password inputs (using `<InputGroup>`), remember me checkbox, sign in button, social login buttons
- LoginV2: split layout — form on left, gradient panel on right (uses `.auth-v2-wrapper` CSS)

These pages use AuthLayout (no sidebar/header).

- [ ] **Step 2: Create RegisterV1 and RegisterV2**

Similar to login pages but with additional fields (name, confirm password, terms checkbox).

- [ ] **Step 3: Create Lockscreen**

Convert from `web-html/src/pages/examples/lockscreen.html`:
- Avatar, user name, live clock (uses `setInterval` for time/date), password input, unlock button
- Uses `.lockscreen-*` CSS classes

- [ ] **Step 4: Create Error404 and Error500**

Convert from HTML source:
- Large error code display
- Error title and description
- Search form
- Back to dashboard link (RouterLink to `/`)
- Uses `.error-page-wrapper`, `.error-code`, `.error-title` CSS classes

- [ ] **Step 5: Commit**

```bash
git add src/pages/examples/LoginV1.vue src/pages/examples/LoginV2.vue src/pages/examples/RegisterV1.vue src/pages/examples/RegisterV2.vue src/pages/examples/Lockscreen.vue src/pages/examples/Error404.vue src/pages/examples/Error500.vue
git commit -m "feat: add auth pages (login, register, lockscreen) and error pages (404, 500)"
```

---

## Task 21: Example Pages (Part 1)

**Files:**
- Create: `src/pages/examples/ProfilePage.vue`
- Create: `src/pages/examples/InvoicePage.vue`
- Create: `src/pages/examples/GalleryPage.vue`

**Source reference:**
- `web-html/src/pages/examples/profile.html`
- `web-html/src/pages/examples/invoice.html`
- `web-html/src/pages/examples/gallery.html`

- [ ] **Step 1: Create ProfilePage**

Convert from HTML source:
- User profile card (avatar, name, title, stats)
- Tabbed content (Activity, Timeline, Settings)
- Tab switching with internal state
- Activity timeline, settings form

- [ ] **Step 2: Create InvoicePage**

Convert from HTML source:
- Invoice header with company info
- From/To sections
- Line items table
- Totals section, payment notes
- Print button: `window.print()`
- Include print-specific CSS via `<style>` block with `@media print`

- [ ] **Step 3: Create GalleryPage**

Convert from HTML source:
- Filterable image gallery
- Filter buttons (All, Nature, City, etc.) with internal state
- Lightbox on image click (modal with full-size image)
- Uses images from `public/assets/img/`

- [ ] **Step 4: Commit**

```bash
git add src/pages/examples/ProfilePage.vue src/pages/examples/InvoicePage.vue src/pages/examples/GalleryPage.vue
git commit -m "feat: add example pages (profile, invoice, gallery)"
```

---

## Task 22: Example Pages (Part 2)

**Files:**
- Create: `src/pages/examples/SearchPage.vue`
- Create: `src/pages/examples/ProjectsPage.vue`
- Create: `src/pages/examples/ContactsPage.vue`
- Create: `src/pages/examples/ECommercePage.vue`

**Source reference:**
- `web-html/src/pages/examples/search.html`
- `web-html/src/pages/examples/projects.html`
- `web-html/src/pages/examples/contacts.html`
- `web-html/src/pages/examples/e-commerce.html`

- [ ] **Step 1: Create SearchPage**

Convert from HTML source:
- Tabbed search results (All, Images, News)
- Search input at top
- Result items with titles, descriptions, URLs
- Image grid tab
- News articles tab

- [ ] **Step 2: Create ProjectsPage**

Convert from HTML source:
- Project cards in grid layout
- Status filters (All, Active, Completed, etc.) with internal state
- Each card: title, description, team avatars, progress bar, status badge

- [ ] **Step 3: Create ContactsPage**

Convert from HTML source:
- Contact cards in grid layout
- Each card: avatar, name, role, action buttons (email, phone, message)

- [ ] **Step 4: Create ECommercePage**

Convert from HTML source:
- Product cards with images from `public/assets/img/prod-*.jpg`
- Filters (category, price) with internal state
- Sort dropdown
- Add to cart buttons

- [ ] **Step 5: Commit**

```bash
git add src/pages/examples/SearchPage.vue src/pages/examples/ProjectsPage.vue src/pages/examples/ContactsPage.vue src/pages/examples/ECommercePage.vue
git commit -m "feat: add example pages (search, projects, contacts, e-commerce)"
```

---

## Task 23: Final Verification and Polish

**Files:**
- Possibly modify: any file with issues discovered during verification

- [ ] **Step 1: Build check**

```bash
npm run build
```

Expected: No TypeScript errors, no build failures. Fix any issues found.

- [ ] **Step 2: Visual comparison — Dashboards**

Run both dev servers side by side:
```bash
# Terminal 1 (HTML version):
cd /var/www/vhosts/tailadminlte.local/web-html && npm run dev
# Terminal 2 (Vue version):
cd /var/www/vhosts/tailadminlte.local/web && npm run dev
```

Compare Dashboard v1, v2, v3 visually. Check:
- Layout grid (sidebar/header/main/footer positioning)
- Small boxes and info boxes render correctly
- Charts display with correct data
- Dark mode toggle works and charts update colors
- Sidebar navigation highlights correct item
- Sidebar treeview expand/collapse works

- [ ] **Step 3: Visual comparison — Key pages**

Check these representative pages:
- `/widgets/cards` — card collapse/maximize/remove works
- `/ui/modals` — all modal variants open/close correctly
- `/ui/general` — alerts, callouts, progress bars render correctly
- `/tables/data` — sort, search, filter, pagination work
- `/auth/login-v1` — auth layout renders correctly
- `/error/404` — error layout renders, catch-all route works
- `/layout/fixed-sidebar` — layout variant toggles work

- [ ] **Step 4: Responsive check**

Check mobile view (< 992px):
- Sidebar collapses to overlay
- Hamburger toggle opens/closes sidebar
- Sidebar overlay backdrop appears and closes on click
- Content is full-width

- [ ] **Step 5: Fix any issues found**

Address visual discrepancies, broken interactions, or console errors.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "fix: address visual and functional issues from verification pass"
```

---

## Summary

| Task | Description | Estimated Steps |
|:---|:---|:---|
| 1 | Project scaffold | 8 |
| 2 | Copy CSS + assets | 5 |
| 3 | Types + navigation data | 3 |
| 4 | Pinia stores (4) | 5 |
| 5 | Composables (5) | 6 |
| 6 | Simple layout components (3) | 4 |
| 7 | Sidebar components (3) | 4 |
| 8 | AppHeader | 2 |
| 9 | Widget components (4) | 5 |
| 10 | UI components (5) | 6 |
| 11 | DataTable | 2 |
| 12 | Chart components (6) | 2 |
| 13 | Layouts + Router + main.ts | 7 |
| 14 | Dashboard pages (3) | 5 |
| 15 | Widget pages (3) | 4 |
| 16 | UI pages (5) | 6 |
| 17 | Form + Table pages (4) | 5 |
| 18 | Chart pages (2) | 3 |
| 19 | Layout demo pages (10) | 5 |
| 20 | Auth + Error pages (7) | 5 |
| 21 | Example pages part 1 (3) | 4 |
| 22 | Example pages part 2 (4) | 5 |
| 23 | Final verification | 6 |
| **Total** | **23 tasks** | **~105 steps** |
