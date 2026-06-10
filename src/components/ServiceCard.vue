<template>
  <div
    class="bg-[#EEDCCB] p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow group"
  >
    <div
      v-if="service.imageUrl"
      class="h-40 mb-6 flex items-center justify-center overflow-hidden rounded-xl"
    >
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
      <span class="text-lg font-bold text-black italic">ABPS Premium</span>

      <a
        href="https://wa.me/923236148042"
        target="_blank"
        class="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-all group-hover:gap-2"
      >
        Order Now <span>→</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '../types'

defineProps<{
  service: Service
}>()
</script>
