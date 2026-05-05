<template>
  <!--
    Sección de sitios turísticos destacados.
    Muestra:
    - Título y descripción
    - Estado loading (skeletons)
    - Estado vacío
    - Cards en scroll horizontal
  -->
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

      <!-- Encabezado de la sección -->
      <div class="flex items-end justify-between mb-10">
        <div>
          <!-- Etiqueta superior -->
          <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
            Destinos
          </span>

          <!-- Título principal -->
          <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
            Lugares imperdibles
          </h2>

          <!-- Descripción -->
          <p class="text-lg text-stone-500 mt-2">
            Los destinos que no puedes dejar de visitar
          </p>
        </div>

        <!-- Link para ir al listado completo -->
        <router-link
          :to="{ name: ROUTE_NAMES.SITIOS_TURISTICOS }"
          class="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors no-underline"
        >
          Ver todos

          <!-- Icono flecha -->
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>

      <!--
        Estado loading.
        Se muestran skeletons mientras llegan los datos desde la API.
      -->
      <div v-if="loading" class="flex gap-6 overflow-hidden">
        <div v-for="n in 4" :key="n" class="flex-shrink-0 w-72 sm:w-80">

          <!-- Skeleton imagen -->
          <div class="h-52 rounded-t-2xl bg-stone-200 animate-pulse" />

          <!-- Skeleton contenido -->
          <div class="p-5 bg-stone-100 rounded-b-2xl">
            <div class="h-4 bg-stone-200 rounded animate-pulse w-3/4 mb-2" />
            <div class="h-3 bg-stone-200 rounded animate-pulse w-full" />
          </div>
        </div>
      </div>

      <!--
        Estado vacío.
        Se muestra cuando no hay sitios turísticos.
      -->
      <div v-else-if="sitios.length === 0" class="text-center py-12">
        <p class="text-stone-400 text-lg">
          Aún no hay sitios turísticos registrados.
        </p>
      </div>

      <!--
        Contenido principal.
        Cards horizontales con scroll.
      -->
      <div v-else class="relative">

        <!--
          Contenedor scrollable horizontal.
          snap-x permite efecto de alineación suave entre cards.
        -->
        <div
          ref="scrollRef"
          class="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >

          <!-- Card individual -->
          <article
            v-for="sitio in sitios"
            :key="sitio.id"
            class="group flex-shrink-0 w-72 sm:w-80 bg-stone-50 rounded-2xl overflow-hidden ring-1 ring-stone-200/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 snap-start"
          >

            <!-- Imagen -->
            <div class="relative h-52 overflow-hidden">
              <img
                :src="sitio.imagenes?.[0]"
                :alt="sitio.nombre"
                loading="lazy"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <!-- Badge de ubicación -->
              <span
                v-if="sitio.lugar"
                class="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1"
              >

                <!-- Icono ubicación -->
                <svg class="w-3 h-3 text-lime-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>

                {{ sitio.lugar }}
              </span>
            </div>

            <!-- Información -->
            <div class="p-5">

              <!-- Nombre -->
              <h5 class="font-bold text-stone-900 text-base mb-1">
                {{ sitio.nombre }}
              </h5>

              <!-- Descripción -->
              <p class="text-sm text-stone-500 leading-relaxed line-clamp-2">
                {{ sitio.descripcion }}
              </p>
            </div>
          </article>
        </div>

        <!-- Botón scroll izquierda -->
        <button
          @click="scroll('left')"
          class="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-stone-200 items-center justify-center text-stone-600 hover:text-emerald-700 transition-colors z-10"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Botón scroll derecha -->
        <button
          @click="scroll('right')"
          class="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg ring-1 ring-stone-200 items-center justify-center text-stone-600 hover:text-emerald-700 transition-colors z-10"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importa ref para manejar referencia reactiva al contenedor scroll
import { ref } from 'vue'

// Constantes de nombres de rutas
import { ROUTE_NAMES } from '@/constants/routes'

/*
|--------------------------------------------------------------------------
| Props
|--------------------------------------------------------------------------
| sitios  -> listado de sitios turísticos
| loading -> controla estado de carga
|--------------------------------------------------------------------------
*/
defineProps({
  sitios: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

/*
|--------------------------------------------------------------------------
| Referencia al contenedor horizontal
|--------------------------------------------------------------------------
*/
const scrollRef = ref(null)

/*
|--------------------------------------------------------------------------
| Scroll horizontal manual
|--------------------------------------------------------------------------
| direction:
| - right -> mueve hacia la derecha
| - left  -> mueve hacia la izquierda
|--------------------------------------------------------------------------
*/
function scroll(direction) {
  // Evita errores si el contenedor aún no existe
  if (!scrollRef.value) return

  // Realiza scroll suave horizontal
  scrollRef.value.scrollBy({
    left: direction === 'right' ? 340 : -340,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
/*
  Oculta scrollbar manteniendo funcionalidad scroll
*/
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/*
  Elimina subrayado de links
*/
.no-underline {
  text-decoration: none;
}

/*
  Limita texto a 2 líneas
*/
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
