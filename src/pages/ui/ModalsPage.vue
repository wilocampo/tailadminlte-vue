<script setup lang="ts">
import { ref } from 'vue'
import AppCard from '@/components/widgets/AppCard.vue'
import AppModal from '@/components/ui/AppModal.vue'
import { Trash, Plus, CheckCircle, Info, AlertTriangle, Check } from 'lucide-vue-next'

const showDefault = ref(false)
const showSmall = ref(false)
const showLarge = ref(false)
const showXL = ref(false)
const showScrollable = ref(false)
const showCentered = ref(false)
const showPrimary = ref(false)
const showSuccess = ref(false)
const showWarning = ref(false)
const showDanger = ref(false)
const showConfirmation = ref(false)
const showForm = ref(false)
const showSuccessConfirm = ref(false)
</script>

<template>
  <div>

    <!-- Default & Sized Modals -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <AppCard title="Default Modal">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Click the button to open a standard modal dialog.</p>
        <button @click="showDefault = true" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Launch Default Modal</button>

        <AppModal v-model:open="showDefault" title="Default Modal">
          <p class="text-sm text-gray-600 dark:text-gray-400">This is the default modal. It centers on the viewport and has a backdrop overlay. Click outside or press the X to close it.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Modals are built using Vue for state management and Tailwind CSS for styling. They support dark mode automatically.</p>
          <template #footer>
            <button @click="showDefault = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Save Changes</button>
          </template>
        </AppModal>
      </AppCard>

      <AppCard title="Modal Sizes">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Modals come in various sizes for different content needs.</p>
        <div class="flex flex-wrap gap-2">
          <button @click="showSmall = true" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">Small Modal</button>
          <button @click="showLarge = true" class="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm font-medium transition-colors">Large Modal</button>
          <button @click="showXL = true" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">XL Modal</button>
        </div>

        <AppModal v-model:open="showSmall" title="Small Modal" size="sm">
          <p class="text-sm text-gray-600 dark:text-gray-400">This is a small modal (max-w-sm). Ideal for simple confirmations or brief messages.</p>
          <template #footer>
            <button @click="showSmall = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
          </template>
        </AppModal>

        <AppModal v-model:open="showLarge" title="Large Modal" size="lg">
          <p class="text-sm text-gray-600 dark:text-gray-400">This is a large modal (max-w-2xl). Useful for displaying detailed information, large forms, or data tables.</p>
          <template #footer>
            <button @click="showLarge = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
          </template>
        </AppModal>

        <AppModal v-model:open="showXL" title="Extra Large Modal" size="xl">
          <p class="text-sm text-gray-600 dark:text-gray-400">This is an extra large modal (max-w-4xl). Perfect for complex layouts, dashboards, or multi-step wizards that need maximum screen space.</p>
          <template #footer>
            <button @click="showXL = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
          </template>
        </AppModal>
      </AppCard>
    </div>

    <!-- Scrollable & Centered Modals -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <AppCard title="Scrollable Modal">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">When modal content is long, the body becomes scrollable while the header and footer remain fixed.</p>
        <button @click="showScrollable = true" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Scrollable Modal</button>

        <AppModal v-model:open="showScrollable" title="Scrollable Modal" :scrollable="true">
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">This modal has a scrollable body. The content below demonstrates how the modal handles overflow content while keeping the header and footer fixed.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
          <template #footer>
            <button @click="showScrollable = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Understood</button>
          </template>
        </AppModal>
      </AppCard>

      <AppCard title="Centered Modal">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">This modal is vertically centered in the viewport.</p>
        <button @click="showCentered = true" class="px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 text-sm font-medium transition-colors">Centered Modal</button>

        <AppModal v-model:open="showCentered" title="Centered Modal" :centered="true">
          <div class="text-center">
            <div class="mx-auto w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-4">
              <Info class="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h5 class="text-xl font-semibold mb-2">Centered Modal</h5>
            <p class="text-sm text-gray-600 dark:text-gray-400">This modal is centered both vertically and horizontally. It uses a centered layout with an icon, useful for informational dialogs.</p>
          </div>
          <template #footer>
            <button @click="showCentered = false" class="px-6 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600 text-sm font-medium">Got it!</button>
          </template>
        </AppModal>
      </AppCard>
    </div>

    <!-- Colored Header & Confirmation Modals -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <AppCard title="Colored Header Modals">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Modals with colored headers for different contexts.</p>
        <div class="flex flex-wrap gap-2">
          <button @click="showPrimary = true" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium transition-colors">Primary</button>
          <button @click="showSuccess = true" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">Success</button>
          <button @click="showWarning = true" class="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm font-medium transition-colors">Warning</button>
          <button @click="showDanger = true" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">Danger</button>
        </div>

        <AppModal v-model:open="showPrimary" title="Primary Modal" header-class="bg-blue-600">
          <p class="text-sm text-gray-600 dark:text-gray-400">This modal features a primary blue header, suitable for standard informational dialogs.</p>
          <template #footer>
            <button @click="showPrimary = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Close</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">Save</button>
          </template>
        </AppModal>

        <AppModal v-model:open="showSuccess" title="Success Modal" header-class="bg-green-600">
          <p class="text-sm text-gray-600 dark:text-gray-400">This modal has a success green header, perfect for confirmation messages or success notifications.</p>
          <template #footer>
            <button @click="showSuccess = false" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">OK</button>
          </template>
        </AppModal>

        <AppModal v-model:open="showWarning" title="Warning Modal" header-class="bg-yellow-500 !text-gray-900">
          <p class="text-sm text-gray-600 dark:text-gray-400">This modal has a warning yellow header, ideal for cautionary messages or important notices.</p>
          <template #footer>
            <button @click="showWarning = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
            <button class="px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm">Proceed</button>
          </template>
        </AppModal>

        <AppModal v-model:open="showDanger" title="Danger Modal" header-class="bg-red-600">
          <p class="text-sm text-gray-600 dark:text-gray-400">This modal has a danger red header, used for destructive action confirmations or critical error messages.</p>
          <template #footer>
            <button @click="showDanger = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
            <button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm">Delete</button>
          </template>
        </AppModal>
      </AppCard>

      <AppCard title="Confirmation Modal">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">A common pattern for destructive action confirmations.</p>
        <button @click="showConfirmation = true" class="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium transition-colors">
          <Trash class="w-4 h-4" /> Delete Account
        </button>

        <AppModal v-model:open="showConfirmation" title="Are you sure?" :centered="true" size="sm">
          <div class="text-center">
            <div class="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle class="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h5 class="text-xl font-semibold mb-2">Are you sure?</h5>
            <p class="text-sm text-gray-600 dark:text-gray-400">This action cannot be undone. Your account and all associated data will be permanently deleted.</p>
          </div>
          <template #footer>
            <button @click="showConfirmation = false" class="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm font-medium dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
            <button @click="showConfirmation = false" class="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm font-medium">Yes, Delete</button>
          </template>
        </AppModal>
      </AppCard>
    </div>

    <!-- Form Modal & Success Confirmation -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
      <AppCard title="Form Modal">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">A modal containing a form for data entry.</p>
        <button @click="showForm = true" class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">
          <Plus class="w-4 h-4" /> Add New User
        </button>

        <AppModal v-model:open="showForm" title="Add New User">
          <form class="space-y-4" @submit.prevent>
            <div>
              <label class="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" placeholder="Enter full name" class="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" placeholder="Enter email" class="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Role</label>
              <select class="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select a role...</option>
                <option>Administrator</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium mb-1">Bio</label>
              <textarea rows="3" placeholder="Short bio..." class="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div class="flex items-center gap-2">
              <input type="checkbox" id="sendInvite" class="rounded border-gray-300 dark:border-gray-600">
              <label for="sendInvite" class="text-sm">Send invitation email</label>
            </div>
          </form>
          <template #footer>
            <button @click="showForm = false" class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">Cancel</button>
            <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm">Create User</button>
          </template>
        </AppModal>
      </AppCard>

      <AppCard title="Success Confirmation Modal">
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">A modal to confirm successful actions with a visual indicator.</p>
        <button @click="showSuccessConfirm = true" class="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium transition-colors">
          <CheckCircle class="w-4 h-4" /> Submit Order
        </button>

        <AppModal v-model:open="showSuccessConfirm" title="Success!" :centered="true" size="sm">
          <div class="text-center py-4">
            <div class="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <Check class="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h5 class="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Success!</h5>
            <p class="text-sm text-gray-600 dark:text-gray-400">Your order has been submitted successfully. You will receive a confirmation email shortly.</p>
          </div>
          <template #footer>
            <button @click="showSuccessConfirm = false" class="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm font-medium">Continue</button>
          </template>
        </AppModal>
      </AppCard>
    </div>

  </div>
</template>
