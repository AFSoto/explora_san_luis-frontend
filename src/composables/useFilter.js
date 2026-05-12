// Importa ref de Vue para crear estado reactivo
import { ref } from 'vue'

// Composable reutilizable para manejar filtros
export function useFilter() {

  // Lista de subtipos seleccionados
  const subtiposSeleccionados = ref([])

  // Agrega o elimina un subtipo del filtro
  function toggleSubtipo(id) {

    // Busca la posición del subtipo
    const index = subtiposSeleccionados.value.indexOf(id)

    // Si no existe en la lista, lo agrega
    if (index === -1) {

      subtiposSeleccionados.value.push(id)

    } else {

      // Si ya existe, lo elimina
      subtiposSeleccionados.value.splice(index, 1)
    }
  }

  // Reinicia todos los filtros seleccionados
  function reset() {
    subtiposSeleccionados.value = []
  }

  // Expone estado y funciones del composable
  return {
    subtiposSeleccionados,
    toggleSubtipo,
    reset,
  }
}
