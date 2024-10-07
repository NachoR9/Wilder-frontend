<script>
import { RouterLink } from 'vue-router';


export default {
    props: {
      title: String,
      image: String,
      to: String
    }
  }
</script>

<template>
<div class="flex flex-col bg-white bg-opacity-40 rounded-lg shadow hover:scale-105 transition duration-75 ease-in-out dark:bg-gray-800 dark:border-gray-700">
    <RouterLink class="grow" :to="to">
        <img class="rounded-t-lg size-full object-cover" :src="image" alt="" />
    </RouterLink>
    <div class="p-5">
        <RouterLink :to="to">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
        </RouterLink>
    </div>
</div>
</template>
