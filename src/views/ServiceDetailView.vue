<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '../data/services.ts'
import ServiceCard from '../components/ServiceCard.vue'

const route = useRoute()
const currentType = computed(() => route.params.type as string)

const filteredServices = computed(() => {
  return services.filter(service => service.category === currentType.value)
})

const categoryTitle = computed(() => {
  const map: Record<string, string> = {
    'streamingService': 'Streaming Subscriptions',
    'iptv': 'IPTV Packages',
    'Vpn': 'VPN Services',
    'aitool': 'AI Tools',
    'othertool': 'Productivity & Other Tools'
  }
  return map[currentType.value] || 'Services'
})
</script>

<template>
  <div class="container mx-auto px-6 py-16">
    <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-gray-300 pb-6 gap-4">
      <div>
        <h1 class="text-4xl md:text-5xl font-black">{{ categoryTitle }}</h1>
        <p class="text-gray-600 mt-2 text-lg">Showing {{ filteredServices.length }} available options</p>
      </div>
      <RouterLink to="/services" class="text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-2">
        &larr; Back to Categories
      </RouterLink>
    </div>

    <div v-if="filteredServices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <ServiceCard 
        v-for="service in filteredServices" 
        :key="service.id" 
        :service="service" 
      />
    </div>
    
    <div v-else class="text-center py-20 bg-secondary rounded-3xl">
      <h3 class="text-2xl font-bold text-gray-700 mb-2">No services found</h3>
      <p class="text-gray-500">We are currently updating our catalog for this category.</p>
    </div>
  </div>
</template>