<template>
  <div class="bg-stone-50">
    <section class="relative min-h-[90vh] pb-32 flex items-center text-white overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center scale-105"
        :style="{ backgroundImage: `url(${heroBg})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="w-full md:max-w-3xl">
          <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 mb-6">
            <span class="w-8 h-px bg-lime-300"></span>
            San Luis · Antioquia
          </span>
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-6">
            Explora la belleza única de
            <span class="italic font-light text-lime-200">San Luis</span>
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-stone-100/90 font-light max-w-2xl mb-10 leading-relaxed">
            Ríos que conectan, montañas que inspiran. Descubre el corazón verde del Oriente antioqueño.
          </p>
          <div class="flex flex-wrap gap-4">
            <router-link
              :to="{ name: ROUTE_NAMES.HOME }"
              class="group inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold px-8 py-4 rounded-full ring-1 ring-white/20 shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/40"
            >
              Comienza tu Aventura
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
            <button
              class="inline-flex items-center gap-2 text-white/90 hover:text-white text-base font-medium px-6 py-4 rounded-full ring-1 ring-white/30 hover:ring-white/60 backdrop-blur-sm transition-all duration-300"
            >
              Ver lugares
            </button>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/70">
        <span class="text-xs tracking-[0.2em] uppercase">Descubre más</span>
        <div class="w-px h-10 bg-gradient-to-b from-white/70 to-transparent"></div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 -mt-16 relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="(site, index) in featuredSites"
          :key="site.title"
          class="group bg-white rounded-2xl overflow-hidden shadow-md shadow-stone-900/5 ring-1 ring-stone-200/60 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1.5 transition-all duration-500"
        >
          <div class="relative overflow-hidden h-56">
            <img
              :src="site.image"
              :alt="site.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-emerald-800 text-sm font-semibold shadow-sm">
              0{{ index + 1 }}
            </div>
          </div>
          <div class="p-7">
            <div class="w-10 h-0.5 bg-lime-400 mb-4"></div>
            <h3 class="text-xl font-semibold text-stone-900 tracking-tight mb-2">
              {{ site.title }}
            </h3>
            <p class="text-sm text-stone-600 leading-relaxed">
              {{ site.description }}
            </p>
            <a href="#" class="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors">
              Explorar lugar
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>

    

    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-24">
      <div class="relative bg-emerald-900 rounded-3xl p-10 md:p-14 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-800/40 via-transparent to-emerald-950/60 pointer-events-none"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 bg-lime-400/5 rounded-full blur-3xl"></div>

        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 text-white">
          <div class="text-center pb-8 mb-8 border-b border-white/10 md:pb-0 md:mb-0 md:border-b-0 md:px-8 md:border-r md:border-white/10">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 ring-1 ring-white/10 mb-5">
              <svg class="w-7 h-7 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 class="text-lime-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Clima</h4>
            <p class="text-3xl font-semibold tracking-tight mb-1">25° - 30°C</p>
            <p class="text-sm text-white/70">Temperatura promedio</p>
            <p class="text-sm text-white/50 mt-1">San Luis, Antioquia</p>
          </div>

          <div class="text-center pb-8 mb-8 border-b border-white/10 md:pb-0 md:mb-0 md:border-b-0 md:px-8 md:border-r md:border-white/10">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 ring-1 ring-white/10 mb-5">
              <svg class="w-7 h-7 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 class="text-lime-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Consejos</h4>
            <ul class="space-y-1.5 text-sm text-white/80">
              <li>Ropa cómoda y repelente</li>
              <li>Calzado antideslizante</li>
              <li>Hidratación constante</li>
            </ul>
          </div>

          <div class="text-center md:px-8">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 ring-1 ring-white/10 mb-5">
              <svg class="w-7 h-7 text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 class="text-lime-300 text-xs font-semibold uppercase tracking-[0.2em] mb-4">Ubicación</h4>
            <p class="text-3xl font-semibold tracking-tight mb-1">124 Km</p>
            <p class="text-sm text-white/70">desde Medellín</p>
            <p class="text-sm text-white/50 mt-1">Autopista Medellín - Bogotá</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mb-24">
      <div class="max-w-2xl mb-12">
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-3">
          Testimonios
        </span>
        <h2 class="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight leading-tight">
          Lo que dicen nuestros visitantes
        </h2>
        <p class="text-lg text-stone-600 mt-4 leading-relaxed">
          Experiencias auténticas de quienes han vivido la magia de San Luis.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="group relative bg-white rounded-2xl p-8 ring-1 ring-stone-200 hover:ring-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 transition-all duration-500"
        >
          <svg class="w-10 h-10 text-emerald-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <p class="text-stone-700 text-base leading-relaxed mb-8">
            {{ testimonial.text }}
          </p>
          <div class="flex items-center gap-2 mb-6">
            <span class="h-px flex-1 bg-stone-200"></span>
            <span class="w-1 h-1 rounded-full bg-lime-400"></span>
            <span class="h-px flex-1 bg-stone-200"></span>
          </div>
          <div class="flex items-center gap-4">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100"
            />
            <div>
              <h6 class="font-semibold text-stone-900 text-sm tracking-tight">
                {{ testimonial.name }}
              </h6>
              <p class="text-xs text-stone-500 flex items-center gap-1.5 mt-0.5">
                <svg class="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                {{ testimonial.location }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="bg-stone-100 py-20">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="relative bg-white rounded-3xl px-5 py-14 sm:px-8 md:px-14 md:py-16 ring-1 ring-stone-200 shadow-sm overflow-hidden">
          <div class="absolute -top-24 -right-24 w-72 h-72 bg-emerald-50 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -left-24 w-72 h-72 bg-lime-50 rounded-full blur-3xl"></div>

          <div class="relative text-center">
            <span class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-5">
              <span class="w-6 h-px bg-emerald-700"></span>
              Comparte tu historia
              <span class="w-6 h-px bg-emerald-700"></span>
            </span>
            <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight leading-tight mb-4">
              ¿Ya visitaste San Luis?
            </h2>
            <p class="text-lg text-stone-600 max-w-xl mx-auto mb-10 leading-relaxed">
              Tu experiencia inspira a otros viajeros a descubrir este paraíso natural.
            </p>
            <button
              class="group inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white text-base font-semibold px-8 py-4 rounded-full shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 transition-all duration-300"
            >
              Escribir reseña
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ROUTE_NAMES } from '@/constants/routes'
import heroBg from '@/assets/images/home/cascada2.webp'
import plantaImg from '@/assets/images/home/planta.webp'
import cerroImg from '@/assets/images/home/cerro_castellon.webp'
import rioImg from '@/assets/images/home/rio_samana.webp'

const featuredSites = [
  {
    title: 'Cascada La Planta',
    description: 'Considerado el charco natural más grande del Oriente antioqueño.',
    image: plantaImg,
  },
  {
    title: 'Cerro El Castellón',
    description: 'Un lugar lleno de historia y paisajes que enamoran.',
    image: cerroImg,
  },
  {
    title: 'Río Samaná',
    description: 'El único río libre de Antioquia.',
    image: rioImg,
  },
]

const activities = [
  {
    label: 'Rafting',
    description: 'Aguas vivas del Samaná',
    icon: 'rafting',
  },
  {
    label: 'Senderismo',
    description: 'Rutas entre montañas',
    icon: 'hiking',
  },
  {
    label: 'Fotografía',
    description: 'Paisajes inolvidables',
    icon: 'camera',
  },
  {
    label: 'Gastronomía',
    description: 'Sabores tradicionales',
    icon: 'food',
  },
]

const testimonials = [
  {
    text: 'Paisajes imponentes y una caminata brutal. El pozo natural al final es la mejor recompensa para el calor. Un tesoro de San Luis que debes conocer.',
    name: 'Diana Gonzales',
    location: 'Rionegro',
    avatar: 'https://i.pravatar.cc/150?u=diana',
  },
  {
    text: 'Pura paz y sonidos de la naturaleza. Ideal para relajarse y respirar aire puro. Por favor, cuidemos este paraíso y no dejemos basura.',
    name: 'Andrés Pérez',
    location: 'Canadá',
    avatar: 'https://i.pravatar.cc/150?u=andres',
  },
  {
    text: 'San Luis me sorprendió completamente. La naturaleza es espectacular y la gente es muy amable.',
    name: 'Marcela Moncada',
    location: 'Medellín',
    avatar: 'https://i.pravatar.cc/150?u=marcela',
  },
]
</script>
