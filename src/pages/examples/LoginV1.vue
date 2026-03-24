<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { LogIn, Github } from 'lucide-vue-next'
import InputGroup from '@/components/forms/InputGroup.vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
</script>

<template>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-card-body">

        <!-- Logo -->
        <div class="auth-logo">
          <RouterLink to="/"><span>Tail</span>AdminLTE</RouterLink>
          <p>Sign in to start your session</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent>
          <InputGroup v-model="email" type="email" placeholder="Email" icon="Mail" />
          <InputGroup v-model="password" type="password" placeholder="Password" icon="Lock" />

          <div class="auth-remember-row">
            <label>
              <input type="checkbox" v-model="rememberMe"> Remember Me
            </label>
            <button type="submit" class="auth-btn auth-btn-primary" style="width: auto;">
              Sign In <LogIn class="w-4 h-4" />
            </button>
          </div>
        </form>

        <!-- Social Login -->
        <div class="auth-divider">OR</div>

        <div class="auth-social-buttons">
          <a href="#" class="auth-social-btn btn-facebook" title="Sign in with Facebook">f</a>
          <a href="#" class="auth-social-btn btn-google" title="Sign in with Google">G+</a>
          <a href="#" class="auth-social-btn btn-github" title="Sign in with GitHub">
            <Github class="w-4 h-4" />
          </a>
        </div>

        <!-- Links -->
        <div class="auth-links">
          <p><a href="#">I forgot my password</a></p>
          <p><RouterLink to="/auth/register-v1">Register a new membership</RouterLink></p>
        </div>

      </div>
    </div>
  </div>
</template>
