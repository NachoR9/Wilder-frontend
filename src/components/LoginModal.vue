<script setup>
import { onMounted, ref } from 'vue';
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';
import { initModals } from 'flowbite';

const selectedForm = ref('login');

function toggle() {
  if (selectedForm.value === 'login') {
    selectedForm.value = 'signup';
  } else {
    selectedForm.value = 'login'
  }
}

onMounted(() => {
  initModals()
})
</script>
<template>
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-center grow text-xl font-semibold text-gray-900 dark:text-white">
            Sign in to WILDER <img class="size-8 inline" src="../assets/images/wilder-logo.png">
          </h3>
          <button
            type="button"
            id="close-modal"
            class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only" data-modal-hide="authentication-modal">Close modal</span>
          </button>
        </div>
        <div class="p-4 md:p-5 flex gap-8 items-stretch">
          <LoginForm v-if="selectedForm === 'login'" @toggle="toggle" />
          <RegisterForm v-else @toggle="toggle" />
        </div>
      </div>
    </div>
  </div>
</template>
