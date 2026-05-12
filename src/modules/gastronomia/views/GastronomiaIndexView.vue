<template>
  <div class="bg-stone-50">
    <!-- Hero -->
    <div class="relative h-[350px] md:h-[450px] overflow-hidden">
      <img
        :src="tipoImagen"
        alt="Gastronomía San Luis"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>

    <section class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
      <!-- Volver -->
      <button
        @click="$router.back()"
        class="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 mb-8 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Volver
      </button>

      <!-- Encabezado -->
      <div class="text-center mb-8">
        <h1 class="text-4xl md:text-5xl font-bold text-stone-900">Gastronomía</h1>
        <hr class="border-stone-300 my-4 max-w-md mx-auto" />
        <p class="text-stone-500 max-w-xl mx-auto leading-relaxed">
          Descubre los mejores sabores de San Luis, Antioquia.
          Usa los filtros para encontrar restaurantes, cafeterías, panaderías y más.
        </p>
      </div>

      <!-- Filtros -->
      <FilterBar
        :subtipos="subtipos"
        :seleccionados="filter.subtiposSeleccionados.value"
        @toggle="filter.toggleSubtipo"
      />

      <!-- Loading -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div v-for="n in 6" :key="n" class="flex gap-5 bg-white rounded-2xl p-5">
          <div class="w-32 h-32 bg-stone-200 rounded-xl animate-pulse" />
          <div class="flex-1 space-y-3">
            <div class="h-5 bg-stone-200 rounded animate-pulse w-3/4" />
            <div class="h-4 bg-stone-200 rounded animate-pulse w-1/2" />
            <div class="h-4 bg-stone-200 rounded animate-pulse w-1/3" />
          </div>
        </div>
      </div>

      <!-- Vacío -->
      <div v-else-if="entidadesList.length === 0" class="text-center py-16">
        <svg class="w-16 h-16 text-stone-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <p class="text-stone-400 text-lg">No se encontraron resultados con los filtros seleccionados.</p>
        <button
          @click="filter.reset(); fetchEntidades()"
          class="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
        >
          Limpiar filtros
        </button>
      </div>

      <!-- Cards -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EntidadCard
          v-for="entidad in entidadesList"
          :key="entidad.id"
          :entidad="entidad"
        />
      </div>

      <!-- Paginación -->
      <PaginationBar
        :pagina-actual="pagination.paginaActual.value"
        :total-paginas="pagination.totalPaginas.value"
        :has-prev="pagination.hasPrev.value"
        :has-next="pagination.hasNext.value"
        @prev="pagination.prev()"
        @next="pagination.next()"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCatalogoStore } from '@/stores/catalogo.store'
import { useEntidades } from '@/composables/useEntidades'
import EntidadCard from '@/components/shared/EntidadCard.vue'
import FilterBar from '@/components/shared/FilterBar.vue'
import PaginationBar from '@/components/shared/PaginationBar.vue'

const SLUG = 'gastronomia'

const catalogoStore = useCatalogoStore()
const { entidades, loading, error, pagination, filter, fetchEntidades } = useEntidades(SLUG)

const entidadesList = computed(() => entidades.value?.data?.entidades || [])

const tipo = computed(() => catalogoStore.tipos.find((t) => t.slug === SLUG))
const tipoImagen = computed(() => tipo.value?.url_imagen || '')
const subtipos = computed(() => tipo.value?.tipos_especificos || [])

onMounted(() => {
  fetchEntidades()
})
</script>
