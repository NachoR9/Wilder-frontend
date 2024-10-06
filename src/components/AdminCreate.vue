<script setup>
import { onMounted, ref, useTemplateRef } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import axios from "axios";
import { initFlowbite } from "flowbite";
const name = ref("");
const genres = ref([]);
const releaseDate = ref("");
const company = ref("");
const platform = ref("");
const apiGenres = ref([]);

onMounted(async () => {
  initFlowbite()
  const response = await axios.get("http://localhost:8080/api/v1/genres");
  apiGenres.value = response.data;
});

async function handleCreate(event) {
  event.preventDefault();
  const selectedGenres = [];
  for (let i = 0; i < genres.value.length; i++) {
    if (genres.value[i].checked) {
      selectedGenres.push(i + 1);
    }
  }
  axios.post(
    "http://localhost:8080/api/v1/videogames",
    {
      name: name.value,
      genres: selectedGenres,
      releaseDate: releaseDate.value,
      company: company.value,
      platform: platform.value,
    },
    {
      withCredentials: true,
    }
  );
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

    <label
        for=""
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Add genres</label
      >
    <button
      id="dropdownBgHoverButton"
      data-dropdown-toggle="dropdownBgHover"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-flex w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-whitepx-5 py-2.5 text-center items-center"
      type="button"
    >
      Select genres
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <div
      id="dropdownBgHover"
      class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700"
    >
      <ul
        class="p-3 h-48 overflow-y-auto space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownBgHoverButton"
      >
        <li v-for="genre in apiGenres">
          <div
            class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              ref="genres"
              :id="`genre-${genre.id}`"
              type="checkbox"
              :value="genre.id"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              :for="`genre-${genre.id}`"
              class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
              >{{ genre.name }}</label
            >
          </div>
        </li>
      </ul>
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
