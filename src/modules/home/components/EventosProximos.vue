<template>
  <!--
    Sección de eventos destacados.
    Muestra:
    - Encabezado
    - Estado loading
    - Estado vacío
    - Grid de eventos
  -->
  <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20">

    <!-- Encabezado -->
    <div class="flex items-end justify-between mb-10">
      <div>

        <!-- Etiqueta superior -->
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 mb-2">
          Agenda
        </span>

        <!-- Título principal -->
        <h2 class="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">
          Próximos eventos
        </h2>

        <!-- Descripción -->
        <p class="text-lg text-stone-500 mt-2">
          No te pierdas las celebraciones y festividades locales
        </p>
      </div>

      <!-- Link para ir al listado completo -->
      <router-link
        :to="{ name: ROUTE_NAMES.EVENTOS }"
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
      Skeletons mientras llegan los eventos desde la API.
    -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <!-- Skeleton card -->
      <div v-for="n in 4" :key="n" class="rounded-2xl overflow-hidden">

        <!-- Skeleton imagen -->
        <div class="h-40 bg-stone-200 animate-pulse" />

        <!-- Skeleton contenido -->
        <div class="p-5 bg-white">
          <div class="h-4 bg-stone-200 rounded animate-pulse w-3/4 mb-2" />
          <div class="h-3 bg-stone-200 rounded animate-pulse w-full" />
        </div>
      </div>
    </div>

    <!--
      Estado vacío.
      Se muestra cuando no existen eventos.
    -->
    <div v-else-if="eventos.length === 0" class="text-center py-12">
      <p class="text-stone-400 text-lg">
        No hay eventos próximos por el momento.
      </p>
    </div>

    <!--
      Grid de eventos.
      Se renderiza cuando existen datos.
    -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <!-- Card individual -->
      <article
        v-for="evento in eventos"
        :key="evento.id"
        class="group bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-stone-200/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
      >

        <!-- Imagen / poster -->
        <div class="relative h-40 overflow-hidden">

          <!-- Imagen del evento -->
          <img
            v-if="evento.url_poster"
            :src="evento.url_poster"
            :alt="evento.nombre"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <!-- Placeholder cuando no hay poster -->
          <div
            v-else
            class="w-full h-full bg-emerald-100 flex items-center justify-center"
          >

            <!-- Icono calendario -->
            <svg
              class="w-12 h-12 text-emerald-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <!-- Badge fecha -->
          <span
            class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm"
          >
            {{ evento.fecha_inicio }}
          </span>
        </div>

        <!-- Información -->
        <div class="p-5 text-center">

          <!-- Nombre -->
          <h6 class="font-bold text-stone-900 mb-1">
            {{ evento.nombre }}
          </h6>

          <!-- Descripción -->
          <p class="text-sm text-stone-500 leading-relaxed line-clamp-2">
            {{ evento.descripcion }}
          </p>

          <!-- Lugar -->
          <p
            v-if="evento.lugar"
            class="text-xs text-emerald-600 font-medium mt-2 flex items-center justify-center gap-1"
          >

            <!-- Icono ubicación -->
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
            </svg>

            {{ evento.lugar }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// Importa constantes de nombres de rutas
import { ROUTE_NAMES } from '@/constants/routes'

/*
|--------------------------------------------------------------------------
| Props
|--------------------------------------------------------------------------
| eventos -> listado de eventos
| loading -> controla estado de carga
|--------------------------------------------------------------------------
*/
defineProps({
  eventos: {
    type: Array,
    required: true,
  },

  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
/*
  Elimina subrayado de links
*/
.no-underline {
  text-decoration: none;
}

/*
  Limita texto a máximo 2 líneas
*/
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
