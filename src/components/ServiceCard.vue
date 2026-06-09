<template>
  <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
    
    <div v-if="service.imageUrl" class="h-40 mb-6 flex items-center justify-center overflow-hidden rounded-xl">
      <img 
        :src="service.imageUrl" 
        :alt="service.name" 
        class="max-w-full max-h-full object-contain" 
        loading="lazy" 
      />
    </div>

    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ service.name }}</h3>
    <p class="text-gray-600 mb-4 text-sm">{{ service.description }}</p>

    <ul v-if="service.features && service.features.length" class="space-y-2 mb-6 flex-grow">
      <li 
        v-for="(feature, index) in service.features" 
        :key="index" 
        class="flex items-start gap-2 text-sm text-gray-500"
      >
        <span class="text-green-500">✓</span>
        {{ feature }}
      </li>
    </ul>

    <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
      <span class="text-lg font-bold text-black">{{ service.price }}</span>
      <button class="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
        Select
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '../types';

defineProps<{
  service: Service
}>();
</script>