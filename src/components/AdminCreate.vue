<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth.js";
const name = ref("");
const genres = ref("");
const releaseDate = ref("");
const company = ref("");
const platform = ref("");

async function handleCreate(event) {
    event.preventDefault();
    
}
</script>

<template>
  <form @submit="handleCreate" class="space-y-4 grow px-28 py-8" action="#">
    <div>
      <label
        for="name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add name</label
      >
      <input
        type="text"
        name="name"
        id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="name"
        v-model="name"
        required
      />
    </div>
    <div>
      <label
        for="genres"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add genres</label
      >
      <input
        type="genres"
        name="genres"
        id="genres"
        placeholder="genres"
        v-model="genres"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="release-date"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add release date</label
      >
      <input
        type="release-date"
        name="release-date"
        id="release-date"
        placeholder="release-date"
        v-model="releaseDate"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="company"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add company</label
      >
      <input
        type="company"
        name="company"
        id="company"
        placeholder="company"
        v-model="company"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div>
      <label
        for="platform"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add platform</label
      >
      <input
        type="platform"
        name="platform"
        id="platform"
        placeholder="platform"
        v-model="platform"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add the videogame
    </button>
  </form>
</template>
