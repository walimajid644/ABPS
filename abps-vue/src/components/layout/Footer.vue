<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Function to trigger the browser's native share dialog
const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'ABPS - Ahmad Bhatti Premium Store',
        text: 'Check out the best premium subscriptions at ABPS!',
        url: window.location.href,
      });
    } catch (err) {
      console.error('Error sharing:', err);
    }
  } else {
    // Fallback: Copy to clipboard if Web Share API isn't supported
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  }
}
</script>

<template>
  <footer class="bg-[#ece1d5] pt-16 pb-12">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        <div class="col-span-1">
          <h3 class="text-xl font-bold text-[#1a1a1a] mb-6">ABPS</h3>
          <p class="text-gray-700 text-sm leading-relaxed max-w-xs">
            Elevating the digital landscape through premium curated subscriptions.
          </p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-6">Platform</h4>
          <ul class="flex flex-col gap-4">
            <li><RouterLink to="/" class="text-sm text-gray-700 hover:text-black transition-colors">Home</RouterLink></li>
            <li><RouterLink to="/services" class="text-sm text-gray-700 hover:text-black transition-colors">Services</RouterLink></li>
            <li><RouterLink to="/about" class="text-sm text-gray-700 hover:text-black transition-colors">About</RouterLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-6">Company</h4>
          <ul class="flex flex-col gap-4">
            <li><RouterLink to="/contact" class="text-sm text-gray-700 hover:text-black transition-colors">Contact</RouterLink></li>
            <li><a href="#" class="text-sm text-gray-700 hover:text-black transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-sm text-gray-700 hover:text-black transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-[0.15em] text-[#1a1a1a] mb-6">Connect</h4>
          <div class="flex gap-4">
            <button 
              @click="handleShare"
              class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" 
              aria-label="Share this website"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
            </button>
            
            <a href="mailto:abpremiumsubscription@gmail.com" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a1a] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" aria-label="Email Us">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
      
      <div>
        <p class="text-sm text-gray-700">&copy; {{ new Date().getFullYear() }} ABPS. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>