import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/api/axios'
import { PUBLIC } from '@/api/endpoints'

export const useCatalogoStore = defineStore('catalogo', () => {
  const tipos = ref([])
  const loading = ref(false)
  const loaded = ref(false)

  const getSubtiposByTipo = computed(() => {
    return (idTipo) => {
      const tipo = tipos.value.find((t) => t.id === idTipo)
      return tipo?.tipos_especificos || []
    }
  })

  async function fetchTipos() {
    if (loaded.value) return
    try {
      loading.value = true
      const { data } = await api.get(PUBLIC.TIPOS)
      tipos.value = data.data
      loaded.value = true
    } catch (error) {
      console.error('Error cargando tipos:', error)
    } finally {
      loading.value = false
    }
  }

  return {
    tipos,
    loading,
    loaded,
    getSubtiposByTipo,
    fetchTipos,
  }
})
