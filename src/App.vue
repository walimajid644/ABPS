<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import FloatingAction from './components/layout/FloatingAction.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-900 selection:bg-accent selection:text-black">
    <Navbar />
    
    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
    <FloatingAction />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>