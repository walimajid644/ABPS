<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-50 bg-primary/90 backdrop-blur-md shadow-sm border-b border-gray-200/50">
    <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img src="/logo-r.png" alt="ABPS Logo" class="w-12 h-12 shadow-sm" />
        <span class="font-bold text-xl tracking-tight hidden sm:block uppercase">ABPS</span>
      </RouterLink>

      <ul class="flex items-center gap-6 md:gap-10 font-medium">
        <li>
          <RouterLink to="/" active-class="text-amber-600 font-semibold" class="hover:text-amber-700 transition-colors">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/services" active-class="text-amber-600 font-semibold" class="hover:text-amber-700 transition-colors">Services</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" active-class="text-amber-600 font-semibold" class="hover:text-amber-700 transition-colors">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" active-class="text-amber-600 font-semibold" class="hover:text-amber-700 transition-colors">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>