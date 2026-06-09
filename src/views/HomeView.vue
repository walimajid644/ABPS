<script setup lang="ts">
import { RouterLink } from 'vue-router'

const categories = [
  { 
    name: 'Streaming Services', 
    path: 'streamingService', 
    iconPath: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  { 
    name: 'IPTV', 
    path: 'iptv', 
    iconPath: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
  },
  { 
    name: 'VPN', 
    path: 'Vpn', 
    iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  { 
    name: 'AI Tools', 
    path: 'aitool', 
    iconPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  { 
    name: 'Other Tools', 
    path: 'othertool', 
    iconPath: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
  }
]

const marqueeItems = ['Netflix', 'Prime Video', 'ChatGPT', 'Canva', 'Spotify', 'Adobe', 'Disney+', 'YouTube']
</script>

<template>
  <div class="pb-20 bg-[#f2e6da]">
    <section class="container mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl">
      
      <div class="flex flex-col text-center md:text-left order-2 md:order-1">
        <h1 class="text-4xl md:text-[56px] leading-[1.1] font-bold tracking-tight mb-6 text-[#1a1a1a]">
          Premium Subscriptions for the Modern World
        </h1>
        <p class="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed md:pr-4">
          Access elite entertainment, productivity tools, and connectivity with curated subscription plans designed for discerning users.
        </p>
        
        <div class="flex justify-center md:justify-start w-full">
          <RouterLink to="/services" class="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg min-w-[200px] text-center uppercase tracking-wider">
            Explore Catalog
          </RouterLink>
        </div>
      </div>

      <div class="order-1 md:order-2 flex justify-center md:justify-end">
        <img src="/Newlogo.jpeg" alt="ABPS Hero" class="rounded-3xl shadow-sm w-full max-w-lg object-cover hover:shadow-lg transition-shadow duration-500" />
      </div>

    </section>

    <section class="py-3 bg-[#1a1a1a] overflow-hidden relative shadow-md">
      <div class="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      <div class="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      
      <div class="flex animate-marquee whitespace-nowrap items-center w-full">
        <div v-for="i in 2" :key="i" class="flex gap-8 md:gap-16 px-4 md:px-8">
          <span v-for="item in marqueeItems" :key="item" class="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#efceac] hover:text-white hover:scale-105 transition-all duration-300 cursor-default">
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-6 py-24 max-w-7xl">
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-[#1a1a1a] mb-2 tracking-tight">Premium Categories</h2>
        <div class="w-12 h-1 bg-[#1a1a1a]"></div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div v-for="cat in categories" :key="cat.name" class="bg-[#eedccb] border border-[#e4d8cc] p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
          
          <div class="w-14 h-14 rounded-xl mb-6 bg-[#ffddba] text-[#796044] flex items-center justify-center shadow-inner">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="cat.iconPath"></path>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold mb-6 text-[#1a1a1a] flex-grow">{{ cat.name }}</h3>
          
          <RouterLink :to="`/services/${cat.path}`" class="text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2 group mt-auto">
            View Details 
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="bg-[#fef2e5] py-24">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div class="lg:col-span-4 flex flex-col justify-center">
            <h2 class="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight">Why Choose ABPS?</h2>
            <p class="text-gray-700 mb-8 leading-relaxed text-lg">We curate the best digital experiences, ensuring every subscription is verified, secure, and ready for use within minutes.</p>
            <div class="flex flex-col gap-5">
              <div class="flex items-center gap-4">
                <div class="bg-black p-1.5 rounded-md">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="font-medium text-lg">Instant Delivery</span>
              </div>
              <div class="flex items-center gap-4">
                <div class="bg-black p-1.5 rounded-md">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="font-medium text-lg">24/7 Priority Support</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-10 rounded-3xl shadow-sm border border-[#e4d8cc] flex flex-col justify-between aspect-video hover:shadow-md transition-shadow">
              <span class="text-[64px] font-bold text-black leading-none mb-4 tracking-tighter">1K+</span>
              <div>
                <h4 class="text-2xl font-bold mb-2">Happy Customers</h4>
                <p class="text-gray-600">Trusted by thousands of premium users worldwide for their digital needs.</p>
              </div>
            </div>
            
            <div class="bg-[#efceac] p-10 rounded-3xl shadow-sm flex flex-col justify-between aspect-video hover:shadow-md transition-shadow">
              <span class="text-[64px] font-bold text-[#796044] leading-none mb-4 tracking-tighter">100+</span>
              <div>
                <h4 class="text-2xl font-bold text-[#291804] mb-2">Subscriptions</h4>
                <p class="text-[#594329]">A massive library of services from streaming to enterprise software tools.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>