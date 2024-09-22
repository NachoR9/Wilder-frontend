<script setup>
import Slider from '@/components/Slider.vue';
import Card from '@/components/Card.vue';
</script>

<template>
  <main>
   <Slider />
   <div class="grid grid-cols-4 gap-4 mt-8 px-8">
   <Card title="Action" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="Fighting" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="Horror" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="Platformers" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="RPG" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="Simulation" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="Sport" image="src/assets/images/zeldaechoes.webp"/>
   <Card title="Strategy" image="src/assets/images/zeldaechoes.webp"/>
   </div>
  </main>
</template>
