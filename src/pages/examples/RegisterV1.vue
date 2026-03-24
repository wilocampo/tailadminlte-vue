<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { UserPlus, Github } from 'lucide-vue-next'
import InputGroup from '@/components/forms/InputGroup.vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agreeTerms = ref(false)
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-card-body">

        <!-- Logo -->
        <div class="auth-logo">
          <RouterLink to="/"><span>Tail</span>AdminLTE</RouterLink>
          <p>Register a new membership</p>
        </div>

        <!-- Register Form -->
        <form @submit.prevent>
          <InputGroup v-model="fullName" type="text" placeholder="Full Name" icon="User" />
          <InputGroup v-model="email" type="email" placeholder="Email" icon="Mail" />
          <InputGroup v-model="password" type="password" placeholder="Password" icon="Lock" />
          <InputGroup v-model="confirmPassword" type="password" placeholder="Confirm Password" icon="Lock" />

          <div class="auth-terms">
            <input type="checkbox" id="terms" v-model="agreeTerms">
            <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
          </div>

          <button type="submit" class="auth-btn auth-btn-primary">
            Register <UserPlus class="w-4 h-4" />
          </button>
        </form>

        <!-- Social Login -->
        <div class="auth-divider">OR</div>

        <div class="auth-social-buttons">
          <a href="#" class="auth-social-btn btn-facebook" title="Sign up with Facebook">f</a>
          <a href="#" class="auth-social-btn btn-google" title="Sign up with Google">G+</a>
          <a href="#" class="auth-social-btn btn-github" title="Sign up with GitHub">
            <Github class="w-4 h-4" />
          </a>
        </div>

        <!-- Links -->
        <div class="auth-links">
          <p><RouterLink to="/auth/login-v1">I already have a membership</RouterLink></p>
        </div>

      </div>
    </div>
  </div>
</template>
