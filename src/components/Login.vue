<script setup>
import { reactive, ref } from 'vue';
import loginBg from '@/assets/login-bg.png'; // Import your image here

const form = reactive({
  email: '',
  password: ''
});

const showPassword = ref(false);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function loginUser() {
  console.log("Login submitted", form);
}
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Section with Background Image -->
    <div class="w-1/2 bg-cover bg-center" :style="{ backgroundImage: `url(${loginBg})` }">
      <!-- This section is for the image on the left -->
    </div>

    <!-- Right Section with Login Form -->
    <div class="w-1/2 flex justify-center items-center bg-gray-100">
      <div class="bg-white w-full border border-green-600 max-w-md p-8 rounded-2xl shadow-lg ">
        <div class="bg-green-600 text-white text-xl font-semibold py-3 px-6 rounded-t-lg text-center">
          Login to Train Tracker BD
        </div>
        <form @submit.prevent="loginUser" class="pt-6 space-y-4">
          <div>
            <label class="block text-gray-800 font-medium mb-1">Email / Mobile</label>
            <input v-model="form.email" type="text" placeholder="Enter your email or mobile"
              class="border border-green-500 p-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label class="block text-gray-800 font-medium mb-1">Password</label>
            <div class="relative">
              <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                class="border border-green-500 p-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button type="button" @click="togglePasswordVisibility" class="absolute inset-y-0 right-2 text-gray-500"
                aria-label="Toggle Password Visibility">
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
            <div class="text-right text-sm">
              <a href="#" class="text-green-600 hover:underline">Forgot your <span
                  class="font-medium">Password</span>?</a>
            </div>
          </div>
          <button type="submit"
            class="bg-green-600 text-white w-full py-2 rounded-2xl text-lg font-semibold hover:bg-green-800">
            LOGIN
          </button>
          <div class="flex items-center my-4">
            <hr class="flex-grow border-t border-gray-300" />
            <span class="px-2 text-gray-500">OR</span>
            <hr class="flex-grow border-t border-gray-300" />
          </div>
          <button type="button"
            class="border-2 border-green-700 text-green-700 w-full py-2 rounded-2xl text-lg font-semibold hover:bg-green-100">
            GUEST LOGIN
          </button>
        </form>
        <p class="text-center text-sm mt-4">
          Did you have an account yet?
          <router-link to="/signup" class="text-green-500 hover:underline font-medium">Sign Up Now</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
