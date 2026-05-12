// Importa herramientas reactivas de Vue
import { ref, computed } from 'vue'

// Composable reutilizable para manejar paginación
export function usePagination() {

  // Página actual
  const paginaActual = ref(1)

  // Total de páginas disponibles
  const totalPaginas = ref(1)

  // Total de registros
  const total = ref(0)

  // Indica si existe página anterior
  const hasPrev = computed(() =>
    paginaActual.value > 1
  )

  // Indica si existe página siguiente
  const hasNext = computed(() =>
    paginaActual.value < totalPaginas.value
  )

  // Avanza a la siguiente página
  function next() {
    if (hasNext.value) {
      paginaActual.value++
    }
  }

  // Retrocede a la página anterior
  function prev() {
    if (hasPrev.value) {
      paginaActual.value--
    }
  }

  // Navega hacia una página específica
  function goTo(page) {

    // Valida que la página exista
    if (page >= 1 && page <= totalPaginas.value) {
      paginaActual.value = page
    }
  }

  // Actualiza estado de paginación
  // usando metadata enviada por backend
  function updateFromResponse(meta) {

    // Página actual recibida
    paginaActual.value = meta.pagina_actual

    // Cantidad total de páginas
    totalPaginas.value = meta.total_paginas

    // Cantidad total de registros
    total.value = meta.total
  }

  // Reinicia estado de paginación
  function reset() {
    paginaActual.value = 1
    totalPaginas.value = 1
    total.value = 0
  }

  // Expone estado y funciones del composable
  return {
    paginaActual,
    totalPaginas,
    total,
    hasPrev,
    hasNext,
    next,
    prev,
    goTo,
    updateFromResponse,
    reset,
  }
}
