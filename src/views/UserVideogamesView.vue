<script setup>
import UserVideogamesView from '@/components/UserVideogames.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
    if (!authStore.isAuthenticated) {
        router.push('/')
    }
})

</script>


<template>
    <UserVideogamesView/>
</template>