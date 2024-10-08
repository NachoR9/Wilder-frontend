<script setup>
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";
import { onMounted } from "vue";
import { initModals } from "flowbite";

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  initModals()
})

async function handleLogout() {
  await authStore.logout();
  router.push('/');
}
</script>

<template>
  <header class="bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500">
    <nav class="flex px-4 py-4 text-xl items-center">
      <span class="flex gap-12 grow items-center flex-col md:flex-row">
        <span class="flex items-center gap-5">
          <img
            class="w-16 h-16"
            src="../assets/images/wilder-logo.png"
            alt="logo"
          />
          <span class="bungee-inline-regular">WILDER</span>
        </span>
        <span class="flex gap-12 items-center justify-around">
          <RouterLink to="/" class="text-sm md:text-2xl font-bold">Home</RouterLink>
          <RouterLink to="/videogames" class="text-sm md:text-2xl font-bold"
            >Search</RouterLink
          >
          <RouterLink v-if="authStore.isAuthenticated" to="/my-games" class="text-sm md:text-2xl font-bold">My games</RouterLink>
        <RouterLink v-if="authStore.userRole === 'ROLE_ADMIN'" to="/admin" class="text-sm md:text-2xl font-bold">Admin</RouterLink>
      </span>
    </span>

      <button
        @click="handleLogout"
        v-if="authStore.isAuthenticated"
        type="button"
        class="font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"
          />
        </svg>
      </button>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
        :class="`${authStore.isAuthenticated ? 'hidden' : ''} font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path
            d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.bungee-inline-regular {
  font-family: "Bungee Inline", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
  color: black;
}
</style>