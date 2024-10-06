<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth.js";
import axios from "axios";

const authStore = useAuthStore();
const myVideogames = ref([]);

onMounted(async () => {
  const response = await axios.get(
    "http://localhost:8080/api/v1/user/videogames", {
        withCredentials: true
    }
  );
  myVideogames.value = response.data;
});

async function removeVideogame(id) {
  const response = await axios.delete(
    `http://localhost:8080/api/v1/user/videogames/${id}`,
    { withCredentials: true }
  );
  if (response.status === 200) {
    myVideogames.value = myVideogames.value.filter(v => v.id !== id)
  }
}
</script>

<template>
  <div class="px-28 py-8">
    <ul role="list" class="divide-y divide-purple-600">
      <li v-for="videogame in myVideogames" class="py-8">
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
              @click="removeVideogame(videogame.id)"
              v-if="authStore.isAuthenticated"
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Remove videogame
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
