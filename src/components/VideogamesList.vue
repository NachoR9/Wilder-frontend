<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useVideogameStore } from "@/stores/videogames";
import { useAuthStore } from "@/stores/auth.js";
import axios from "axios";

const videogameStore = useVideogameStore();
const authStore = useAuthStore();

onMounted(() => {
  videogameStore.fetchVideogames();
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
</script>

<template>
  <div class="px-28 py-8">
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
          <div class="flex-1 min-w-0 ms-12">
            <p class="text-lg font-medium text-gray-900 truncate">
              {{ videogame.name }}
            </p>
            <p class="text-md text-gray-500 truncate">
              {{ videogame.genres.join(", ") }}
            </p>
          </div>

          <div
            class="inline-flex flex-col gap-3 items-center text-md font-semibold text-gray-900"
          >
            {{ videogame.platform }}
            <button
              @click="addVideogame(videogame.id)"
              v-if="authStore.isAuthenticated"
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add to My games
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
