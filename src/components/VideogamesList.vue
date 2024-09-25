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
    <div>{{ videogameStore.videogames }}</div>

</template>