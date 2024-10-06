<script setup>
import { ref } from "vue";

const index = ref(0);

const items = ref([
  "src/assets/images/zeldaechoes.webp",
  "src/assets/images/dragonageveilguard.png",
  "src/assets/images/dragonballsparkingzero.png",
]);

function next() {
  if (index.value === items.value.length - 1) {
    index.value = 0;
  } else {
    index.value = index.value + 1;
  }
}

function previous() {
  if (index.value === 0) {
    index.value = items.value.length - 1;
  } else {
    index.value = index.value - 1;
  }
}

function slideTo(i) {
  if (i >= 0 && i < items.value.length) {
    index.value = i;
  }
}
</script>

<template>
  <div id="indicators-carousel" class="relative w-full">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <div
        v-for="(item, i) in items"
        :class="`duration-700 ease-in-out ${index === i ? '' : 'hidden'}`"
      >
        <img
          :src="item"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <div
      class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"
    >
      <button
        type="button"
        v-for="(_, i) in items"
        @click="slideTo(i)"
        :class="`size-5 rounded-full border-indigo-500 border-2  ${
          i === index ? 'bg-purple-500' : ''
        }`"
        :aria-current="i === index ? 'true' : 'false'"
        :aria-label="`Slide ${i + 1}`"
      ></button>
    </div>
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="previous"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="next"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>
