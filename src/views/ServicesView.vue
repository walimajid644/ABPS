<script setup lang="ts">
import { RouterLink } from 'vue-router'

const categories = [
  { 
    name: 'Streaming', 
    path: 'streamingService', 
    iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    desc: '4K HDR content from all your favorite global platforms in one place.' 
  },
  { 
    name: 'IPTV', 
    path: 'iptv', 
    iconPath: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0',
    desc: 'Ultra-stable live television with global channel coverage and zero lag.' 
  },
  { 
    name: 'VPNs', 
    path: 'Vpn', 
    iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    desc: 'Secure, anonymous browsing with top-tier encryption and no logs.' 
  },
  { 
    name: 'AI Tools', 
    path: 'aitool', 
    iconPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    desc: 'Unlock productivity with premium access to the world\'s best AI models.' 
  },
  { 
    name: 'Other Tools', 
    path: 'othertool', 
    iconPath: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    desc: 'A comprehensive suite of software, design, and SEO productivity tools.' 
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#f2e6da] py-20 md:py-28">
    <div class="container mx-auto px-6 max-w-7xl">
      
      <div class="mb-20 text-center max-w-3xl mx-auto">
        <span class="text-[#796044] font-bold text-sm uppercase tracking-widest mb-4 block">Premium Curation</span>
        <h1 class="text-4xl md:text-[56px] leading-[1.1] font-bold text-[#1a1a1a] mb-6 tracking-tight">Explore Our Premium Services</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="cat in categories" :key="cat.name" class="bg-[#eedccb] border border-[#e4d8cc] p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
          
          <div class="w-16 h-16 rounded-2xl mb-8 bg-[#ffddba] text-[#796044] flex items-center justify-center shadow-inner">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cat.iconPath"></path>
            </svg>
          </div>
          
          <h3 class="text-3xl font-bold mb-4 text-[#1a1a1a]">{{ cat.name }}</h3>
          <p class="text-gray-700 mb-10 leading-relaxed text-base flex-grow">{{ cat.desc }}</p>
          
          <RouterLink :to="`/services/${cat.path}`" class="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 group hover:bg-[#1a1a1a]/80 transition-colors w-full">
            Browse Library 
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </RouterLink>
        </div>
      </div>
      
    </div>
  </div>
</template>