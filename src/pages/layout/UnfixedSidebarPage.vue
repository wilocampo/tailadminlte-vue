<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppCallout from '@/components/ui/AppCallout.vue'
import AppCard from '@/components/widgets/AppCard.vue'

const fixed = ref(false)

onMounted(() => {
  document.body.classList.remove('layout-fixed')
})

onUnmounted(() => {
  document.body.classList.add('layout-fixed')
})

function toggleFixed() {
  document.body.classList.toggle('layout-fixed', fixed.value)
}
</script>

<template>
  <div>
    <!-- Info Callout -->
    <AppCallout variant="info" title="Default (Unfixed) Sidebar Layout">
      This page demonstrates the <strong>default sidebar</strong> layout. The sidebar scrolls along with the page content — it is <strong>not</strong> fixed to the viewport. This is the behavior when the <code>layout-fixed</code> class is <strong>absent</strong> from the body tag.
      <p class="mt-2">Usage: <code>&lt;body class="sidebar-expand-lg sidebar-mini sidebar-open"&gt;</code></p>
    </AppCallout>

    <!-- Try It Toggle -->
    <AppCard title="Try It">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" v-model="fixed" @change="toggleFixed" class="accent-primary">
        <span>Enable Fixed Sidebar (<code>layout-fixed</code>)</span>
      </label>
      <p class="text-sm text-gray-500 mt-2">Toggle to compare: when unchecked (default), the sidebar scrolls with the page. When checked, the sidebar becomes fixed.</p>
    </AppCard>

    <!-- How It Works -->
    <AppCard title="How It Works">
      <p>By default (without the <code>layout-fixed</code> class), the sidebar is part of the normal page flow. As you scroll down, the sidebar scrolls away with the content.</p>
      <p class="mt-2">This is ideal for shorter sidebar menus or when you want to maximize vertical space for the sidebar content without needing an internal scrollbar.</p>
      <h5 class="mt-4 font-semibold">Comparison:</h5>
      <table class="w-full text-sm mt-2">
        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th class="text-left py-2 px-3">Feature</th>
            <th class="text-left py-2 px-3">Default (Unfixed)</th>
            <th class="text-left py-2 px-3">Fixed</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-100 dark:border-gray-700/50">
            <td class="py-2 px-3">Body class</td>
            <td class="py-2 px-3"><code>--</code> (no class needed)</td>
            <td class="py-2 px-3"><code>layout-fixed</code></td>
          </tr>
          <tr class="border-b border-gray-100 dark:border-gray-700/50">
            <td class="py-2 px-3">Sidebar scrolls with page</td>
            <td class="py-2 px-3">Yes</td>
            <td class="py-2 px-3">No</td>
          </tr>
          <tr class="border-b border-gray-100 dark:border-gray-700/50">
            <td class="py-2 px-3">Sidebar has own scrollbar</td>
            <td class="py-2 px-3">No</td>
            <td class="py-2 px-3">Yes</td>
          </tr>
          <tr>
            <td class="py-2 px-3">Best for</td>
            <td class="py-2 px-3">Short menus</td>
            <td class="py-2 px-3">Long menus, dashboards</td>
          </tr>
        </tbody>
      </table>
    </AppCard>

    <!-- Filler content for scrolling -->
    <AppCard title="Sample Content">
      <p>Scroll down to see how the sidebar behaves in the default (unfixed) mode. The sidebar will scroll away as you scroll past it.</p>
    </AppCard>

    <AppCard title="More Content">
      <p>This extra content ensures the page is long enough to demonstrate the scrolling behavior. In the default layout, both the sidebar and the main content area scroll together as a single document.</p>
    </AppCard>

    <AppCard title="Even More Content">
      <p>Keep scrolling to see the sidebar disappear above the viewport. This is the key difference from the fixed sidebar layout, where the sidebar would remain visible.</p>
    </AppCard>

    <AppCard title="Additional Content">
      <p>With enough content on the page, you can clearly see the sidebar scrolling behavior. The sidebar is simply part of the page flow, not locked in place.</p>
    </AppCard>

    <AppCard title="Final Content Block">
      <p>You've reached the bottom of the demo content. Scroll back up to find the sidebar, or use the toggle above to switch to a fixed sidebar.</p>
    </AppCard>
  </div>
</template>
