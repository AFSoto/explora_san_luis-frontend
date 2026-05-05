import { ref } from 'vue'
import { getSitiosTuristicos } from '@/modules/home/services/home.api.js'

export function useHomeData() {
  const sitios  = ref([])
  const loading = ref(true)
  const error   = ref(null)

  async function fetchSitios() {
    try {
      const { data } = await getSitiosTuristicos()
      sitios.value = data.data
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { sitios, loading, error, fetchSitios }
}
