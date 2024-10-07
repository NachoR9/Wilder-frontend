<script setup>
import { onMounted, ref } from 'vue';
import AdminCreate from '@/components/AdminCreate.vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
    if (authStore.userRole !== 'ROLE_ADMIN') {
        router.push('/')
    }
})

</script>


<template>
    <AdminCreate/>
</template>