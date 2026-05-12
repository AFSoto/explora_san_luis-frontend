<template>
  <div class="bg-stone-50 min-h-[80vh]">
    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
      <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 mb-8 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900">Eventos</h1>
        <hr class="border-stone-300 my-4 max-w-md mx-auto" />
        <p class="text-stone-500 max-w-xl mx-auto leading-relaxed">
          Festividades, celebraciones y actividades culturales que hacen de San Luis un destino único.
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="rounded-2xl overflow-hidden">
          <div class="h-52 bg-stone-200 animate-pulse" />
          <div class="p-5 bg-white space-y-3">
            <div class="h-5 bg-stone-200 rounded animate-pulse w-3/4" />
            <div class="h-4 bg-stone-200 rounded animate-pulse w-full" />
          </div>
        </div>
      </div>

      <!-- Vacío -->
      <div v-else-if="eventos.length === 0" class="text-center py-16">
        <svg class="w-16 h-16 text-stone-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p class="text-stone-400 text-lg">No hay eventos próximos por el momento.</p>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="evento in eventos"
          :key="evento.id"
          class="group bg-white rounded-2xl overflow-hidden ring-1 ring-stone-200/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
        >
          <div class="relative h-52 overflow-hidden">
            <img
              v-if="evento.url_poster"
              :src="evento.url_poster"
              :alt="evento.nombre"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div v-else class="w-full h-full bg-emerald-50 flex items-center justify-center">
              <svg class="w-16 h-16 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Badge fechas -->
            <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm text-center">
              <p class="text-xs font-bold text-emerald-800">{{ evento.fecha_inicio }}</p>
              <p v-if="evento.fecha_fin !== evento.fecha_inicio" class="text-xs text-stone-500">
                al {{ evento.fecha_fin }}
              </p>
            </div>
          </div>

          <div class="p-5">
            <h3 class="font-bold text-stone-900 text-lg mb-2">{{ evento.nombre }}</h3>
            <p class="text-sm text-stone-500 leading-relaxed line-clamp-3">{{ evento.descripcion }}</p>

            <p v-if="evento.lugar" class="text-xs text-emerald-600 font-medium mt-3 flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              {{ evento.lugar }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getEventos } from '@/modules/home/services/home.api'

const eventos = ref([])
const loading = ref(true)

async function fetchEventos() {
  try {
    const { data } = await getEventos()
    eventos.value = data.data
  } catch (error) {
    console.error('Error cargando eventos:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => { fetchEventos() })
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
