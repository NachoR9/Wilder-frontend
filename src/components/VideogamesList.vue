<script setup>
import { ref, onMounted } from "vue";
import { useVideogameStore } from "@/stores/videogames";
import { useAuthStore } from "@/stores/auth.js";
import axios from "axios";
import { useRoute } from "vue-router";

const videogameStore = useVideogameStore();
const authStore = useAuthStore();

const route = useRoute();

const genres = ref([]);
const selectedGenre = ref("");

onMounted(async () => {
  const genre = route.query.genre;
  videogameStore.fetchVideogames(genre);
  selectedGenre.value = genre ?? "";
  const response = await axios.get("http://localhost:8080/api/v1/genres");
  genres.value = response.data;
});

async function addVideogame(id) {
  const response = await axios.post(
    "http://localhost:8080/api/v1/user/videogames",
    {
      id: id,
    },
    { withCredentials: true }
  );
}

async function deleteVideogame(id) {
  const response = await axios.delete(
    `http://localhost:8080/api/v1/videogames/${id}`,
    { withCredentials: true }
  );

  if (response.status === 200) {
    videogameStore.remove(id);
  }
}

function filterGames(e) {
  e.preventDefault();
  videogameStore.fetchVideogames(selectedGenre.value);
}
</script>

<template>
  <form
    @submit="filterGames"
    class="flex items-center gap-8 px-4 sm:px-28 py-8"
  >
    <label
      for="genres"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >Select a genre</label
    >
    <select
      v-model="selectedGenre"
      id="genres"
      class="grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="">All</option>
      <option v-for="genre in genres" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
    <button
      type="submit"
      class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      Filter
    </button>
  </form>
  <div class="px-4 sm:px-28 py-8">
    <ul role="list" class="divide-y divide-purple-600">
      <li v-for="videogame in videogameStore.videogames" class="py-8">
        <div class="flex gap-12 items-center">
          <div class="flex-shrink-0">
            <img
              class="w-24 h-24 rounded-md object-cover"
              :src="videogame.image"
              :alt="videogame.name"
            />
          </div>
          <div class="flex-1 min-w-0 md:ms-12">
            <p class="text-lg font-medium text-gray-900">
              {{ videogame.name }}
            </p>
            <p class="text-md text-gray-500">
              {{ videogame.genres.join(", ") }}
            </p>
          </div>

          <div
            class="inline-flex flex-col gap-3 items-end text-md font-semibold text-gray-900"
          >
            {{ videogame.platform }}
            <button
              @click="addVideogame(videogame.id)"
              v-if="authStore.isAuthenticated"
              type="button"
              class="hidden md:block focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add to My games
            </button>
            <button
              @click="deleteVideogame(videogame.id)"
              v-if="authStore.userRole === 'ROLE_ADMIN'"
              type="buton"
              class="hidden md:block focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete game
            </button>
            <RouterLink
              :to="`/admin/edit/${videogame.id}`"
              v-if="authStore.userRole === 'ROLE_ADMIN'"
              class="hidden md:block focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >Edit game</RouterLink
            >
          </div>
        </div>
        <div class="flex md:hidden pt-2 justify-around">
          <button
            @click="addVideogame(videogame.id)"
            v-if="authStore.isAuthenticated"
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add to My games
          </button>
          <button
            @click="deleteVideogame(videogame.id)"
            v-if="authStore.userRole === 'ROLE_ADMIN'"
            type="buton"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete game
          </button>
          <RouterLink
            :to="`/admin/edit/${videogame.id}`"
            v-if="authStore.userRole === 'ROLE_ADMIN'"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >Edit game</RouterLink
          >
        </div>
      </li>
    </ul>
  </div>
</template>
