<script setup lang="ts">
import type { Service } from '../types';

defineProps<{
  service: Service;
}>();
</script>

<template>
  <div class="bg-secondary rounded-3xl shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 p-6 flex flex-col h-full border border-gray-100">
    <div class="h-48 rounded-2xl overflow-hidden mb-6 bg-white/60 flex items-center justify-center p-4">
      <img :src="service.imageUrl" :alt="service.name" class="max-w-full max-h-full object-contain" loading="lazy" />
    </div>
    
    <h3 class="text-2xl font-bold mb-4 text-center text-gray-800">{{ service.name }}</h3>
    
    <ul class="text-sm text-gray-700 space-y-3 flex-grow px-2">
      <li v-for="(feature, index) in service.features" :key="index" class="flex items-start gap-2">
        <svg class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span class="leading-relaxed">{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>