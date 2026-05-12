<template>
  <div class="bg-stone-50">
    <!-- Hero -->
    <div class="relative h-[350px] md:h-[450px] overflow-hidden">
      <img
        v-if="sitios.length > 0 && sitios[0].imagenes?.[0]"
        :src="sitios[0].imagenes[0]"
        alt="Sitios Turísticos San Luis"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>

    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
      <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 mb-8 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900">Sitios Turísticos</h1>
        <hr class="border-stone-300 my-4 max-w-md mx-auto" />
        <p class="text-stone-500 max-w-xl mx-auto leading-relaxed">
          Descubre los lugares más hermosos de San Luis. Cascadas, ríos, cerros y paisajes que te dejarán sin aliento.
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="rounded-2xl overflow-hidden">
          <div class="h-56 bg-stone-200 animate-pulse" />
          <div class="p-5 bg-white space-y-3">
            <div class="h-5 bg-stone-200 rounded animate-pulse w-3/4" />
            <div class="h-4 bg-stone-200 rounded animate-pulse w-full" />
          </div>
        </div>
      </div>

      <!-- Vacío -->
      <div v-else-if="sitios.length === 0" class="text-center py-16">
        <p class="text-stone-400 text-lg">Aún no hay sitios turísticos registrados.</p>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="sitio in sitios"
          :key="sitio.id"
          class="group bg-white rounded-2xl overflow-hidden ring-1 ring-stone-200/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500"
        >
          <!-- Galería de imágenes -->
          <div class="relative h-56 overflow-hidden">
            <img
              :src="sitio.imagenes?.[currentImage[sitio.id] || 0]"
              :alt="sitio.nombre"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <!-- Controles de imagen -->
            <div v-if="sitio.imagenes?.length > 1" class="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                @click.stop="prevImage(sitio.id, sitio.imagenes.length)"
                class="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                @click.stop="nextImage(sitio.id, sitio.imagenes.length)"
                class="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Indicadores -->
            <div v-if="sitio.imagenes?.length > 1" class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              <span
                v-for="(_, i) in sitio.imagenes"
                :key="i"
                class="w-1.5 h-1.5 rounded-full transition-colors"
                :class="(currentImage[sitio.id] || 0) === i ? 'bg-white' : 'bg-white/50'"
              />
            </div>

            <!-- Badge lugar -->
            <span
              v-if="sitio.lugar"
              class="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1"
            >
              <svg class="w-3 h-3 text-lime-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              {{ sitio.lugar }}
            </span>
          </div>

          <div class="p-5">
            <h3 class="font-bold text-stone-900 text-lg mb-2">{{ sitio.nombre }}</h3>
            <p class="text-sm text-stone-500 leading-relaxed line-clamp-3">{{ sitio.descripcion }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { getSitiosTuristicos } from '@/modules/home/services/home.api'

const sitios = ref([])
const loading = ref(true)
const currentImage = reactive({})

async function fetchSitios() {
  try {
    const { data } = await getSitiosTuristicos()
    sitios.value = data.data
  } catch (error) {
    console.error('Error cargando sitios:', error)
  } finally {
    loading.value = false
  }
}

function nextImage(sitioId, total) {
  const current = currentImage[sitioId] || 0
  currentImage[sitioId] = (current + 1) % total
}

function prevImage(sitioId, total) {
  const current = currentImage[sitioId] || 0
  currentImage[sitioId] = (current - 1 + total) % total
}

onMounted(() => { fetchSitios() })
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
