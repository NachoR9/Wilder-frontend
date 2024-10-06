<script setup>
import Slider from "@/components/Slider.vue";
import Card from "@/components/Card.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const genres = ref([]);

onMounted(async () => {
  const response = await axios.get("http://localhost:8080/api/v1/genres");
  genres.value = response.data;
});
</script>

<template>
  <h1 class="text-center text-5xl bg-violet-950 text-yellow-400 py-4">New releases</h1>
  <Slider />
  <h2 class="text-center text-5xl mt-8 text-violet-950 py-4">Choose your playstyle</h2>
  <div class="grid grid-cols-4 gap-8 mt-8 px-8 pb-8">
    <Card
      v-for="genre in genres"
      :title="genre.name"
      :to="`/videogames?genre=${genre.id}`"
      :image="genre.image"
    />
  </div>
</template>
