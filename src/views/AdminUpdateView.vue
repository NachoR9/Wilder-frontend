<script setup>
import AdminUpdate from '@/components/AdminUpdate.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
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
    <AdminUpdate/>
</template>