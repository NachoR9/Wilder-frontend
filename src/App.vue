<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LoginModal from './components/LoginModal.vue';
</script>

<template>
  <Header />
  <LoginModal />
  <main class="grow bg-gradient-to-r from-red-200 to-red-600">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>

</style>
