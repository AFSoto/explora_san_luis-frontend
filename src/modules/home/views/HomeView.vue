<template>
  <div class="bg-stone-50">

    <!-- ── HERO CARRUSEL ─────────────────────────────────── -->
    <section class="relative h-[70vh] min-h-[480px] overflow-hidden">
      <div
        v-for="(slide, i) in heroSlides"
        :key="i"
        class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        :class="currentSlide === i ? 'opacity-100' : 'opacity-0'"
      >
        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      <!-- Texto del slide -->
      <div class="absolute inset-0 flex flex-col justify-end z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-16">
        <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 mb-3">
          <span class="w-6 h-px bg-lime-300" />
          San Luis · Antioquia
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight max-w-2xl">
          {{ heroSlides[currentSlide].title }}
        </h1>
        <p class="text-white/75 text-base sm:text-lg mt-3 max-w-xl font-light">
          {{ heroSlides[currentSlide].subtitle }}
        </p>
      </div>

      <!-- Controles -->
      <button
        @click="prevSlide"
        class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-colors z-10"
        aria-label="Anterior"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white flex items-center justify-center transition-colors z-10"
        aria-label="Siguiente"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Indicadores -->
      <div class="absolute bottom-6 right-6 sm:right-10 flex items-center gap-2 z-10">
        <button
          v-for="(_, i) in heroSlides"
          :key="i"
          @click="currentSlide = i"
          class="h-1 rounded-full transition-all duration-300"
          :class="currentSlide === i ? 'bg-white w-8' : 'bg-white/40 w-3 hover:bg-white/60'"
          :aria-label="`Slide ${i + 1}`"
        />
      </div>
    </section>

    <!-- ── HISTORIA ──────────────────────────────────────── -->
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">

      <div data-reveal class="mb-12">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">
          Patrimonio
        </span>
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
              Historia del municipio
            </h2>
            <p class="text-lg text-stone-500 mt-2">
              Conoce la rica historia y patrimonio de San Luis, Antioquia
            </p>
          </div>
          <router-link
            :to="{ name: ROUTE_NAMES.HISTORIA }"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors shrink-0"
          >
            Ver más
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </router-link>
        </div>
        <div class="h-px bg-stone-200 mt-6" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <router-link
          v-for="(card, index) in historyCards"
          :key="card.title"
          :to="{ name: ROUTE_NAMES.HISTORIA }"
          data-reveal
          :style="`--delay: ${index * 120}`"
          class="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-stone-200/60 hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1.5 transition-all duration-500 aspect-[4/3]"
        >
          <img
            :src="card.image"
            :alt="card.title"
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div class="absolute inset-0 flex flex-col justify-end p-6">
            <div v-if="card.subtitle" class="mb-2">
              <span class="inline-block text-xs font-bold tracking-[0.15em] text-lime-300 uppercase">
                {{ card.subtitle }}
              </span>
            </div>
            <h4 class="text-xl font-bold text-white leading-tight mb-1">{{ card.title }}</h4>
            <p class="text-sm text-white/70 leading-relaxed line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
              {{ card.description }}
            </p>
          </div>

          <div class="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center">
            <svg class="w-4 h-4 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </router-link>
      </div>
    </section>

    <!-- ── CATEGORÍAS ─────────────────────────────────────── -->
    <section class="bg-white py-24">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div data-reveal class="mb-10">
          <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">
            Servicios
          </span>
          <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Explora por categorías
          </h2>
          <p class="text-lg text-stone-500 mt-2">
            Descubre todo lo que San Luis tiene para ofrecerte
          </p>
        </div>

        <!-- Skeleton -->
        <div v-if="catalogoStore.loading" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="n in 5" :key="n" class="aspect-[4/3] rounded-2xl bg-stone-100 animate-pulse" />
        </div>

        <!-- Cards -->
        <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          <router-link
            v-for="(tipo, index) in catalogoStore.tipos"
            :key="tipo.id"
            :to="`/${tipo.slug}`"
            data-reveal
            :style="`--delay: ${index * 80}`"
            class="group relative rounded-2xl overflow-hidden shadow-sm ring-1 ring-stone-200/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 aspect-[4/3]"
          >
            <img
              :src="tipo.url_imagen"
              :alt="tipo.nombre"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div class="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500" />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h5 class="text-white font-bold text-sm sm:text-base tracking-tight group-hover:text-lime-200 transition-colors duration-300">
                {{ tipo.nombre }}
              </h5>
            </div>
          </router-link>
        </div>
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

import plantaImg    from '@/assets/images/home/planta.webp'
import sanLuis2Img  from '@/assets/images/home/San_Luis2.webp'
import parqueImg    from '@/assets/images/home/parque.webp'
import culturaImg   from '@/assets/images/home/cultura.webp'
import economiaImg  from '@/assets/images/home/economia.webp'
import sanLuisImg   from '@/assets/images/home/San_Luis.webp'

const catalogoStore = useCatalogoStore()

// ── Carrusel
const currentSlide = ref(0)
let slideInterval = null

const heroSlides = [
  { image: plantaImg,   alt: 'Cascada La Planta',  title: 'La Planta, tu próximo destino',        subtitle: 'El charco natural más grande del Oriente antioqueño te espera.' },
  { image: sanLuis2Img, alt: 'San Luis paisaje',    title: 'Naturaleza que enamora',               subtitle: 'Ríos cristalinos y montañas verdes en el corazón de Antioquia.' },
  { image: parqueImg,   alt: 'Parque San Luis',     title: 'Un pueblo lleno de historia',          subtitle: 'Fundado en 1875, San Luis guarda una identidad cultural única.' },
]

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}
function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}

// ── Historia (fundacion reemplazada por parque para consistencia visual)
const historyCards = [
  {
    title:       'Fundación',
    subtitle:    '1875',
    description: 'Fundado por el padre Clemente Giraldo, su nombre se dio en honor a San Luis Gonzaga, patrono del pueblo.',
    image:       sanLuisImg,
  },
  {
    title:       'Cultura y tradición',
    subtitle:    null,
    description: 'San Luis conserva vivas sus raíces campesinas y religiosas, con fiestas populares, música típica y gran sentido comunitario.',
    image:       culturaImg,
  },
  {
    title:       'Economía',
    subtitle:    null,
    description: 'La economía local se basa en la agricultura, la ganadería y la producción de madera, con crecimiento en el ecoturismo.',
    image:       economiaImg,
  },
]

// ── Datos API
const sitios        = ref([])
const loadingSitios = ref(true)
const eventos       = ref([])
const loadingEventos = ref(true)

async function fetchData() {
  try {
    const [sitiosRes, eventosRes] = await Promise.all([
      getSitiosTuristicos(),
      getEventos(),
    ])
    sitios.value  = sitiosRes.data.data
    eventos.value = eventosRes.data.data
  } catch (error) {
    console.error('Error cargando datos del home:', error)
  } finally {
    loadingSitios.value  = false
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
</style>
