<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.js'; 

const username = ref('');
const password = ref('');
const authStore = useAuthStore();  
async function handleLogin(event) {
    
  event.preventDefault();

  try {
    await authStore.login(username.value, password.value);

    if (authStore.isAuthenticated) {   
        document.getElementById('close-modal').click()
        username.value = ""
        password.value = ""
    } else {
      alert('Login failed: ' + authStore.errorMessage);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}
</script>

<template>
    <form @submit="handleLogin" class="space-y-4" action="#">
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your username</label
              >
              <input
                type="text"
                name="username"
                id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="username"
                v-model="username"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                v-model="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </form>
</template>