<template>
  <div class="bg-stone-50">
    <!-- ── HERO CARRUSEL ─────────────────────────────────── -->
    <section class="relative h-[500px] md:h-[600px] overflow-hidden">
      <div
        v-for="(slide, i) in heroSlides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === i ? 'opacity-100' : 'opacity-0'"
      >
        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button
          v-for="(_, i) in heroSlides"
          :key="i"
          @click="currentSlide = i"
          class="w-2.5 h-2.5 rounded-full transition-all duration-300"
          :class="currentSlide === i ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'"
        />
      </div>

      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-colors z-10"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-colors z-10"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>

    <!-- ── HISTORIA ──────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
        <router-link
          v-for="(card, index) in historyCards"
          :key="card.title"
          :to="{ name: ROUTE_NAMES.HISTORIA }"
          data-reveal
          :style="`--delay: ${index * 120}`"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-stone-200/60 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1.5 transition-all duration-500 no-underline"
        >
          <div class="p-6 text-center">
            <h4 class="text-xl font-bold text-stone-900 mb-1">{{ card.title }}</h4>
            <p v-if="card.subtitle" class="text-sm text-stone-400 mb-3">{{ card.subtitle }}</p>
            <p class="text-sm text-stone-600 leading-relaxed">{{ card.description }}</p>
          </div>
          <div class="relative overflow-hidden h-48">
            <img
              :src="card.image"
              :alt="card.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </router-link>
      </div>

      <div data-reveal>
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
          Patrimonio
        </span>
        <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
          Historia del municipio
        </h2>
        <p class="text-lg text-stone-500 mt-2">
          Conoce la rica historia y patrimonio de San Luis, Antioquia
        </p>
        <hr class="border-stone-200 mt-6" />
      </div>
    </section>

    <!-- ── CATEGORÍAS (desde API) ────────────────────────── -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">
      <div data-reveal class="mb-10">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
          Servicios
        </span>
        <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
          Explora por categorías
        </h2>
        <p class="text-lg text-stone-500 mt-2">
          Descubre todo lo que San Luis tiene para ofrecerte
        </p>
      </div>

      <div v-if="catalogoStore.loading" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div v-for="n in 5" :key="n" class="aspect-[4/3] rounded-2xl bg-stone-200 animate-pulse" />
      </div>

      <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
        <router-link
          v-for="(tipo, index) in catalogoStore.tipos"
          :key="tipo.id"
          :to="`/${tipo.slug}`"
          data-reveal
          :style="`--delay: ${index * 80}`"
          class="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-stone-200/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 no-underline aspect-[4/3]"
        >
          <img
            :src="tipo.url_imagen"
            :alt="tipo.nombre"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h5 class="text-white font-bold text-sm sm:text-base tracking-tight">
              {{ tipo.nombre }}
            </h5>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ── SITIOS TURÍSTICOS ─────────────────────────────── -->
    <SitiosDestacados :sitios="sitios" :loading="loadingSitios" />

    <!-- ── EVENTOS ────────────────────────────────────────── -->
    <EventosProximos :eventos="eventos" :loading="loadingEventos" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { ROUTE_NAMES } from '@/constants/routes'
import { useCatalogoStore } from '@/stores/catalogo.store'
import { getSitiosTuristicos, getEventos } from '@/modules/home/services/home.api'
import SitiosDestacados from '@/modules/home/components/SitiosDestacados.vue'
import EventosProximos from '@/modules/home/components/EventosProximos.vue'

import plantaImg from '@/assets/images/home/planta.webp'
import sanLuis2Img from '@/assets/images/home/San_Luis2.webp'
import parqueImg from '@/assets/images/home/parque.webp'
import fundacionImg from '@/assets/images/home/fundacion.webp'
import culturaImg from '@/assets/images/home/cultura.webp'
import economiaImg from '@/assets/images/home/economia.webp'

const catalogoStore = useCatalogoStore()

// ── Carrusel
const currentSlide = ref(0)
let slideInterval = null

const heroSlides = [
  { image: plantaImg, alt: 'Cascada La Planta' },
  { image: sanLuis2Img, alt: 'San Luis paisaje' },
  { image: parqueImg, alt: 'Parque San Luis' },
]

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}

// ── Historia
const historyCards = [
  {
    title: 'Fundación',
    subtitle: '1875',
    description: 'Fundado por el padre Clemente Giraldo, su nombre se dio en honor a San Luis Gonzaga, patrono del pueblo.',
    image: fundacionImg,
  },
  {
    title: 'Cultura y tradición',
    subtitle: null,
    description: 'San Luis conserva vivas sus raíces campesinas y religiosas, con fiestas populares, música típica y gran sentido comunitario.',
    image: culturaImg,
  },
  {
    title: 'Economía',
    subtitle: null,
    description: 'La economía local se basa en la agricultura, la ganadería y la producción de madera, con crecimiento en el ecoturismo.',
    image: economiaImg,
  },
]

// ── Datos API
const sitios = ref([])
const loadingSitios = ref(true)
const eventos = ref([])
const loadingEventos = ref(true)

async function fetchData() {
  try {
    const [sitiosRes, eventosRes] = await Promise.all([
      getSitiosTuristicos(),
      getEventos(),
    ])
    sitios.value = sitiosRes.data.data
    eventos.value = eventosRes.data.data
  } catch (error) {
    console.error('Error cargando datos del home:', error)
  } finally {
    loadingSitios.value = false
    loadingEventos.value = false
  }
}

// ── Scroll reveal
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
}

onMounted(async () => {
  slideInterval = setInterval(nextSlide, 5000)
  await fetchData()
  await nextTick()
  initScrollReveal()
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<style scoped>
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
  transition-delay: calc(var(--delay, 0) * 1ms);
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
.no-underline {
  text-decoration: none;
}
</style>
