<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import LoginModal from './components/LoginModal.vue';
</script>

<template>
  <Header />
  <LoginModal />
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
