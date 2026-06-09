<script setup lang="ts">
const values = [
  {
    title: 'Trusted Since 2020',
    desc: 'Building strong relationships with thousands of satisfied customers.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: '24/7 Support',
    desc: 'Our professional team is always here to assist you.',
    iconPath: 'M18 9v3m-6 3h6m-6-6h6m-6 6H6a2 2 0 01-2-2V9a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2z'
  },
  {
    title: 'Wide Range',
    desc: 'From Educational & SEO Tools to Streaming Services, VPNs, and more!',
    iconPath: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
  },
  {
    title: 'Affordable & Reliable',
    desc: 'Enjoy premium services at the best rates in the market.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>

<template>
  <div class="min-h-screen bg-[#f2e6da] py-20 md:py-28">
    <div class="container mx-auto px-6 max-w-7xl">
      
      <div class="mb-16 text-center max-w-3xl mx-auto">
        <span class="text-[#796044] font-bold text-sm uppercase tracking-widest mb-4 block">Our Story</span>
        <h1 class="text-4xl md:text-[56px] leading-[1.1] font-bold text-[#1a1a1a] mb-6 tracking-tight">About US</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        
        <div class="lg:col-span-7 bg-[#eedccb] border border-[#e4d8cc] rounded-[2rem] p-10 md:p-14 shadow-sm hover:shadow-lg transition-shadow duration-500 flex flex-col justify-center">
          <h2 class="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 tracking-tight">Hi, I am Ahmad Bhatti.</h2>
          
          <div class="space-y-6 text-gray-700 text-lg leading-relaxed mb-10">
            <p>
              Your trusted partner in every subscription. I lead a dedicated team of professionals who are actively working for your best interests.
            </p>
            <p>
              We have been here <strong class="text-[#1a1a1a]">since 2020</strong> and are known for our amazing deals and support. We've gathered a massive community of loyal customers during this tenure because we are bound to provide high-quality products at affordable prices.
            </p>
            <p>
              Here, you will get 24/7 support by our professionally hired staff, covering everything from Educational Tools to Streaming Services and VPNs.
            </p>
          </div>

          <div class="mt-auto border-t border-[#e4d8cc] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p class="text-sm uppercase tracking-widest text-[#796044] font-bold mb-1">Sincerely,</p>
              <p class="text-xl font-bold text-[#1a1a1a]">Ahmad Bhatti Premium Store</p>
              <p class="text-gray-600 mt-1">Thank you for choosing us!</p>
            </div>
            <a href="tel:03236148042" class="bg-[#1a1a1a] text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-md inline-flex items-center gap-2 w-fit">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              03236148042
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 h-[400px] lg:h-auto">
          <img src="/PremiumSubscriptions.jpeg" alt="Premium Subscriptions" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>

        <div class="lg:col-span-5 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500 h-[400px] lg:h-auto">
          <img src="/SocialMediaServices.jpeg" alt="Social Media Services" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>

        <div class="lg:col-span-7 bg-[#fef2e5] border border-[#e4d8cc] rounded-[2rem] p-10 md:p-12 shadow-sm hover:shadow-lg transition-shadow duration-500">
          <h3 class="text-2xl font-bold text-[#1a1a1a] mb-10 tracking-tight">Our Core Values</h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <div v-for="val in values" :key="val.title" class="flex flex-col">
              <div class="w-12 h-12 rounded-xl mb-5 bg-[#ffddba] text-[#796044] flex items-center justify-center shadow-inner">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="val.iconPath"></path>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-[#1a1a1a] mb-2">{{ val.title }}</h4>
              <p class="text-gray-700 text-sm leading-relaxed">{{ val.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>