<script setup>
import { reactive } from 'vue';

// Reactive form data
const form = reactive({
  trainName: '',
  from: '',
  to: '',
});

function searchByTrain() {
  console.log("Search by Train", form.trainName);
}

function searchByStation() {
  console.log("Search by Station", form.from, form.to);
}
</script>

<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Left Section with Image -->
    <div class="w-1/2 flex items-center justify-center">
      <img src="@/assets/login-bg.png" alt="TraintrackerBD" class="w-4/5 rounded-3xl" />
    </div>

    <!-- Right Section with Forms -->
    <div class="w-1/2 flex flex-col justify-center items-center space-y-8">
      <!-- Search by Train -->
      <div class="w-4/5 bg-white border border-green-600 p-6 rounded-xl shadow-lg">
        <h2 class="text-xl font-semibold text-green-700 text-center mb-4">
          Search by Train
        </h2>
        <form @submit.prevent="searchByTrain" class="space-y-4">
          <input v-model="form.trainName" type="text" placeholder="Enter Train name or code"
            class="w-full border border-green-500 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-800">
            Check Status
          </button>
        </form>
      </div>

      <!-- Separator -->
      <div class="flex items-center w-full">
        <div class="ml-24 flex-grow border-t border-gray-300"></div>
        <span class="mx-4 text-gray-500 font-medium">OR</span>
        <div class="mr-24 flex-grow border-t border-gray-300"></div>
      </div>

      <!-- Search by Station -->
      <div class="w-4/5 bg-white border border-green-600 p-6 rounded-xl shadow-lg">
        <h2 class="text-xl font-semibold text-green-700 text-center mb-4">
          Search by Station
        </h2>
        <form @submit.prevent="searchByStation" class="space-y-4">
          <input v-model="form.from" type="text" placeholder="From"
            class="w-full border border-green-500 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
          <input v-model="form.to" type="text" placeholder="To"
            class="w-full border border-green-500 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-800">
            Check Status
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>