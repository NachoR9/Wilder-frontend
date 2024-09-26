<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useVideogameStore } from '@/stores/videogames';

const videogameStore = useVideogameStore();

onMounted(() => {
  videogameStore.fetchVideogames();
});

</script>

<template>
    <div class="px-28 py-8 ">
    <ul role="list" class="divide-y divide-purple-600">
            <li v-for="videogame in videogameStore.videogames" class="py-8">
                <div class="flex gap-12 items-center">
                    <div class="flex-shrink-0">
                        <img class="w-24 h-24 rounded-md object-cover" :src="videogame.image" :alt="videogame.name">
                    </div>
                    <div class="flex-1 min-w-0 ms-12">
                        <p class="text-lg font-medium text-gray-900 truncate">
                            {{videogame.name}}
                        </p>
                        <p class="text-md text-gray-500 truncate">
                            {{videogame.genres.join(", ")}}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-md font-semibold text-gray-900">
                        {{videogame.platform}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>