<script setup lang="ts">
import { ref } from 'vue'
import AppCard from '@/components/widgets/AppCard.vue'
import { User, Mail, Lock, Eye, Search, Send } from 'lucide-vue-next'

const rangeVal = ref(50)
const billingPeriod = ref('monthly')
</script>

<template>
  <div class="w-full px-4">

    <!-- Text Inputs & Textarea -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="Text Inputs">
        <div class="space-y-4">
          <div>
            <label for="defaultInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default Input</label>
            <input type="text" id="defaultInput" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
          </div>
          <div>
            <label for="placeholderInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">With Placeholder</label>
            <input type="text" id="placeholderInput" placeholder="Enter your name..." class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500">
          </div>
          <div>
            <label for="disabledInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled</label>
            <input type="text" id="disabledInput" value="Disabled input" disabled class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
          </div>
          <div>
            <label for="readonlyInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Readonly</label>
            <input type="text" id="readonlyInput" value="Readonly value" readonly class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none dark:text-gray-200">
          </div>
          <div>
            <label for="emailInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" id="emailInput" placeholder="user@example.com" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
          <div>
            <label for="passwordInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type="password" id="passwordInput" placeholder="Password" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
          <div>
            <label for="numberInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number</label>
            <input type="number" id="numberInput" placeholder="0" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
        </div>
      </AppCard>

      <AppCard title="Textarea &amp; Select">
        <div class="space-y-4">
          <div>
            <label for="textarea1" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Textarea</label>
            <textarea id="textarea1" rows="4" placeholder="Write something..." class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400 resize-y"></textarea>
          </div>
          <div>
            <label for="select1" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Single Select</label>
            <select id="select1" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
              <option value="">-- Select an option --</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </select>
          </div>
          <div>
            <label for="multiSelect" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Multiple Select</label>
            <select id="multiSelect" multiple size="4" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </select>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple</p>
          </div>
          <div>
            <label for="disabledSelect" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Disabled Select</label>
            <select id="disabledSelect" disabled class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400 cursor-not-allowed">
              <option>Disabled option</option>
            </select>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- Input with Icons/Addons -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="Input with Icons">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Left Icon</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <User class="w-4 h-4" />
              </span>
              <input type="text" placeholder="Username" class="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Right Icon</label>
            <div class="relative">
              <input type="email" placeholder="Email address" class="w-full pl-3 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
              <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <Mail class="w-4 h-4" />
              </span>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Both Icons</label>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock class="w-4 h-4" />
              </span>
              <input type="password" placeholder="Password" class="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
              <span class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <Eye class="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </AppCard>

      <AppCard title="Input Groups">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Text Addon (Left)</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">@</span>
              <input type="text" placeholder="Username" class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Text Addon (Right)</label>
            <div class="flex">
              <input type="email" placeholder="Email" class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
              <span class="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md">@example.com</span>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Button Addon</label>
            <div class="flex">
              <input type="text" placeholder="Search..." class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
              <button type="button" class="px-4 py-2 bg-primary text-white text-sm font-medium rounded-r-md hover:bg-blue-700 transition-colors">
                <Search class="w-4 h-4" />
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency Addon</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-md">$</span>
              <input type="number" placeholder="0.00" class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
              <span class="inline-flex items-center px-3 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-md">.00</span>
            </div>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- Checkboxes & Radios -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="Checkboxes">
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Checkboxes</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" class="w-4 h-4 accent-primary rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"> Checkbox 1
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" checked class="w-4 h-4 accent-primary rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"> Checkbox 2 (checked)
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <input type="checkbox" disabled class="w-4 h-4 rounded border-gray-300 dark:border-gray-600 cursor-not-allowed"> Checkbox 3 (disabled)
              </label>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Inline Checkboxes</p>
            <div class="flex flex-wrap gap-4">
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" class="w-4 h-4 accent-primary rounded border-gray-300"> Option A
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" class="w-4 h-4 accent-primary rounded border-gray-300"> Option B
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" class="w-4 h-4 accent-primary rounded border-gray-300"> Option C
              </label>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Toggle Switch</p>
            <div class="space-y-2">
              <label class="inline-flex items-center gap-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" class="sr-only peer">
                  <div class="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-primary transition-colors"></div>
                  <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-5"></div>
                </div>
                <span class="text-sm text-gray-700 dark:text-gray-300">Toggle switch off</span>
              </label>
              <label class="inline-flex items-center gap-3 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" checked class="sr-only peer">
                  <div class="w-10 h-5 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-success transition-colors"></div>
                  <div class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-5"></div>
                </div>
                <span class="text-sm text-gray-700 dark:text-gray-300">Toggle switch on</span>
              </label>
            </div>
          </div>
        </div>
      </AppCard>

      <AppCard title="Radio Buttons">
        <div class="space-y-4">
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Radio Buttons</p>
            <div class="space-y-2">
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="radio1" class="w-4 h-4 accent-primary border-gray-300 dark:border-gray-600"> Option 1
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="radio1" checked class="w-4 h-4 accent-primary border-gray-300 dark:border-gray-600"> Option 2 (selected)
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <input type="radio" name="radio1" disabled class="w-4 h-4 border-gray-300 dark:border-gray-600 cursor-not-allowed"> Option 3 (disabled)
              </label>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Inline Radio Buttons</p>
            <div class="flex flex-wrap gap-4">
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="radio2" class="w-4 h-4 accent-primary border-gray-300"> Left
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="radio2" checked class="w-4 h-4 accent-primary border-gray-300"> Center
              </label>
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="radio" name="radio2" class="w-4 h-4 accent-primary border-gray-300"> Right
              </label>
            </div>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Styled (Button Group)</p>
            <div class="flex">
              <button type="button" @click="billingPeriod = 'daily'" :class="billingPeriod === 'daily' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'" class="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-l-md transition-colors">Daily</button>
              <button type="button" @click="billingPeriod = 'monthly'" :class="billingPeriod === 'monthly' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'" class="px-4 py-2 text-sm font-medium border-t border-b border-gray-300 dark:border-gray-600 transition-colors">Monthly</button>
              <button type="button" @click="billingPeriod = 'yearly'" :class="billingPeriod === 'yearly' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'" class="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded-r-md transition-colors">Yearly</button>
            </div>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- File, Range, Sizes, Color, DateTime -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="File, Range &amp; Color Inputs">
        <div class="space-y-4">
          <div>
            <label for="fileInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">File Input</label>
            <input type="file" id="fileInput" class="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-blue-700 file:cursor-pointer cursor-pointer">
          </div>
          <div>
            <label for="multiFileInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Multiple Files</label>
            <input type="file" id="multiFileInput" multiple class="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-secondary file:text-white hover:file:bg-gray-600 file:cursor-pointer cursor-pointer">
          </div>
          <div>
            <label for="rangeInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Range Input</label>
            <input type="range" id="rangeInput" min="0" max="100" value="50" class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Range with Value: <span class="font-semibold text-primary">{{ rangeVal }}</span></label>
            <input type="range" min="0" max="100" v-model.number="rangeVal" class="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary">
          </div>
          <div>
            <label for="colorInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Color Picker</label>
            <input type="color" id="colorInput" value="#0d6efd" class="w-12 h-10 p-1 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer bg-white dark:bg-gray-700">
          </div>
        </div>
      </AppCard>

      <AppCard title="Date &amp; Time Inputs">
        <div class="space-y-4">
          <div>
            <label for="dateInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
            <input type="date" id="dateInput" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
          </div>
          <div>
            <label for="timeInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time</label>
            <input type="time" id="timeInput" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
          </div>
          <div>
            <label for="datetimeInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date &amp; Time</label>
            <input type="datetime-local" id="datetimeInput" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
          </div>
          <div>
            <label for="monthInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Month</label>
            <input type="month" id="monthInput" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
          </div>
          <div>
            <label for="weekInput" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Week</label>
            <input type="week" id="weekInput" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
          </div>
        </div>
      </AppCard>
    </div>

    <!-- Input Sizes & Floating Labels -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="Input Sizes">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Small</label>
            <input type="text" placeholder="Small input" class="w-full px-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Default</label>
            <input type="text" placeholder="Default input" class="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Large</label>
            <input type="text" placeholder="Large input" class="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
        </div>
      </AppCard>

      <AppCard title="Floating Labels">
        <div class="space-y-6">
          <div class="relative">
            <input type="text" id="floatName" placeholder=" " class="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
            <label for="floatName" class="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">Full Name</label>
          </div>
          <div class="relative">
            <input type="email" id="floatEmail" placeholder=" " class="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
            <label for="floatEmail" class="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">Email Address</label>
          </div>
          <div class="relative">
            <select id="floatSelect" class="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200">
              <option value="" selected></option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label for="floatSelect" class="absolute left-3 top-2 text-xs text-gray-500 dark:text-gray-400">Category</label>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- Horizontal & Inline Form Layouts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="Horizontal Form Layout">
        <form @submit.prevent>
          <div class="flex items-center mb-4">
            <label for="hEmail" class="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-300 text-right pr-4">Email</label>
            <div class="w-2/3">
              <input type="email" id="hEmail" placeholder="Email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
            </div>
          </div>
          <div class="flex items-center mb-4">
            <label for="hPassword" class="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-300 text-right pr-4">Password</label>
            <div class="w-2/3">
              <input type="password" id="hPassword" placeholder="Password" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="w-1/3"></div>
            <div class="w-2/3">
              <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <input type="checkbox" class="w-4 h-4 accent-primary rounded border-gray-300"> Remember me
              </label>
            </div>
          </div>
          <div class="flex">
            <div class="w-1/3"></div>
            <div class="w-2/3">
              <button type="submit" class="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">Sign in</button>
            </div>
          </div>
        </form>
      </AppCard>

      <AppCard title="Inline Form Layout">
        <form class="flex flex-wrap items-end gap-3" @submit.prevent>
          <div class="flex-1 min-w-[150px]">
            <label for="inlineName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input type="text" id="inlineName" placeholder="Jane Doe" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
          <div class="flex-1 min-w-[150px]">
            <label for="inlineEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" id="inlineEmail" placeholder="jane@example.com" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 placeholder:text-gray-400">
          </div>
          <div>
            <button type="submit" class="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
              <Send class="w-4 h-4 inline mr-1" /> Submit
            </button>
          </div>
        </form>
      </AppCard>
    </div>

  </div>
</template>
