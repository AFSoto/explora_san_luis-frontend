// Importa ref de Vue para crear estados reactivos
import { ref } from 'vue'

// Cliente Axios configurado para consumir la API
import api from '@/api/axios'

// Composable reutilizable para manejar peticiones HTTP
export function useFetch() {

  // Estado reactivo para almacenar la respuesta
  const data = ref(null)

  // Estado reactivo para controlar loading
  const loading = ref(false)

  // Estado reactivo para mensajes de error
  const error = ref('')

  // Función principal que ejecuta peticiones HTTP
  async function execute(method, url, payload = null, config = {}) {

    // Activa loading al iniciar la petición
    loading.value = true

    // Limpia errores anteriores
    error.value = ''

    try {

      // Si el método es GET:
      // los datos se envían como query params
      const response = method === 'get'
        ? await api.get(url, { params: payload, ...config })

        // Para otros métodos:
        // payload se envía en el body
        : await api[method](url, payload, config)

      // Guarda respuesta en estado reactivo
      data.value = response.data

      // Retorna datos al componente/composable que lo use
      return response.data

    } catch (err) {

      // Obtiene mensaje de error desde backend
      // o usa uno genérico
      error.value = err.response?.data?.message || 'Ocurrió un error'

      // Relanza el error para poder manejarlo externamente
      throw err

    } finally {

      // Desactiva loading al finalizar
      loading.value = false
    }
  }

  // Expone estados y métodos HTTP reutilizables
  return {

    // Estados
    data,
    loading,
    error,

    // Métodos HTTP
    get: (url, params, config) =>
      execute('get', url, params, config),

    post: (url, payload, config) =>
      execute('post', url, payload, config),

    put: (url, payload, config) =>
      execute('put', url, payload, config),

    patch: (url, payload, config) =>
      execute('patch', url, payload, config),

    del: (url, config) =>
      execute('delete', url, null, config),
  }
}
