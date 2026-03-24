<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import AppCard from '@/components/widgets/AppCard.vue'
import { CheckCircle, AlertCircle, AlertTriangle } from 'lucide-vue-next'

// ── HTML5 Validation ──
const h5Submitted = ref(false)
function handleH5Submit(e: Event) {
  h5Submitted.value = true
  const form = e.target as HTMLFormElement
  if (form.checkValidity()) {
    alert('Form is valid!')
  }
}

// ── Real-time Validation ──
const rt = reactive({
  username: '',
  email: '',
  password: '',
  usernameTouched: false,
  emailTouched: false,
  passwordTouched: false,
})

const usernameValid = computed(() => rt.username.length >= 3)
const usernameError = computed(() => {
  if (!rt.usernameTouched || rt.username === '') return ''
  return usernameValid.value ? '' : 'Username must be at least 3 characters'
})

const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rt.email))
const emailError = computed(() => {
  if (!rt.emailTouched || rt.email === '') return ''
  return emailValid.value ? '' : 'Please enter a valid email address'
})

const passwordValid = computed(() => rt.password.length >= 8)
const passwordStrength = computed(() => {
  if (rt.password.length === 0) return ''
  if (rt.password.length < 6) return 'weak'
  if (rt.password.length < 10 && /[A-Z]/.test(rt.password) && /[0-9]/.test(rt.password)) return 'medium'
  if (rt.password.length >= 10 && /[A-Z]/.test(rt.password) && /[0-9]/.test(rt.password) && /[^A-Za-z0-9]/.test(rt.password)) return 'strong'
  return 'medium'
})
const passwordError = computed(() => {
  if (!rt.passwordTouched || rt.password === '') return ''
  return passwordValid.value ? '' : 'Password must be at least 8 characters'
})

const rtFormValid = computed(() => usernameValid.value && emailValid.value && passwordValid.value)

// ── Complete Registration Form ──
const regForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  zip: '',
  agree: false,
})
const regErrors = ref<Record<string, string>>({})
const regSubmitted = ref(false)

function validateReg() {
  const errors: Record<string, string> = {}
  if (!regForm.firstName.trim()) errors.firstName = 'First name is required'
  if (!regForm.lastName.trim()) errors.lastName = 'Last name is required'
  if (!regForm.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regForm.email)) errors.email = 'Invalid email'
  if (!regForm.city.trim()) errors.city = 'City is required'
  if (!regForm.state) errors.state = 'Please select a state'
  if (!regForm.zip.trim()) errors.zip = 'Zip is required'
  else if (!/^\d{5}$/.test(regForm.zip)) errors.zip = 'Must be 5 digits'
  if (!regForm.agree) errors.agree = 'You must agree to the terms'
  regErrors.value = errors
  return Object.keys(errors).length === 0
}

function submitReg() {
  regSubmitted.value = true
  if (validateReg()) {
    alert('Registration successful!')
  }
}
</script>

<template>
  <div class="w-full px-4">

    <!-- HTML5 Validation & Validation States -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="HTML5 Built-in Validation">
        <form novalidate @submit.prevent="handleH5Submit">
          <div class="mb-4">
            <label for="h5Name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name <span class="text-danger">*</span></label>
            <input type="text" id="h5Name" required minlength="2" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger invalid:[&:not(:placeholder-shown)]:focus:ring-danger valid:[&:not(:placeholder-shown)]:border-success valid:[&:not(:placeholder-shown)]:focus:ring-success" placeholder="Enter your name">
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Minimum 2 characters required</p>
          </div>
          <div class="mb-4">
            <label for="h5Email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span class="text-danger">*</span></label>
            <input type="email" id="h5Email" required class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger invalid:[&:not(:placeholder-shown)]:focus:ring-danger valid:[&:not(:placeholder-shown)]:border-success valid:[&:not(:placeholder-shown)]:focus:ring-success" placeholder="user@example.com">
          </div>
          <div class="mb-4">
            <label for="h5Phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
            <input type="tel" id="h5Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger valid:[&:not(:placeholder-shown)]:border-success" placeholder="123-456-7890">
            <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Format: 123-456-7890</p>
          </div>
          <div class="mb-4">
            <label for="h5Url" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
            <input type="url" id="h5Url" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200 invalid:[&:not(:placeholder-shown)]:border-danger valid:[&:not(:placeholder-shown)]:border-success" placeholder="https://example.com">
          </div>
          <button type="submit" class="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">Submit</button>
        </form>
      </AppCard>

      <AppCard title="Validation States">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Valid Input</label>
            <input type="text" value="Correct value" class="w-full px-3 py-2 border border-success rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-success dark:text-gray-200">
            <p class="mt-1 text-xs text-success flex items-center gap-1">
              <CheckCircle class="w-3 h-3" /> Looks good!
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invalid Input</label>
            <input type="text" value="Wrong" class="w-full px-3 py-2 border border-danger rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-danger dark:text-gray-200">
            <p class="mt-1 text-xs text-danger flex items-center gap-1">
              <AlertCircle class="w-3 h-3" /> Please enter at least 5 characters.
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Warning Input</label>
            <input type="text" value="Maybe" class="w-full px-3 py-2 border border-warning rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-warning dark:text-gray-200">
            <p class="mt-1 text-xs text-warning flex items-center gap-1">
              <AlertTriangle class="w-3 h-3" /> This value could cause issues.
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Valid Select</label>
            <select class="w-full px-3 py-2 border border-success rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-success dark:text-gray-200">
              <option value="1" selected>Valid option selected</option>
            </select>
            <p class="mt-1 text-xs text-success flex items-center gap-1">
              <CheckCircle class="w-3 h-3" /> Great choice!
            </p>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Invalid Textarea</label>
            <textarea rows="2" class="w-full px-3 py-2 border border-danger rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-danger dark:text-gray-200 resize-y"></textarea>
            <p class="mt-1 text-xs text-danger flex items-center gap-1">
              <AlertCircle class="w-3 h-3" /> This field is required.
            </p>
          </div>
        </div>
      </AppCard>
    </div>

    <!-- Real-time Validation & Complete Registration Form -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
      <AppCard title="Real-time Validation">
        <form @submit.prevent="alert('Form submitted!')">
          <div class="mb-4">
            <label for="rtUsername" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
            <input
              type="text"
              id="rtUsername"
              v-model="rt.username"
              @blur="rt.usernameTouched = true"
              @input="rt.usernameTouched = true"
              :class="{
                'border-success focus:ring-success': rt.usernameTouched && usernameValid,
                'border-danger focus:ring-danger': usernameError
              }"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
              placeholder="Enter username"
            >
            <p v-if="usernameError" class="mt-1 text-xs text-danger">{{ usernameError }}</p>
            <p v-if="rt.usernameTouched && usernameValid" class="mt-1 text-xs text-success">Username is available!</p>
          </div>
          <div class="mb-4">
            <label for="rtEmail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="rtEmail"
              v-model="rt.email"
              @blur="rt.emailTouched = true"
              @input="rt.emailTouched = true"
              :class="{
                'border-success focus:ring-success': rt.emailTouched && emailValid,
                'border-danger focus:ring-danger': emailError
              }"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
              placeholder="Enter email"
            >
            <p v-if="emailError" class="mt-1 text-xs text-danger">{{ emailError }}</p>
            <p v-if="rt.emailTouched && emailValid" class="mt-1 text-xs text-success">Valid email format!</p>
          </div>
          <div class="mb-4">
            <label for="rtPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input
              type="password"
              id="rtPassword"
              v-model="rt.password"
              @blur="rt.passwordTouched = true"
              @input="rt.passwordTouched = true"
              :class="{
                'border-success focus:ring-success': rt.passwordTouched && passwordValid,
                'border-danger focus:ring-danger': passwordError
              }"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
              placeholder="Enter password"
            >
            <p v-if="passwordError" class="mt-1 text-xs text-danger">{{ passwordError }}</p>
            <!-- Password strength indicator -->
            <div v-if="rt.password.length > 0" class="mt-2">
              <div class="flex gap-1 mb-1">
                <div class="h-1 flex-1 rounded-full" :class="passwordStrength === 'weak' ? 'bg-danger' : passwordStrength === 'medium' ? 'bg-warning' : passwordStrength === 'strong' ? 'bg-success' : 'bg-gray-200 dark:bg-gray-600'"></div>
                <div class="h-1 flex-1 rounded-full" :class="passwordStrength === 'medium' ? 'bg-warning' : passwordStrength === 'strong' ? 'bg-success' : 'bg-gray-200 dark:bg-gray-600'"></div>
                <div class="h-1 flex-1 rounded-full" :class="passwordStrength === 'strong' ? 'bg-success' : 'bg-gray-200 dark:bg-gray-600'"></div>
              </div>
              <p
                class="text-xs"
                :class="{
                  'text-danger': passwordStrength === 'weak',
                  'text-warning': passwordStrength === 'medium',
                  'text-success': passwordStrength === 'strong'
                }"
              >
                {{ passwordStrength ? passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1) + ' password' : '' }}
              </p>
            </div>
          </div>
          <button
            type="submit"
            :disabled="!rtFormValid"
            :class="rtFormValid ? 'bg-primary hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'"
            class="px-4 py-2 text-white text-sm font-medium rounded-md transition-colors"
          >Submit</button>
        </form>
      </AppCard>

      <AppCard title="Complete Registration Form">
        <form @submit.prevent="submitReg()">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="regForm.firstName"
                :class="regSubmitted && regErrors.firstName ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.firstName ? 'border-success focus:ring-success' : ''"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
                placeholder="John"
              >
              <p v-if="regSubmitted && regErrors.firstName" class="mt-1 text-xs text-danger">{{ regErrors.firstName }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="regForm.lastName"
                :class="regSubmitted && regErrors.lastName ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.lastName ? 'border-success focus:ring-success' : ''"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
                placeholder="Doe"
              >
              <p v-if="regSubmitted && regErrors.lastName" class="mt-1 text-xs text-danger">{{ regErrors.lastName }}</p>
            </div>
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span class="text-danger">*</span></label>
            <input
              type="email"
              v-model="regForm.email"
              :class="regSubmitted && regErrors.email ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.email ? 'border-success focus:ring-success' : ''"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
              placeholder="john@example.com"
            >
            <p v-if="regSubmitted && regErrors.email" class="mt-1 text-xs text-danger">{{ regErrors.email }}</p>
          </div>
          <div class="mb-3">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
            <input
              type="tel"
              v-model="regForm.phone"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
              placeholder="123-456-7890"
            >
          </div>
          <div class="grid grid-cols-6 gap-3 mb-3">
            <div class="col-span-3">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="regForm.city"
                :class="regSubmitted && regErrors.city ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.city ? 'border-success focus:ring-success' : ''"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
                placeholder="New York"
              >
              <p v-if="regSubmitted && regErrors.city" class="mt-1 text-xs text-danger">{{ regErrors.city }}</p>
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">State <span class="text-danger">*</span></label>
              <select
                v-model="regForm.state"
                :class="regSubmitted && regErrors.state ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.state ? 'border-success focus:ring-success' : ''"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
              >
                <option value="">Choose...</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </select>
              <p v-if="regSubmitted && regErrors.state" class="mt-1 text-xs text-danger">{{ regErrors.state }}</p>
            </div>
            <div class="col-span-1">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Zip <span class="text-danger">*</span></label>
              <input
                type="text"
                v-model="regForm.zip"
                :class="regSubmitted && regErrors.zip ? 'border-danger focus:ring-danger' : regSubmitted && !regErrors.zip ? 'border-success focus:ring-success' : ''"
                class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-gray-200"
                placeholder="10001"
              >
              <p v-if="regSubmitted && regErrors.zip" class="mt-1 text-xs text-danger">{{ regErrors.zip }}</p>
            </div>
          </div>
          <div class="mb-4">
            <label class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input type="checkbox" v-model="regForm.agree" class="w-4 h-4 accent-primary rounded border-gray-300"> I agree to the <a href="#" class="text-primary hover:underline">terms and conditions</a>
            </label>
            <p v-if="regSubmitted && regErrors.agree" class="mt-1 text-xs text-danger">{{ regErrors.agree }}</p>
          </div>
          <button type="submit" class="px-4 py-2 bg-success text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors">Register</button>
        </form>
      </AppCard>
    </div>

  </div>
</template>
