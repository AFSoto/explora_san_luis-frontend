<template>
  <!-- Hero -->
  <section class="relative min-h-[85vh] flex items-center justify-center text-center text-white">
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroBg})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
        Explora la belleza única de San Luis
      </h1>
      <p class="text-xl md:text-3xl mb-10 tracking-wide font-light">
        Ríos que conectan, montañas que inspiran.
      </p>
      <router-link
        :to="{ name: ROUTE_NAMES.HOME }"
        class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-8 py-4 rounded-full border-2 border-white/30 tracking-wide transition-colors"
      >
        Comienza tu Aventura
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </router-link>
    </div>
  </section>

  <!-- Cards destacadas -->
  <section class="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="site in featuredSites"
        :key="site.title"
        class="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
      >
        <div class="p-5 text-center">
          <h3 class="text-lg font-bold text-gray-900 tracking-wide">{{ site.title }}</h3>
          <p class="text-sm text-gray-600 mt-1 tracking-wide">{{ site.description }}</p>
        </div>
        <img
          :src="site.image"
          :alt="site.title"
          class="w-full h-48 object-cover"
        />
      </div>
    </div>
  </section>

  <!-- Actividades de aventura -->
  <section class="max-w-7xl mx-auto px-4 mt-16 mb-8">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
      Actividades de aventura
    </h2>
    <p class="text-lg text-gray-600 mt-2 tracking-wider">
      Vive experiencias únicas en contacto directo con la naturaleza.
    </p>
    <hr class="mt-6 border-gray-300" />
  </section>

  <!-- Banner informativo -->
  <section class="max-w-7xl mx-auto px-4 mb-16">
    <div class="bg-[#4F7352] text-white rounded-2xl p-8 md:p-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Clima -->
        <div>
          <div class="text-4xl mb-3">
            <svg class="w-10 h-10 mx-auto text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h4 class="text-lime-400 font-bold uppercase tracking-wide mb-3">Clima</h4>
          <p class="text-sm opacity-90">Temperatura promedio</p>
          <p class="text-2xl font-bold">25°C - 30°C</p>
          <p class="text-sm opacity-75 mt-1">San Luis, Antioquia</p>
        </div>

        <!-- Consejos -->
        <div>
          <div class="text-4xl mb-3">
            <svg class="w-10 h-10 mx-auto text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h4 class="text-lime-400 font-bold uppercase tracking-wide mb-3">Consejos</h4>
          <p class="text-sm">Ropa cómoda y repelente</p>
          <p class="text-sm">Calzado antideslizante</p>
          <p class="text-sm">Hidratación constante</p>
        </div>

        <!-- Ubicación -->
        <div>
          <div class="text-4xl mb-3">
            <svg class="w-10 h-10 mx-auto text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 class="text-lime-400 font-bold uppercase tracking-wide mb-3">Ubicación</h4>
          <p class="text-sm">A 124 Km de Medellín</p>
          <p class="text-sm">Autopista Medellín - Bogotá</p>
          <p class="text-sm">Corazón del Oriente</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonios -->
  <section class="max-w-7xl mx-auto px-4 mb-16">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide">
      Lo que dicen nuestros visitantes
    </h2>
    <p class="text-lg text-gray-600 mt-2 mb-8 tracking-wide">
      Experiencias auténticas de quienes han vivido la magia de San Luis
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:-translate-y-1 transition-transform duration-300"
      >
        <p class="text-gray-700 text-sm leading-relaxed tracking-wide italic mb-4">
          "{{ testimonial.text }}"
        </p>
        <hr class="border-gray-200 mb-4" />
        <div class="flex items-center gap-3">
          <img
            :src="testimonial.avatar"
            :alt="testimonial.name"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h6 class="font-bold text-gray-900 text-sm tracking-wide">{{ testimonial.name }}</h6>
            <p class="text-sm text-blue-700 font-medium">
              <span class="text-lime-500 mr-1">●</span>{{ testimonial.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Reseña -->
  <section class="text-center py-12 mb-8">
    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide mb-6">
      ¿Ya visitaste San Luis? Comparte tu experiencia
    </h2>
    <button
      class="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-10 py-3 rounded-lg tracking-wide transition-colors"
    >
      Escribir reseña
    </button>
  </section>
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
