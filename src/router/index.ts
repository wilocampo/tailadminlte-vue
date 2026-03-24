import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/dashboard/DashboardV1.vue'),
          meta: { activePage: 'index', pageTitle: 'Dashboard v1' },
        },
        {
          path: 'dashboard-v2',
          component: () => import('@/pages/dashboard/DashboardV2.vue'),
          meta: { activePage: 'index2', pageTitle: 'Dashboard v2' },
        },
        {
          path: 'dashboard-v3',
          component: () => import('@/pages/dashboard/DashboardV3.vue'),
          meta: { activePage: 'index3', pageTitle: 'Dashboard v3' },
        },
        {
          path: 'widgets/small-box',
          component: () => import('@/pages/widgets/SmallBoxPage.vue'),
          meta: { activePage: 'widgets-small-box', pageTitle: 'Small Box' },
        },
        {
          path: 'widgets/info-box',
          component: () => import('@/pages/widgets/InfoBoxPage.vue'),
          meta: { activePage: 'widgets-info-box', pageTitle: 'Info Box' },
        },
        {
          path: 'widgets/cards',
          component: () => import('@/pages/widgets/CardsPage.vue'),
          meta: { activePage: 'widgets-cards', pageTitle: 'Cards' },
        },
        {
          path: 'ui/general',
          component: () => import('@/pages/ui/GeneralPage.vue'),
          meta: { activePage: 'ui-general', pageTitle: 'General UI' },
        },
        {
          path: 'ui/icons',
          component: () => import('@/pages/ui/IconsPage.vue'),
          meta: { activePage: 'ui-icons', pageTitle: 'Icons' },
        },
        {
          path: 'ui/timeline',
          component: () => import('@/pages/ui/TimelinePage.vue'),
          meta: { activePage: 'ui-timeline', pageTitle: 'Timeline' },
        },
        {
          path: 'ui/buttons',
          component: () => import('@/pages/ui/ButtonsPage.vue'),
          meta: { activePage: 'ui-buttons', pageTitle: 'Buttons' },
        },
        {
          path: 'ui/modals',
          component: () => import('@/pages/ui/ModalsPage.vue'),
          meta: { activePage: 'ui-modals', pageTitle: 'Modals' },
        },
        {
          path: 'forms/general',
          component: () => import('@/pages/forms/GeneralFormsPage.vue'),
          meta: { activePage: 'forms-general', pageTitle: 'General Forms' },
        },
        {
          path: 'forms/validation',
          component: () => import('@/pages/forms/ValidationFormsPage.vue'),
          meta: { activePage: 'forms-validation', pageTitle: 'Form Validation' },
        },
        {
          path: 'tables/simple',
          component: () => import('@/pages/tables/SimpleTablesPage.vue'),
          meta: { activePage: 'tables-simple', pageTitle: 'Simple Tables' },
        },
        {
          path: 'tables/data',
          component: () => import('@/pages/tables/DataTablesPage.vue'),
          meta: { activePage: 'tables-data', pageTitle: 'Data Tables' },
        },
        {
          path: 'charts/chartjs',
          component: () => import('@/pages/charts/ChartJsPage.vue'),
          meta: { activePage: 'charts-chartjs', pageTitle: 'ChartJS' },
        },
        {
          path: 'charts/inline',
          component: () => import('@/pages/charts/InlinePage.vue'),
          meta: { activePage: 'charts-inline', pageTitle: 'Inline Charts' },
        },
        {
          path: 'layout/fixed-sidebar',
          component: () => import('@/pages/layout/FixedSidebarPage.vue'),
          meta: { activePage: 'layout-fixed-sidebar', pageTitle: 'Fixed Sidebar' },
        },
        {
          path: 'layout/fixed-header',
          component: () => import('@/pages/layout/FixedHeaderPage.vue'),
          meta: { activePage: 'layout-fixed-header', pageTitle: 'Fixed Header' },
        },
        {
          path: 'layout/fixed-footer',
          component: () => import('@/pages/layout/FixedFooterPage.vue'),
          meta: { activePage: 'layout-fixed-footer', pageTitle: 'Fixed Footer' },
        },
        {
          path: 'layout/fixed-complete',
          component: () => import('@/pages/layout/FixedCompletePage.vue'),
          meta: { activePage: 'layout-fixed-complete', pageTitle: 'Fixed Complete' },
        },
        {
          path: 'layout/collapsed-sidebar',
          component: () => import('@/pages/layout/CollapsedSidebarPage.vue'),
          meta: { activePage: 'layout-collapsed-sidebar', pageTitle: 'Collapsed Sidebar' },
        },
        {
          path: 'layout/sidebar-mini',
          component: () => import('@/pages/layout/SidebarMiniPage.vue'),
          meta: { activePage: 'layout-sidebar-mini', pageTitle: 'Sidebar Mini' },
        },
        {
          path: 'layout/unfixed-sidebar',
          component: () => import('@/pages/layout/UnfixedSidebarPage.vue'),
          meta: { activePage: 'layout-unfixed-sidebar', pageTitle: 'Default Sidebar' },
        },
        {
          path: 'layout/custom-area',
          component: () => import('@/pages/layout/CustomAreaPage.vue'),
          meta: { activePage: 'layout-custom-area', pageTitle: 'Custom Area' },
        },
        {
          path: 'layout/logo-switch',
          component: () => import('@/pages/layout/LogoSwitchPage.vue'),
          meta: { activePage: 'layout-logo-switch', pageTitle: 'Logo Switch' },
        },
        {
          path: 'layout/rtl',
          component: () => import('@/pages/layout/RtlPage.vue'),
          meta: { activePage: 'layout-rtl', pageTitle: 'RTL Layout' },
        },
        {
          path: 'examples/profile',
          component: () => import('@/pages/examples/ProfilePage.vue'),
          meta: { activePage: 'examples-profile', pageTitle: 'Profile' },
        },
        {
          path: 'examples/invoice',
          component: () => import('@/pages/examples/InvoicePage.vue'),
          meta: { activePage: 'examples-invoice', pageTitle: 'Invoice' },
        },
        {
          path: 'examples/gallery',
          component: () => import('@/pages/examples/GalleryPage.vue'),
          meta: { activePage: 'examples-gallery', pageTitle: 'Gallery' },
        },
        {
          path: 'examples/search',
          component: () => import('@/pages/examples/SearchPage.vue'),
          meta: { activePage: 'examples-search', pageTitle: 'Search Results' },
        },
        {
          path: 'examples/projects',
          component: () => import('@/pages/examples/ProjectsPage.vue'),
          meta: { activePage: 'examples-projects', pageTitle: 'Projects' },
        },
        {
          path: 'examples/contacts',
          component: () => import('@/pages/examples/ContactsPage.vue'),
          meta: { activePage: 'examples-contacts', pageTitle: 'Contacts' },
        },
        {
          path: 'examples/e-commerce',
          component: () => import('@/pages/examples/ECommercePage.vue'),
          meta: { activePage: 'examples-ecommerce', pageTitle: 'E-Commerce' },
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login-v1',
          component: () => import('@/pages/examples/LoginV1.vue'),
        },
        {
          path: 'login-v2',
          component: () => import('@/pages/examples/LoginV2.vue'),
        },
        {
          path: 'register-v1',
          component: () => import('@/pages/examples/RegisterV1.vue'),
        },
        {
          path: 'register-v2',
          component: () => import('@/pages/examples/RegisterV2.vue'),
        },
        {
          path: 'lockscreen',
          component: () => import('@/pages/examples/Lockscreen.vue'),
        },
      ],
    },
    {
      path: '/error',
      component: () => import('@/layouts/ErrorLayout.vue'),
      children: [
        {
          path: '404',
          component: () => import('@/pages/examples/Error404.vue'),
        },
        {
          path: '500',
          component: () => import('@/pages/examples/Error500.vue'),
        },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/error/404' },
  ],
})

export default router
