import { watch } from 'vue'
import { useFetch } from '@/composables/useFetch'
import { usePagination } from '@/composables/usePagination'
import { useFilter } from '@/composables/useFilter'
import { PUBLIC } from '@/api/endpoints'

export function useEntidades(slug) {
  // Composable reutilizable para peticiones HTTP
  const { data, loading, error, get } = useFetch()

  // Manejo de paginación
  const pagination = usePagination()

  // Manejo de filtros
  const filter = useFilter()

  // Obtener entidades desde la API
  async function fetchEntidades() {
    // Parámetros base de la petición
    const params = {
      page: pagination.paginaActual.value,
    }

    // Agregar subtipos seleccionados si existen
    if (filter.subtiposSeleccionados.value.length > 0) {
      params.subtipos = filter.subtiposSeleccionados.value
    }

    // Petición GET al endpoint dinámico según el slug
    const response = await get(PUBLIC.ENTIDADES(slug), params)

    // Actualizar datos de paginación usando la respuesta del backend
    if (response?.data) {
      pagination.updateFromResponse(response.data)
    }
  }

  // Escuchar cambios en los filtros seleccionados
  watch(
    filter.subtiposSeleccionados,
    () => {
      // Reiniciar a la primera página al cambiar filtros
      pagination.paginaActual.value = 1

      // Recargar entidades con los nuevos filtros
      fetchEntidades()
    },
    { deep: true },
  )

  // Escuchar cambios en la página actual
  watch(pagination.paginaActual, () => {
    // Recargar entidades al cambiar de página
    fetchEntidades()
  })

  // Exponer propiedades y funciones del composable
  return {
    entidades: data,
    loading,
    error,
    pagination,
    filter,
    fetchEntidades,
  }
}
