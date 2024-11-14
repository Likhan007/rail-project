<script setup>
import { reactive, ref } from 'vue';
import signUpBg from '@/assets/login-bg.png'; // Make sure to place your image in the correct path

const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const showPassword = ref(false);
const showConfirmPassword = ref(false);

function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function toggleConfirmPasswordVisibility() {
  showConfirmPassword.value = !showConfirmPassword.value;
}

function signUpUser() {
  console.log("Signup submitted", form);
}
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Section with Background Image -->
    <div class="w-1/2 bg-cover bg-center" :style="{ backgroundImage: `url(${signUpBg})` }">
      <!-- This section is for the image on the left -->
    </div>
    
    <!-- Right Section with Signup Form -->
    <div class="w-1/2 flex justify-center items-center bg-gray-100">
      <div class="bg-white w-full border border-green-600 max-w-md p-8 rounded-2xl shadow-lg ">
        <div class="bg-green-600 text-white text-xl font-semibold py-3 px-6 rounded-t-lg text-center">
          Sign Up for Train Tracker BD
        </div>
        <form @submit.prevent="signUpUser" class="pt-6 space-y-4">
          <div>
            <label class="block text-gray-800 font-medium mb-1">Full Name</label>
            <input
              v-model="form.fullName"
              type="text"
              placeholder="Enter your full name"
              class="border border-green-500 p-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label class="block text-gray-800 font-medium mb-1">Email / Mobile</label>
            <input
              v-model="form.email"
              type="text"
              placeholder="Enter your email or mobile"
              class="border border-green-500 p-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label class="block text-gray-800 font-medium mb-1">Password</label>
            <div class="relative">
              <input
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                class="border border-green-500 p-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-2 text-gray-500"
                aria-label="Toggle Password Visibility"
              >
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-gray-800 font-medium mb-1">Confirm Password</label>
            <div class="relative">
              <input
                v-model="form.confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Confirm your password"
                class="border border-green-500 p-2 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                @click="toggleConfirmPasswordVisibility"
                class="absolute inset-y-0 right-2 text-gray-500"
                aria-label="Toggle Confirm Password Visibility"
              >
                <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </button>
            </div>
          </div>
          <button
            type="submit"
            class="bg-green-600 text-white w-full py-2 rounded-2xl text-lg font-semibold hover:bg-green-800"
          >
            SIGN UP
          </button>
          <p class="text-center text-sm mt-4">
            Already have an account?
            <a href="#" class="text-green-500 hover:underline font-medium">Login Now</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
