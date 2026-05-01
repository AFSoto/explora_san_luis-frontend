// Importa Axios para realizar peticiones HTTP
import axios from 'axios'

// Crea una instancia personalizada de Axios
const api = axios.create({

  // URL base del backend Laravel
  // Todas las peticiones usarán esta URL automáticamente
  baseURL: 'http://localhost:8000/api',

  // Headers por defecto para todas las peticiones
  headers: {

    // Indica que se espera una respuesta en formato JSON
    Accept: 'application/json',

    // Indica que los datos enviados serán JSON
    'Content-Type': 'application/json',
  },
})

// ===============================
// INTERCEPTOR DE REQUEST
// ===============================
// Se ejecuta antes de cada petición HTTP
// Su función es agregar automáticamente el token JWT
api.interceptors.request.use((config) => {

  // Obtiene el token guardado en localStorage
  const token = localStorage.getItem('auth_token')

  // Si existe token, lo agrega al header Authorization
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  // Retorna la configuración modificada
  return config
})

// ===============================
// INTERCEPTOR DE RESPONSE
// ===============================
// Se ejecuta cuando llega una respuesta
// Permite manejar errores globales de la aplicación
api.interceptors.response.use(

  // Si la respuesta es exitosa, simplemente la retorna
  (response) => response,

  // Manejo global de errores
  (error) => {

    // Obtiene el código HTTP del error
    const status = error.response?.status

    // Obtiene el código de error personalizado enviado por Laravel
    const errorCode = error.response?.data?.error

    // Si el token expiró o es inválido
    // pero NO es un error de credenciales incorrectas
    if (status === 401 && errorCode !== 'CREDENCIALES_INVALIDAS') {

      // Elimina el token guardado
      localStorage.removeItem('auth_token')

      // Redirige automáticamente al login
      window.location.href = '/login'
    }

    // Retorna el error para que pueda seguir manejándose
    return Promise.reject(error)
  },
)

// Exporta la instancia personalizada de Axios
export default api
