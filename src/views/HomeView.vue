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
  <main>
    <Slider />
    <div class="grid grid-cols-4 gap-4 mt-8 px-8">
      <Card
        v-for="genre in genres"
        :title="genre.name"
        :to="`/videogames?genre=${genre.id}`"
        image="src/assets/images/zeldaechoes.webp"
      />
    </div>
  </main>
</template>
