<script setup lang="ts">
import { Printer, Download, CreditCard, Wallet } from 'lucide-vue-next'

interface LineItem {
  id: number
  product: string
  description: string
  qty: number
  unitPrice: number
  subtotal: number
}

const lineItems: LineItem[] = [
  { id: 1, product: 'TailAdminLTE Pro License', description: 'Single developer license with 1 year of updates', qty: 2, unitPrice: 59.00, subtotal: 118.00 },
  { id: 2, product: 'Extended Support', description: 'Priority email & chat support for 12 months', qty: 1, unitPrice: 29.00, subtotal: 29.00 },
  { id: 3, product: 'Custom Theme Design', description: 'Custom branded color scheme and logo integration', qty: 1, unitPrice: 199.00, subtotal: 199.00 },
  { id: 4, product: 'Component Library Add-on', description: '50+ additional UI components pack', qty: 1, unitPrice: 39.00, subtotal: 39.00 },
]

const subtotal = 385.00
const tax = 30.80
const shipping = 0.00
const total = 415.80

function fmt(n: number): string {
  return '$' + n.toFixed(2)
}

function handlePrint() {
  window.print()
}
</script>

<template>
  <div class="card mb-6">
    <div class="card-body">

      <!-- Invoice Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <img src="/assets/img/AdminLTELogo.png" alt="Logo" class="w-10 h-10">
            <h2 class="text-2xl font-bold">TailAdmin<span class="font-normal">LTE</span></h2>
          </div>
          <p class="text-sm text-gray-500 dark:text-gray-400">Premium Admin Dashboard</p>
        </div>
        <div class="text-right mt-4 sm:mt-0">
          <h3 class="text-xl font-bold text-gray-400 uppercase">Invoice</h3>
          <p class="text-sm font-semibold">#INV-2026-0047</p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">Date: March 15, 2026</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">Due Date: April 15, 2026</p>
        </div>
      </div>

      <!-- From / To -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
        <div>
          <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">From</h4>
          <p class="font-semibold">TailAdminLTE Inc.</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            795 Folsom Ave, Suite 600<br>
            San Francisco, CA 94107<br>
            Phone: (804) 123-5432<br>
            Email: billing@tailadminlte.com
          </p>
        </div>
        <div>
          <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">To</h4>
          <p class="font-semibold">John Doe</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            455 Foggy Heights<br>
            AZ 85004, US<br>
            Phone: (602) 519-0450<br>
            Email: john.doe@example.com
          </p>
        </div>
      </div>

      <!-- Line Items Table -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">#</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Product</th>
              <th class="py-3 px-4 text-left font-semibold text-gray-500 dark:text-gray-400">Description</th>
              <th class="py-3 px-4 text-right font-semibold text-gray-500 dark:text-gray-400">Qty</th>
              <th class="py-3 px-4 text-right font-semibold text-gray-500 dark:text-gray-400">Unit Price</th>
              <th class="py-3 px-4 text-right font-semibold text-gray-500 dark:text-gray-400">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in lineItems" :key="item.id" class="border-b border-gray-100 dark:border-gray-800">
              <td class="py-3 px-4">{{ item.id }}</td>
              <td class="py-3 px-4 font-medium">{{ item.product }}</td>
              <td class="py-3 px-4 text-gray-500 dark:text-gray-400">{{ item.description }}</td>
              <td class="py-3 px-4 text-right">{{ item.qty }}</td>
              <td class="py-3 px-4 text-right">{{ fmt(item.unitPrice) }}</td>
              <td class="py-3 px-4 text-right font-medium">{{ fmt(item.subtotal) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Totals -->
      <div class="flex flex-col sm:flex-row justify-between gap-8">
        <!-- Payment Methods -->
        <div class="flex-1">
          <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Payment Methods</h4>
          <div class="flex gap-3 text-gray-400">
            <div class="flex items-center gap-1 text-sm">
              <CreditCard class="w-5 h-5" />
              <span>Visa</span>
            </div>
            <div class="flex items-center gap-1 text-sm">
              <CreditCard class="w-5 h-5" />
              <span>Mastercard</span>
            </div>
            <div class="flex items-center gap-1 text-sm">
              <Wallet class="w-5 h-5" />
              <span>PayPal</span>
            </div>
          </div>
          <p class="text-xs text-gray-400 mt-2">Payment is due within 30 days. Late payment may incur additional charges.</p>
        </div>

        <!-- Totals Table -->
        <div class="w-full sm:w-72">
          <table class="w-full text-sm">
            <tr>
              <td class="py-1.5 text-gray-500 dark:text-gray-400">Subtotal</td>
              <td class="py-1.5 text-right font-medium">{{ fmt(subtotal) }}</td>
            </tr>
            <tr>
              <td class="py-1.5 text-gray-500 dark:text-gray-400">Tax (8%)</td>
              <td class="py-1.5 text-right font-medium">{{ fmt(tax) }}</td>
            </tr>
            <tr>
              <td class="py-1.5 text-gray-500 dark:text-gray-400">Shipping</td>
              <td class="py-1.5 text-right font-medium">{{ fmt(shipping) }}</td>
            </tr>
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <td class="py-2 font-bold text-base">Total</td>
              <td class="py-2 text-right font-bold text-base text-blue-600">{{ fmt(total) }}</td>
            </tr>
          </table>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-end gap-2 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 no-print">
        <button @click="handlePrint" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition inline-flex items-center gap-1">
          <Printer class="w-4 h-4" /> Print
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition inline-flex items-center gap-1">
          <Download class="w-4 h-4" /> Download PDF
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
