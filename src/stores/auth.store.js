// Importa defineStore para crear stores con Pinia
import { defineStore } from 'pinia'

// Importa utilidades reactivas de Vue
import { ref, computed } from 'vue'

// Instancia personalizada de Axios
import api from '@/api/axios'

// Endpoints de autenticación
import { AUTH } from '@/api/endpoints'

// Constantes de roles
import { ROLES } from '@/constants/roles'

// ======================================
// STORE DE AUTENTICACIÓN
// ======================================
// Maneja:
// - Usuario autenticado
// - Token JWT
// - Login y logout
// - Registro
// - Verificación de sesión
//
export const useAuthStore = defineStore('auth', () => {

  // ==================================
  // ESTADO
  // ==================================

  // Información del usuario autenticado
  const user = ref(null)

  // Token JWT guardado en localStorage
  const token = ref(localStorage.getItem('auth_token'))

  // Estado de carga para peticiones async
  const loading = ref(false)

  // ==================================
  // GETTERS
  // ==================================

  // Verifica si el usuario está autenticado
  // Debe existir token y usuario
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // Verifica si el usuario tiene rol administrador
  const isAdmin = computed(() => user.value?.rol?.id === ROLES.ADMIN)

  // ==================================
  // ACCIONES
  // ==================================

  // Guarda la sesión del usuario
  // y almacena el token en localStorage
  function setSession(userData, tokenValue) {
    user.value = userData
    token.value = tokenValue

    localStorage.setItem('auth_token', tokenValue)
  }

  // Limpia completamente la sesión local
  function clearSession() {
    user.value = null
    token.value = null

    localStorage.removeItem('auth_token')
  }

  // ==================================
  // LOGIN
  // ==================================
  // Envía credenciales al backend
  // y guarda la sesión si es exitoso
  async function login(credentials) {
    const { data } = await api.post(AUTH.LOGIN, credentials)

    setSession(data.data.usuario, data.data.token)

    return data
  }

  // ==================================
  // REGISTRO
  // ==================================
  // Registra un nuevo usuario
  async function register(userData) {
    const { data } = await api.post(AUTH.REGISTER, userData)

    return data
  }

  // ==================================
  // VERIFICAR CÓDIGO
  // ==================================
  // Verifica el código enviado al correo
  // y autentica automáticamente al usuario
  async function verificarCodigo(payload) {
    const { data } = await api.post(AUTH.VERIFICAR_CODIGO, payload)

    setSession(data.data.usuario, data.data.token)

    return data
  }

  // ==================================
  // VERIFICAR AUTENTICACIÓN
  // ==================================
  // Comprueba si el token sigue siendo válido
  // obteniendo el usuario autenticado
  async function checkAuth() {

    // Si no hay token, no hay sesión
    if (!token.value) return false

    try {
      loading.value = true

      // Obtiene el usuario autenticado
      const { data } = await api.get(AUTH.ME)

      // Guarda los datos del usuario
      user.value = data.data

      return true

    } catch {

      // Si falla, limpia la sesión
      clearSession()

      return false

    } finally {

      // Finaliza el estado de carga
      loading.value = false
    }
  }

  // ==================================
  // LOGOUT
  // ==================================
  // Cierra sesión en backend y frontend
  async function logout() {
    try {

      // Informa al backend que cierre sesión
      await api.post(AUTH.LOGOUT)

    } catch {

      // Si falla el logout en backend,
      // igualmente se limpia la sesión local
    } finally {

      // Limpia datos locales
      clearSession()
    }
  }

  // ==================================
  // VERIFICAR EMAIL
  // ==================================
  // Consulta si un correo ya existe
  async function checkEmail(email) {
    const { data } = await api.get(AUTH.CHECK_EMAIL, {
      params: { email },
    })

    return data.data.exists
  }

  // ==================================
  // EXPORTACIÓN DEL STORE
  // ==================================
  return {
    user,
    token,
    loading,

    isAuthenticated,
    isAdmin,

    login,
    register,
    verificarCodigo,
    checkAuth,
    logout,
    checkEmail,
  }
})
