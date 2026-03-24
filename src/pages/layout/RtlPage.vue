<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ShoppingCart, BarChart2, UserPlus, PieChart, Mail, Bookmark, Upload, ThumbsUp, ArrowLeft } from 'lucide-vue-next'
import AppCallout from '@/components/ui/AppCallout.vue'
import AppCard from '@/components/widgets/AppCard.vue'

onMounted(() => {
  document.documentElement.setAttribute('dir', 'rtl')
  document.documentElement.setAttribute('lang', 'ar')
})

onUnmounted(() => {
  document.documentElement.setAttribute('dir', 'ltr')
  document.documentElement.setAttribute('lang', 'en')
})
</script>

<template>
  <div>
    <!-- Info Callout -->
    <AppCallout variant="info" title="RTL (Right-to-Left) Layout">
      This page demonstrates the <strong>RTL layout</strong> for languages like Arabic, Hebrew, Farsi, and Urdu. The sidebar appears on the right, text flows right-to-left, and all UI elements are mirrored.
      <p class="mt-2">Usage: Add <code>dir="rtl"</code> and <code>lang="ar"</code> to the <code>&lt;html&gt;</code> tag.</p>
    </AppCallout>

    <!-- How It Works -->
    <AppCard title="How to Enable RTL">
      <p>To enable RTL layout, two changes are needed:</p>
      <ol class="list-decimal ml-5 mt-2 space-y-2 text-sm">
        <li>Set the <code>dir</code> and <code>lang</code> attributes on the <code>&lt;html&gt;</code> element:
          <pre class="bg-gray-800 text-green-400 p-3 rounded mt-1 text-sm"><code>&lt;html lang="ar" dir="rtl"&gt;</code></pre>
        </li>
        <li>Include the RTL CSS overrides that mirror the grid layout, sidebar position, and icon directions:
          <pre class="bg-gray-800 text-green-400 p-3 rounded mt-1 text-sm overflow-x-auto"><code>[dir="rtl"] .app-wrapper {
  grid-template-areas:
    "header sidebar"
    "main sidebar"
    "footer sidebar";
  grid-template-columns: 1fr auto;
}</code></pre>
        </li>
      </ol>
      <p class="mt-3">Tailwind CSS utilities like <code>text-right</code>, <code>ml-*</code>, and <code>pl-*</code> are physical properties. For RTL support, prefer logical properties: <code>ms-*</code> (margin-start), <code>me-*</code> (margin-end), <code>ps-*</code> (padding-start), <code>pe-*</code> (padding-end).</p>
    </AppCard>

    <!-- RTL Demo Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div class="small-box bg-primary">
        <div class="inner">
          <h3>150</h3>
          <p>&#x0637;&#x0644;&#x0628;&#x0627;&#x062A; &#x062C;&#x062F;&#x064A;&#x062F;&#x0629;</p>
        </div>
        <div class="small-box-icon">
          <ShoppingCart />
        </div>
        <a href="#" class="small-box-footer">
          &#x0627;&#x0644;&#x0645;&#x0632;&#x064A;&#x062F; <ArrowLeft class="inline w-4 h-4" />
        </a>
      </div>

      <div class="small-box bg-success">
        <div class="inner">
          <h3>53<sup class="text-xl">%</sup></h3>
          <p>&#x0645;&#x0639;&#x062F;&#x0644; &#x0627;&#x0644;&#x0627;&#x0631;&#x062A;&#x062F;&#x0627;&#x062F;</p>
        </div>
        <div class="small-box-icon">
          <BarChart2 />
        </div>
        <a href="#" class="small-box-footer">
          &#x0627;&#x0644;&#x0645;&#x0632;&#x064A;&#x062F; <ArrowLeft class="inline w-4 h-4" />
        </a>
      </div>

      <div class="small-box bg-warning">
        <div class="inner">
          <h3>44</h3>
          <p>&#x062A;&#x0633;&#x062C;&#x064A;&#x0644;&#x0627;&#x062A; &#x0627;&#x0644;&#x0645;&#x0633;&#x062A;&#x062E;&#x062F;&#x0645;&#x064A;&#x0646;</p>
        </div>
        <div class="small-box-icon">
          <UserPlus />
        </div>
        <a href="#" class="small-box-footer">
          &#x0627;&#x0644;&#x0645;&#x0632;&#x064A;&#x062F; <ArrowLeft class="inline w-4 h-4" />
        </a>
      </div>

      <div class="small-box bg-danger">
        <div class="inner">
          <h3>65</h3>
          <p>&#x0632;&#x0648;&#x0627;&#x0631; &#x0641;&#x0631;&#x064A;&#x062F;&#x0648;&#x0646;</p>
        </div>
        <div class="small-box-icon">
          <PieChart />
        </div>
        <a href="#" class="small-box-footer">
          &#x0627;&#x0644;&#x0645;&#x0632;&#x064A;&#x062F; <ArrowLeft class="inline w-4 h-4" />
        </a>
      </div>
    </div>

    <!-- Arabic Sample Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="&#x0645;&#x062D;&#x062A;&#x0648;&#x0649; &#x0628;&#x0627;&#x0644;&#x0644;&#x063A;&#x0629; &#x0627;&#x0644;&#x0639;&#x0631;&#x0628;&#x064A;&#x0629;">
        <p>&#x0647;&#x0630;&#x0627; &#x0645;&#x062B;&#x0627;&#x0644; &#x0639;&#x0644;&#x0649; &#x0645;&#x062D;&#x062A;&#x0648;&#x0649; &#x0628;&#x0627;&#x0644;&#x0644;&#x063A;&#x0629; &#x0627;&#x0644;&#x0639;&#x0631;&#x0628;&#x064A;&#x0629; &#x0641;&#x064A; &#x062A;&#x062E;&#x0637;&#x064A;&#x0637; &#x0645;&#x0646; &#x0627;&#x0644;&#x064A;&#x0645;&#x064A;&#x0646; &#x0625;&#x0644;&#x0649; &#x0627;&#x0644;&#x064A;&#x0633;&#x0627;&#x0631;. &#x0644;&#x0627;&#x062D;&#x0638; &#x0643;&#x064A;&#x0641; &#x064A;&#x062A;&#x062F;&#x0641;&#x0642; &#x0627;&#x0644;&#x0646;&#x0635; &#x0645;&#x0646; &#x0627;&#x0644;&#x064A;&#x0645;&#x064A;&#x0646; &#x0625;&#x0644;&#x0649; &#x0627;&#x0644;&#x064A;&#x0633;&#x0627;&#x0631;&#x060C; &#x0648;&#x0627;&#x0644;&#x0634;&#x0631;&#x064A;&#x0637; &#x0627;&#x0644;&#x062C;&#x0627;&#x0646;&#x0628;&#x064A; &#x0639;&#x0644;&#x0649; &#x0627;&#x0644;&#x062C;&#x0627;&#x0646;&#x0628; &#x0627;&#x0644;&#x0623;&#x064A;&#x0645;&#x0646; &#x0645;&#x0646; &#x0627;&#x0644;&#x0635;&#x0641;&#x062D;&#x0629;.</p>
        <p class="mt-2">&#x064A;&#x062F;&#x0639;&#x0645; TailAdminLTE &#x0627;&#x0644;&#x062A;&#x062E;&#x0637;&#x064A;&#x0637; &#x0645;&#x0646; &#x0627;&#x0644;&#x064A;&#x0645;&#x064A;&#x0646; &#x0625;&#x0644;&#x0649; &#x0627;&#x0644;&#x064A;&#x0633;&#x0627;&#x0631; &#x0628;&#x0627;&#x0644;&#x0643;&#x0627;&#x0645;&#x0644; &#x0645;&#x0639; &#x062A;&#x0639;&#x062F;&#x064A;&#x0644;&#x0627;&#x062A; CSS &#x0628;&#x0633;&#x064A;&#x0637;&#x0629;.</p>
      </AppCard>

      <AppCard title="English Content">
        <p>This is a sample card with English content in the RTL layout. Notice how the overall page structure is mirrored — sidebar on the right, content flowing right-to-left — but the English text within this card still reads left-to-right naturally.</p>
        <p class="mt-2">Mixed-language content works correctly because browsers handle bidirectional text natively.</p>
      </AppCard>
    </div>

    <!-- Info Boxes in RTL -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div class="info-box">
        <span class="info-box-icon bg-primary text-white">
          <Mail class="w-8 h-8" />
        </span>
        <div class="info-box-content">
          <span class="info-box-text">&#x0627;&#x0644;&#x0631;&#x0633;&#x0627;&#x0626;&#x0644;</span>
          <span class="info-box-number">1,410</span>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon bg-success text-white">
          <Bookmark class="w-8 h-8" />
        </span>
        <div class="info-box-content">
          <span class="info-box-text">&#x0627;&#x0644;&#x0625;&#x0634;&#x0627;&#x0631;&#x0627;&#x062A; &#x0627;&#x0644;&#x0645;&#x0631;&#x062C;&#x0639;&#x064A;&#x0629;</span>
          <span class="info-box-number">410</span>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon bg-warning text-white">
          <Upload class="w-8 h-8" />
        </span>
        <div class="info-box-content">
          <span class="info-box-text">&#x0627;&#x0644;&#x062A;&#x062D;&#x0645;&#x064A;&#x0644;&#x0627;&#x062A;</span>
          <span class="info-box-number">13,648</span>
        </div>
      </div>
      <div class="info-box">
        <span class="info-box-icon bg-danger text-white">
          <ThumbsUp class="w-8 h-8" />
        </span>
        <div class="info-box-content">
          <span class="info-box-text">&#x0627;&#x0644;&#x0625;&#x0639;&#x062C;&#x0627;&#x0628;&#x0627;&#x062A;</span>
          <span class="info-box-number">93,139</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep([dir="rtl"]) .app-wrapper {
  grid-template-areas:
    "header sidebar"
    "main sidebar"
    "footer sidebar";
  grid-template-columns: 1fr auto;
}
</style>
